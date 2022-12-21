export default interface Skill {
  category: string;
  values: SkillItem[];
}

interface SkillItem {
  name: string;
  value: number;
}
