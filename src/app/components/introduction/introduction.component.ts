import { Component, OnInit } from '@angular/core';
import info from 'src/data/info';
@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss'],
})
export class IntroductionComponent implements OnInit {
  introduction: string[] = [];
  constructor() {}

  ngOnInit(): void {
    this.introduction = info.introduction;
  }
}
