export type ICard = {
  imgUrl: string;
  imgAlt: string;
  title: string;
  body: string;
  linkToWebsite: string;
  linkToSource: string;
}
export type ISection = {
  [name: string]: React.MutableRefObject<any>;
}
export type INavbar = {
  aboutRefNav:    any;
  skillsRefNav:   any;
  projectsRefNav: any;
  contactRefNav:  any;
  aboutRef:    any;
  skillsRef:   any;
  projectsRef: any;
  contactRef:  any;
}
export type ISendEmail = {
  (name: string, email: string, message: string, setOpenSuccess: React.Dispatch<React.SetStateAction<boolean>>, setOpenError: React.Dispatch<React.SetStateAction<boolean>>, setLoading: React.Dispatch<React.SetStateAction<boolean>>): void;
}
export type ISectionInView = {
  (sections: Array<HTMLElement>, navArray: Array<HTMLElement>): void;
}



