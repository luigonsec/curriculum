import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import info from 'src/data/info';
@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss'],
})
export class LanguagesComponent implements OnInit {
  public languages: any[] = [];
  @Input('lang') lang: string = this.translate.currentLang;
  constructor(private translate: TranslateService) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.ngOnInit();
  }
  ngOnInit(): void {
    this.languages = info[this.lang].languages;
  }
}
