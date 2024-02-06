import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  standalone: true,
  imports: []
})
export class UserInfoComponent implements OnInit {

  @Input() userInfoTitle: string = 'User Information';
  @Input() userName: string = 'A';
  @Input() userRole: string = 'Front-end Developer';
  @Input() viewProfileText: string = 'View Profile';

  constructor() { }

  ngOnInit(): void {
  }

}
