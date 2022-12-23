import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import data from 'src/data/info';
@Component({
  selector: 'app-exporter',
  templateUrl: './exporter.component.html',
  styleUrls: ['./exporter.component.scss'],
})
export class ExporterComponent implements OnInit {
  @ViewChild('curriculum', { static: true }) curriculum?: ElementRef;
  @Input('lang') lang: string = this.translate.currentLang;

  constructor(private translate: TranslateService) {}

  public downloadAsPDF() {
    const curriculum = document.getElementById('Curriculum');
    if (curriculum) {
      html2canvas(curriculum, {
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
        doc.save(
          `${data[this.lang].name
            .toLowerCase()
            .split(' ')
            .join('_')}_${this.lang.toUpperCase()}.pdf`
        );
      });
    }
  }

  ngOnInit(): void {}
}
