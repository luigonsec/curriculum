import { Component, OnInit } from '@angular/core';
import info from 'src/data/info';
@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss'],
})
export class LanguagesComponent implements OnInit {
  public languages: any[] = [];
  constructor() {}

  ngOnInit(): void {
    this.languages = info.languages;
  }
}
