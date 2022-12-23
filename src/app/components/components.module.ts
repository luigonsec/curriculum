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
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { I18nConfig } from 'src/i18n-config';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ExporterComponent } from './exporter/exporter.component';

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
    ExporterComponent,
  ],
  exports: [CurriculumComponent, SkillsComponent],
  imports: [
    CommonModule,
    ButtonModule,
    RatingModule,
    FormsModule,
    ChipModule,
    HttpClientModule,
    TableModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [I18nConfig],
})
export class ComponentsModule {}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
