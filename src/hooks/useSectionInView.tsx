import { useEffect } from "react";
import { ISectionInView } from "../interfaces";


const useSectionInView: ISectionInView = (sections, navArray) => {
  const options = {
    root: null,
    teshold: 0.9,
    rootMargin: "-30% 0px -65% 0px"
  }
  //rootMargin: "-10% 0px -80%"
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach( entry => {
          if( entry.isIntersecting ) {
            navArray.forEach( (element: HTMLElement) => {
              element.classList.remove("navbar__current")
            });
            if( entry.target.id !== "intro" ) {
              navArray[Number(entry.target.id)].classList.toggle("navbar__current");
              sections[Number(entry.target.id)+1].classList.add("section_animation");
            }
          }
        });
      }, options );
      sections.forEach( (section: HTMLElement) => {
        observer.observe(section);
      });
      return () => {
        sections.forEach( (section: HTMLElement) => {
          observer.unobserve(section);
        });
      };
  }, [sections, navArray, options]);
}

export default useSectionInView;