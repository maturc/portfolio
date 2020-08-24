import { useEffect } from "react";
import { ISectionInView } from "../interfaces";


const useSectionInView: ISectionInView = (sections, navArray) => {
  const options = {
    root: null,
    teshold: 1,
    rootMargin: "-10% 0px -80%"
  }
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach( entry => {
          if( entry.isIntersecting ) {
            navArray.forEach( (element: HTMLElement) => {
              element.classList.remove("test")
            });
            if( entry.target.id !== "intro" )
              navArray[Number(entry.target.id)].classList.toggle("test");
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