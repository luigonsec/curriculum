import { Component, OnInit } from '@angular/core';
import Skill from 'src/app/interfaces/Skill';
import info from 'src/data/info';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [];
  constructor() {}

  ngOnInit(): void {
    this.skills = info.skills;
  }
}
