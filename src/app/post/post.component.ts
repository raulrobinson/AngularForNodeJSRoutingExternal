import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Post} from "../models/post";
import {PostsService} from "../_services/posts.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit{
  displayedColumns: string[] = [ 'id', 'userId', 'title', 'body' ];
  public dataSource = new MatTableDataSource<Post>();

  constructor(private postService: PostsService) { }

  ngOnInit(): void {
    this.retrievePosts();
  }

  private retrievePosts() {
    this.postService.getPostsContent().subscribe({
      next: (data) => {
        this.dataSource.data = data;
        console.log(Object.values(data));
      }, error: (e) => console.error(e)
    });
  }

}
