import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import PersonalDataItem from 'src/app/interfaces/PersonalDataItem';
import info from 'src/data/info';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.scss'],
})
export class PersonalDataComponent implements OnInit {
  public personal: PersonalDataItem[] = [];

  @Input('lang') lang: string = this.translate.currentLang;
  constructor(private translate: TranslateService) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.ngOnInit();
  }
  ngOnInit(): void {
    this.personal = info[this.lang].personal;
  }
}
