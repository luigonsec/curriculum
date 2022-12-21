import { Component, OnInit } from '@angular/core';
import Experience from 'src/app/interfaces/Experience';
import info from 'src/data/info';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements OnInit {
  public experiences: Experience[] = [];

  constructor() {}

  ngOnInit(): void {
    this.experiences = info.experience;
  }
}
