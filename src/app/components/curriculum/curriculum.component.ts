import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

import data from 'src/data/info';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.scss'],
})
export class CurriculumComponent implements OnInit {
  @ViewChild('curriculum', { static: true }) curriculum?: ElementRef;
  public name: string = '';
  public position: string = '';
  constructor() {}

  public downloadAsPDF() {
    if (this.curriculum) {
      html2canvas(this.curriculum.nativeElement).then((canvas) => {
        const img = canvas.toDataURL('image/png');
        const doc = new jsPDF('p', 'mm', 'a4');
        doc.addImage(img, 'JPEG', 0, 0, 210, 297);
        doc.save(`${this.name.toLowerCase().split(' ').join('_')}.pdf`);
      });
    }
  }

  ngOnInit(): void {
    this.name = data.name;
    this.position = data.position;
  }
}
