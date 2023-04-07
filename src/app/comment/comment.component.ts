import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {CommentsService} from "../_services/comments.service";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit{
  displayedColumns: string[] = [ 'id', 'postId', 'name', 'email', 'body' ];
  public dataSource = new MatTableDataSource<Comment>();
  constructor(private commentService: CommentsService) { }

  ngOnInit(): void {
    this.retrieveComments();
  }

  private retrieveComments() {
    this.commentService.getCommentContent().subscribe({
      next: (data) => {
        this.dataSource.data = data;
        console.log(Object.values(data));
      }, error: (e) => console.error(e)
    });
  }

}
