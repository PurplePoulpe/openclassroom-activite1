import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-postlistitem',
  templateUrl: './postlistitem.component.html',
  styleUrls: ['./postlistitem.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;
  @Input() postCreationDate: Date;

  constructor() { }

  ngOnInit() {}

  addLoveIts() {
    this.postLoveIts = this.postLoveIts + 1 ;
  }
  removeLoveIts() {
    this.postLoveIts = this.postLoveIts - 1 ;
  }

}