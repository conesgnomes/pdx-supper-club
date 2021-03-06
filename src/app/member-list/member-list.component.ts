import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model';
import { Router } from '@angular/router';
import { MemberService } from '../member.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.scss'],
  providers: [MemberService]
})
export class MemberListComponent implements OnInit {

  members: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(
    private router: Router,
    private memberService: MemberService) { }

  ngOnInit() {
    this.members = this.memberService.getMembers();
  }

  memberDetail(clickedMember) {
    this.router.navigate(['members', clickedMember.$key]);
  }

}
