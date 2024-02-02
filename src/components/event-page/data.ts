import img1 from "../../assets/event/1.webp";
import img2 from "../../assets/event/2.webp";
import img3 from "../../assets/event/3.webp";
import img4 from "../../assets/event/4.webp";
import img5 from "../../assets/event/5.webp";
import img6 from "../../assets/event/6.webp";

interface Content {
  id: number;
  img: string;
  title: string;
  our_view: string;
}

const eventContentArray: Content[] = [
  {
    id: 1,
    img: img1,
    title: "Plan Your Anniversary Party Now",
    our_view:
      "At Perfect Event, we believe in commemorating moments that matter, and what could be more special than an anniversary? Join us as we celebrate [X] years of cherished memories, achievements, and milestones. Prepare for an evening filled with elegance, nostalgia, and a touch of modern flair! Our anniversary event promises an enchanting blend of entertainment, delectable cuisine, and delightful surprises. Whether you're an esteemed client, a valued partner, or a part of our wonderful community, this celebration is our way of expressing gratitude for your unwavering support. ",
  },
  {
    id: 2,
    img: img2,
    title: "Your Dream Birthday Party",
    our_view:
      "Birthdays are more than just a date; they're moments to cherish and celebrate! We understand the importance of making your day extraordinary, and that's why we've curated an exceptional birthday experience just for you. At Perfect Event, birthdays are not just occasions; they're cherished milestones filled with joy, love, and unforgettable experiences. Join us in making your birthday an extraordinary celebration you'll always remember! ",
  },
  {
    id: 3,
    img: img3,
    title: "Plan Your Wedding Party Now",
    our_view:
      "We believe that your wedding day should be nothing short of perfection—an exquisite blend of romance, elegance, and unforgettable moments. Let us be a part of your love story and turn your dream wedding into a breathtaking reality. At Perfect Event, we understand that your wedding day is one of the most significant moments of your life. Let us make it an extraordinary, love-filled affair that exceeds your every expectation. ",
  },
  {
    id: 4,
    img: img4,
    title: "Plan Your Graduation Party Now",
    our_view:
      "At Perfect Event, we understand the significance of your academic milestone, and we're here to help you celebrate this momentous occasion in style! Your graduation is a culmination of hard work, dedication, and achievements, and it deserves a memorable celebration. We take pride in celebrating your achievements and creating a graduation party that marks the beginning of an exciting new chapter in your life. Let's make your graduation celebration an event to remember! ",
  },
  {
    id: 5,
    img: img5,
    title: "Plan Your Gender Reveal Party Now",
    our_view:
      "We specialize in creating unforgettable moments, and what could be more exciting than revealing the gender of your little bundle of joy in a fun and memorable way? Let us help you orchestrate the perfect gender reveal party that will leave your friends and family in awe. At Perfect Event, we understand the significance of this precious milestone, and we're dedicated to helping you create a gender reveal party that's filled with love, joy, and cherished memories. Let's celebrate the next chapter of your family's story together! ",
  },
  {
    id: 6,
    img: img6,
    title: "Plan Your Compony Occasion Party Now",
    our_view:
      "We are passionate about transforming ordinary occasions into extraordinary memories that last a lifetime. With a team of dedicated event planners and creative minds, we specialize in curating and orchestrating unforgettable experiences for every milestone in your life. At Perfect Event, we don't just plan events; we create magical moments that are etched in your heart forever. Trust us to make your special occasions truly exceptional. ",
  },
];
export type { Content };
export default eventContentArray;
