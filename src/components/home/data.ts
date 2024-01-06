import img1 from "../../assets/home/img1.webp";
import img2 from "../../assets/home/img2.webp";
import img3 from "../../assets/home/img3.webp";
import img4 from "../../assets/home/img4.jpg";
import slide1 from "../../assets/home/slide1.webp";
import slide2 from "../../assets/home/slide2.webp";
import slide3 from "../../assets/home/slide3.webp";
import slide4 from "../../assets/home/slide4.webp";
import slide5 from "../../assets/home/slide5.webp";
import slide6 from "../../assets/home/slide6.webp";
interface whatCanWeDoForYouContent {
  title: string;
  desc: string;
  img: string;
}

const contentArray: whatCanWeDoForYouContent[] = [
  {
    title: "Prefect Wedding",
    desc: "Let us craft your dream day and transform your vision into the perfect wedding you've always imagined",
    img: img1,
  },
  {
    title: "Cute Birthday Party",
    desc: "Let us create the perfect birthday bash tailored just for you",
    img: img2,
  },
  {
    title: "Gender Reveal Party",
    desc: "Let your loved ones know the gender of your new child in an exciting and memorable way.",
    img: img3,
  },
  {
    title: "Happy Anniversary",
    desc: "Let us craft your perfect anniversary party , to enternalzie your love",
    img: img4,
  },
];

const sliderArray = [slide1, slide6, slide5, slide4, slide3, slide2];
export { contentArray, sliderArray };
