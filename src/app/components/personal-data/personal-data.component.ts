import { Component, OnInit } from '@angular/core';
import PersonalDataItem from 'src/app/interfaces/PersonalDataItem';
import info from 'src/data/info';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.scss'],
})
export class PersonalDataComponent implements OnInit {
  public info: PersonalDataItem[] = [];
  constructor() {}

  ngOnInit(): void {
    this.info = info.personal;
  }
}
