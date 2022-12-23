import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import Experience from 'src/app/interfaces/Experience';
import info from 'src/data/info';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements OnInit {
  public experiences: Experience[] = [];

  @Input('lang') lang: string = this.translate.currentLang;
  constructor(private translate: TranslateService) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.ngOnInit();
  }
  ngOnInit(): void {
    this.experiences = info[this.lang].experience;
  }
}
