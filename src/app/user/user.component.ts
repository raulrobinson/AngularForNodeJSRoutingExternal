import {Component, OnInit} from '@angular/core';
import {UsersService} from "../_services/users.service";
import {MatTableDataSource} from "@angular/material/table";
import {User} from "../models/user";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
  displayedColumns: string[] = [ 'id', 'name', 'username', 'email' ];
  public dataSource = new MatTableDataSource<User>();

  constructor(private userService: UsersService) { }
  ngOnInit(): void {
    this.retrieveUsers();
  }

  private retrieveUsers() {
    this.userService.getUsersContent()
      .subscribe({
        next: (data) => {
          this.dataSource.data = data;
          console.log(Object.values(data));
        }, error: (e) => console.error(e)
      });
  }

}
