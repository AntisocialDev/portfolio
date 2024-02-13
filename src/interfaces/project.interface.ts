export interface IProject {
  link: string;
  image: string;
  title: string;
  details: string;
}

export const myProjects: IProject[] = [
  {
    link: 'https://book-finder-jet.vercel.app/',
    image: "/images/book-shelf.svg",
    title: "Book Finder",
    details:
      "An app where you can search for a book using the title, author or publisher details",
  },
  {
    link: 'https://asecevents.web.app/',
    image: "/images/event-img.png",
    title: "Asec Events",
    details: "A simple landing page for an event center",
  },
  {
    link: 'https://netflix-clone-27e1f.web.app/landing-page/landing',
    image: "/images/netflix-img.png",
    title: "Netflix Clone",
    details:
      "A basic netflix landing page clone created with angular",
  },
];
