export type ICard = {
  imgUrl: string;
  imgAlt: string;
  title: string;
  body: string;
}
export type ISection = {
  //[name: string]: React.MutableRefObject<null>;
  [name: string]: any;
}
export type INavbar = {
  aboutRefNav:    any;
  skillsRefNav:   any;
  projectsRefNav: any;
  contactRefNav:  any;
}