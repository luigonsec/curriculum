import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

import info from 'src/data/info';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.scss'],
})
export class CurriculumComponent implements OnInit {
  @ViewChild('curriculum', { static: true }) curriculum?: ElementRef;

  public lang: string = '';
  public name: string = '';
  public position: string = '';

  constructor(private translate: TranslateService) {}

  public downloadAsPDF() {
    if (this.curriculum) {
      html2canvas(this.curriculum.nativeElement, {
        allowTaint: false,
        ignoreElements: (elem: Element) => {
          return false;
        },
        useCORS: true,
      }).then((canvas) => {
        const img = canvas.toDataURL('image/png');
        const doc = new jsPDF('p', 'mm', 'a4');

        const height =
          (document.getElementById('Curriculum') || {}).offsetHeight || 0;
        const width =
          (document.getElementById('Curriculum') || {}).offsetWidth || 0;

        const newWidth = (297 / height) * width;

        doc.addImage(img, 'JPEG', (210 - newWidth) / 2, 0, newWidth, 297);
        doc.save(`${this.name.toLowerCase().split(' ').join('_')}.pdf`);
      });
    }
  }

  setLanguage(language: string) {
    this.translate.use(language);
  }

  ngOnInit(): void {
    this.translate.onLangChange.subscribe((event) => {
      this.lang = event.lang;
      this.name = info[this.lang].name;
      this.position = info[this.lang].position;
    });
    this.lang = this.translate.currentLang;
    this.name = info[this.lang].name;
    this.position = info[this.lang].position;
  }
}
