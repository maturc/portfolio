export type ICard = {
  imgUrl: string;
  imgAlt: string;
  title: string;
  body: string;
  websiteButton: string;
  sourceButton: string;
  moreButton?: string;
  linkToWebsite?: string;
  linkToSource: string;
}
export type ISection = {
  [name: string]: React.MutableRefObject<any> | any;
  readonly translation?: any;
  //this doesn't do anything, all of it is just <any> 🙂
}
export type INavbar = {
  aboutRefNav:    React.MutableRefObject<any>;
  skillsRefNav:   React.MutableRefObject<any>;
  projectsRefNav: React.MutableRefObject<any>;
  contactRefNav:  React.MutableRefObject<any>;
  aboutRef:    React.MutableRefObject<any>;
  skillsRef:   React.MutableRefObject<any>;
  projectsRef: React.MutableRefObject<any>;
  contactRef:  React.MutableRefObject<any>;
  translation: any;
}
export type ISendEmail = {
  (name: string, email: string, message: string, setOpenSuccess: React.Dispatch<React.SetStateAction<boolean>>, setOpenError: React.Dispatch<React.SetStateAction<boolean>>, setLoading: React.Dispatch<React.SetStateAction<boolean>>): void;
}
export type ISectionInView = {
  (sections: Array<HTMLElement>, navArray: Array<HTMLElement>): void;
}

//doesn't do anything, might in the future, probably won't
type translation = {
  language: string;
  nav: {
      about: string;
      skills: string;
      projects: string;
      contact: string;
  };
  about: {
      header: string;
      paragraph: string;
  };
  skills: {
      header: string;
      languages: string;
      frameworks: string;
      databases: string;
      technologies: string;
      bundlers: string;
      tools: string;
  };
  projects: {
      header: string;
      btnWebsite: string;
      btnSource: string;
      btnMore: string;
      lavander: project;
      itcomp: project;
      algovisualize: project;
      more: project;
  };
  contact: {
      header: string;
      form: form;
  };
}
type project = {
  header: string;
  paragraph: string;
  alt: string;
}
type form = {
  name: string;
  email: string;
  message: string;
  button: string;
}