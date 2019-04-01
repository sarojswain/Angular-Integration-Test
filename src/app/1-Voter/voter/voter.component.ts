import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.scss']
})
export class VoterComponent implements OnInit {

  @Input() othersVote = 0;
  @Input() myVote = 0;

  @Output() vote = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  upVote() {
    if(this.myVote == 1)
       return;

    this.myVote++;
    this.vote.emit({myVote: this.myVote});
  }

  downVote() {
    if(this.myVote == -1)
       return;

    this.myVote--;
    this.vote.emit({myVote: this.myVote});
  }
}
