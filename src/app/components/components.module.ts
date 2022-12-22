import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { PersonalDataComponent } from './personal-data/personal-data.component';
import { StudiesComponent } from './studies/studies.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { AboutMeComponent } from './about-me/about-me.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { ChipModule } from 'primeng/chip';
import { LanguagesComponent } from './languages/languages.component';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    CurriculumComponent,
    PersonalDataComponent,
    StudiesComponent,
    ExperienceComponent,
    SkillsComponent,
    AboutMeComponent,
    IntroductionComponent,
    LanguagesComponent,
  ],
  exports: [CurriculumComponent, SkillsComponent],
  imports: [
    CommonModule,
    ButtonModule,
    RatingModule,
    FormsModule,
    ChipModule,
    TableModule,
  ],
})
export class ComponentsModule {}
