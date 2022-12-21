import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplitterModule } from 'primeng/splitter';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { PersonalDataComponent } from './personal-data/personal-data.component';
import { StudiesComponent } from './studies/studies.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { AboutMeComponent } from './about-me/about-me.component';

@NgModule({
  declarations: [
    CurriculumComponent,
    PersonalDataComponent,
    StudiesComponent,
    ExperienceComponent,
    SkillsComponent,
    AboutMeComponent,
  ],
  exports: [CurriculumComponent, SkillsComponent],
  imports: [CommonModule, SplitterModule, RatingModule, FormsModule],
})
export class ComponentsModule {}
