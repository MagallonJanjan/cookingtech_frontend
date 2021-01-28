import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiRequestService } from '../../services/apirequest.service';
import { EncryptService } from '../../services/encrypt.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() comment: any;
  replies: any;
  @Output() submitted = new EventEmitter<boolean>();
  user_id: any;
  constructor(
    private apiService: ApiRequestService,
    private dataEnc: EncryptService
  ) { }

  isHide: boolean = true;
  encData: any;

  ngOnInit(): void {
    this.encData = window.localStorage.getItem('__cookingtech');
    this.user_id = this.dataEnc.decrypt(this.encData).user.id;
    this.replies = this.comment.replies;
  }

  showReplyInput(id: any) {
    if (!this.isHide) {
      let content = (<HTMLInputElement>document.getElementById(id)).value;
      (<HTMLInputElement>document.getElementById(id)).value = "";
      let newReply = {
        "user_id": this.user_id,
        "comment_id": this.comment.id,
        "content": content
      };
      this.apiService.apiRequest(`/replies`, "post", newReply)
        .subscribe(respond => {
          console.log(respond);
          this.submitted.emit(true);
        });
    }
    this.isHide = !this.isHide;
  }
}
