import Experience from './Experience';
import Interest from './Interest';
import Language from './Language';
import PersonalDataItem from './PersonalDataItem';
import Skill from './Skill';
import Study from './Study';

export default interface Curriculum {
  name: string;
  position: string;
  introduction: string[];
  languages: Language[];
  personal: PersonalDataItem[];
  studies: Study[];
  skills: Skill[];
  experience: Experience[];
  interests: Interest[];
}
