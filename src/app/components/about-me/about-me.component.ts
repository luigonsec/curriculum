import { Component, OnInit } from '@angular/core';
import info from 'src/data/info';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent implements OnInit {
  interests: any[] = [];
  constructor() {}

  ngOnInit(): void {
    this.interests = info.interests;
  }
}
