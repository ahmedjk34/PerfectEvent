import img1 from "../../assets/event/1.webp";
import img2 from "../../assets/event/2.webp";
import img3 from "../../assets/event/3.webp";
import img4 from "../../assets/event/4.webp";
import img5 from "../../assets/event/5.webp";
import img6 from "../../assets/event/6.webp";
import tImg1 from "../../assets/event/t1.webp";
import tImg2 from "../../assets/event/t2.webp";
import tImg3 from "../../assets/event/t3.webp";
import vImg1 from "../../assets/event/v1.webp";
import vImg2 from "../../assets/event/v2.webp";
import vImg3 from "../../assets/event/v3.webp";
import cImg1 from "../../assets/event/c1.webp";
import cImg2 from "../../assets/event/c2.webp";
import cImg3 from "../../assets/event/c3.webp";
import flImg1 from "../../assets/event/fl1.webp";
import flImg2 from "../../assets/event/fl2.webp";
import flImg3 from "../../assets/event/fl3.webp";
import foImg1 from "../../assets/event/fo1.webp";
import foImg2 from "../../assets/event/fo2.webp";
import foImg3 from "../../assets/event/fo3.webp";

interface Content {
  id: number;
  img: string;
  title: string;
  our_view: string;
}
interface Option {
  title: string;
  img: string;
  price: string;
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
const optionsArray: { mainTitle: string; options: Option[] }[] = [
  {
    mainTitle: "Theme",
    options: [
      {
        title: "Black-Tie",
        img: tImg1,
        price: "450$",
      },
      {
        title: "80's Night",
        img: tImg2,
        price: "220$",
      },
      {
        title: "Winter Vibes",
        img: tImg3,
        price: "550$",
      },
    ],
  },
  {
    mainTitle: "Venue",
    options: [
      {
        title: "Outside Garden",
        img: vImg1,
        price: "1200$",
      },
      {
        title: "April's Venue",
        img: vImg2,
        price: "4000$",
      },
      {
        title: "A Forest",
        img: vImg3,
        price: "850$",
      },
    ],
  },
  {
    mainTitle: "Chairs",
    options: [
      {
        title: "Counter-stool",
        img: cImg1,
        price: "4₪/Chair",
      },
      {
        title: "Eames Chair",
        img: cImg2,
        price: "9₪/Chair",
      },
      {
        title: "Barrel Chair",
        img: cImg3,
        price: "15₪/Chair",
      },
    ],
  },
  {
    mainTitle: "Flowers",
    options: [
      {
        title: "Lily Flowers",
        img: flImg1,
        price: "12₪/Pack",
      },
      {
        title: "Roses",
        img: flImg2,
        price: "15₪/Pack",
      },
      {
        title: "Tulips",
        img: flImg3,
        price: "20₪/Chair",
      },
    ],
  },
  {
    mainTitle: "Food",
    options: [
      {
        title: "Seafood",
        img: foImg1,
        price: "40₪/Dish",
      },
      {
        title: "Vegan Food ",
        img: foImg2,
        price: "15₪/Dish",
      },
      {
        title: "German Desserts",
        img: foImg3,
        price: "2₪/Dish",
      },
    ],
  },
];
export type { Content };
export { eventContentArray, optionsArray };
