import img1 from "../../assets/discover/1.webp";
import img2 from "../../assets/discover/2.webp";
import img3 from "../../assets/discover/3.webp";
import img4 from "../../assets/discover/4.webp";
import img5 from "../../assets/discover/5.webp";
import img6 from "../../assets/discover/6.webp";

interface Discover {
  id: number;
  title: string;
  price: number;
  desc: string;
  img: string;
}

const contentArray: Discover[] = [
  {
    id: 1,
    title: "Happy Anniversary!",
    price: 2500,
    desc: "We honor the timeless bond between couples. Whether you're marking a milestone first year or a golden fifty years together, Let us make it special for you.",
    img: img1,
  },
  {
    id: 2,
    title: "Birthday Party",
    price: 500,
    desc: "Whether you're planning for yourself or a loved one, we're here to guide you in creating magical moments that will be cherished for years to come. ",
    img: img2,
  },
  {
    id: 3,
    title: "Your Dream Wedding",
    price: 8500,
    desc: "We understand that your wedding party is a celebration of love, unity, and cherished moments. We're here to make an unforgettable, momentous event. ",
    img: img3,
  },
  {
    id: 4,
    title: "Graduation Party",
    price: 1000,
    desc: "Whether you're celebrating a high school graduation, or an advanced degree, let us help you plan an extraordinary party that honors your success. ",
    img: img4,
  },
  {
    id: 5,
    title: "Gender Reveal Party",
    price: 750,
    desc: "From planning tips to capturing the priceless moment, let's make it an occasion filled with joy, anticipation, and heartfelt memories that you'll cherish for a lifetime. ",
    img: img5,
  },
  {
    id: 6,
    title: "Company Occasion",
    price: 3500,
    desc: "Let us reflect your company's success and aspirations. Whether it's a milestone celebration or an annual gathering, let us be your partner in making a good event. ",
    img: img6,
  },
];
export default contentArray;
