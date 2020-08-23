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
export type ISendEmail = {
  (name: string, email: string, message: string, setOpenSuccess: React.Dispatch<React.SetStateAction<boolean>>, setOpenError: React.Dispatch<React.SetStateAction<boolean>>, setLoading: React.Dispatch<React.SetStateAction<boolean>>): void;
}



