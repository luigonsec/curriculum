export default interface Experience {
  company: string;
  start: string;
  end?: string;
  location: string;
  vertical: string;
  position: string;
  description: string;
  tasks: string[];
  stack: Technology[];
}

interface Technology {
  name: string;
  image: string;
}
