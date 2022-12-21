import { Component, OnInit } from '@angular/core';
import Study from 'src/app/interfaces/Study';

import info from 'src/data/info';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.scss'],
})
export class StudiesComponent implements OnInit {
  public info: Study[] = [];
  constructor() {}

  ngOnInit(): void {
    this.info = info.studies;
  }
}
