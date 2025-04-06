import { IoLocation } from "react-icons/io5";
import { FaClock } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { PiPhoneCallFill } from "react-icons/pi";
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { MdSecurity } from "react-icons/md";
import { MdDashboard } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { MdOutlineDashboard } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { IoMdSettings } from "react-icons/io";
import vector from "@/images/Vector.png";
import vector1 from "@/images/Vector1.png";
import vector2 from "@/images/Vector2.png";
import vector3 from "@/images/Vector3.png";
import vector4 from "@/images/Vector4.png";
import tour1 from "@/images/tour1.jpg";
import Alltourimg1 from "@/images/alltoursimg1.jpg";

const images = {
  logo: "/assets/images/zufta-logo1.png",
  footer: "/assets/images/footer.png",
  img1: "/assets/images/image1.png",
  img2: "/assets/images/image2.png",
  img3: "/assets/images/image3.png",
  img4: "/assets/images/image4.png",
  img5: "/assets/images/image5.png",
  contactbannerimg: "/assets/images/contactbanner.jpg",
  homebannerimg: "/assets/images/homebanner.jpg",
  homethirdsec: "/assets/images/img.png",
  comma: "/assets/images/comma.png",
  tourist: "/assets/images/tourist.png",
  tourist1: "/assets/images/tourist1.png",
  tourist2: "/assets/images/tourist2.png",
  tourist3: "/assets/images/tourist3.png",
  aboutbanner: "/assets/images/aboutbanner.jpg",
  payment: "/assets/images/payment.png.png",
  payment2: "/assets/images/payment2.png.png",
  payment3: "/assets/images/payment3.png.png",
  payment4: "/assets/images/payment4.png.png",
  payment5: "/assets/images/payment5.png.png",
  blog1: "/assets/images/blog1.png",
  blog2: "/assets/images/blog2.jpg",
  blog3: "/assets/images/blog3.jpg",
  explore: "/assets/images/explore.jpg",
  premium: "/assets/images/premium.png",
  private: "/assets/images/private.png",
  aboutusimg2: "/assets/images/about-us-img-2.png",
  tour1: "/assets/images/tour1.jpg",
  alltoursbannerimg: "/assets/images/alltours.jpg",
};
const vectorarray = [
  {
    img: vector,
  },
  {
    img: vector1,
  },
  {
    img: vector2,
  },
  {
    img: vector3,
  },
  {
    img: vector4,
  },
];
 const homeTourPickup = [
  {
      id: 1,
      title: 'Naran Kaghan',
      image: Alltourimg1,
      duration: '5 days trip',
      price: '105,000'
  },
  {
      id: 2,
      title: 'Hunza',
      image: Alltourimg1,
      duration: '4 days trip',
      price: '95,000'
  },
  {
      id: 3,
      title: 'Swat Kalam',
      image: Alltourimg1,
      duration: '5 days trip',
      price: '125,000'
  },
  {
      id: 4,
      title: 'Neelam Valley',
      image: Alltourimg1,
      duration: '5 days trip',
      price: '85,000'
  },
  {
      id: 5,
      title: 'Swat Kalam',
      image: Alltourimg1,
      duration: '5 days trip',
      price: '125,000'
  },
  {
      id: 6,
      title: 'Neelam Valley',
      image: Alltourimg1,
      duration: '5 days trip',
      price: '85,000'
  },
  {
      id: 7,
      title: 'Naran Kaghan',
      image: Alltourimg1,
      duration: '5 days trip',
      price: '105,000'
  },
  {
      id: 8,
      title: 'Hunza',
      image: Alltourimg1,
      duration: '4 days trip',
      price: '95,000'
  },
]

const tourTypearray = [
  {
    title: "Naran Kaghan",
    para: "5 days trip . From Rs.105,000",
    img: Alltourimg1,
    basis: "25%",
    basis2: "100%",
  },
  {
    title: "Naran Kaghan",
    para: "5 days trip . From Rs.105,000",
    img: Alltourimg1,
    basis: "25%",
    basis2: "100%",
  },
  {
    title: "Naran Kaghan",
    para: "5 days trip . From Rs.105,000",
    img: Alltourimg1,
    basis: "25%",
    basis2: "100%",
  },
  {
    title: "Naran Kaghan",
    para: "5 days trip . From Rs.105,000",
    img: Alltourimg1,
    basis: "25%",
    basis2: "100%",
  },
  {
    title: "Naran Kaghan",
    para: "5 days trip . From Rs.105,000",
    img: Alltourimg1,
    basis: "25%",
    basis2: "100%",
  },
  {
    title: "Naran Kaghan",
    para: "5 days trip . From Rs.105,000",
    img: Alltourimg1,
    basis: "25%",
    basis2: "100%",
  },
  {
    title: "Naran Kaghan",
    para: "5 days trip . From Rs.105,000",
    img: Alltourimg1,
    basis: "25%",
    basis2: "100%",
  },
  {
    title: "Naran Kaghan",
    para: "5 days trip . From Rs.105,000",
    img: Alltourimg1,
    basis: "25%",
    basis2: "100%",
  },
  {
    title: "Naran Kaghan",
    para: "5 days trip . From Rs.105,000",
    img: Alltourimg1,
    basis: "25%",
    basis2: "100%",
  },
  {
    title: "Naran Kaghan",
    para: "5 days trip . From Rs.105,000",
    img: Alltourimg1,
    basis: "25%",
    basis2: "100%",
  },
  {
    title: "Naran Kaghan",
    para: "5 days trip . From Rs.105,000",
    img: Alltourimg1,
    basis: "25%",
    basis2: "100%",
  },
  {
    title: "Naran Kaghan",
    para: "5 days trip . From Rs.105,000",
    img: Alltourimg1,
    basis: "25%",
    basis2: "100%",
  },
  {
    title: "Naran Kaghan",
    para: "5 days trip . From Rs.105,000",
    img: Alltourimg1,
    basis: "25%",
    basis2: "100%",
  },
  {
    title: "Naran Kaghan",
    para: "5 days trip . From Rs.105,000",
    img: Alltourimg1,
    basis: "25%",
    basis2: "100%",
  },
];
const Icons = {
  location: IoLocation,
  clock: FaClock,
  mail: IoMdMail,
  phone: PiPhoneCallFill,
  insta: RiInstagramFill,
  youtube: FaYoutube,
  facebook: FaFacebookSquare,
  twitter: FaTwitter,
  arrow: IoIosArrowDown,
  menu: FaBarsStaggered,
  rightarrow: FaArrowRightLong,
  calender: SlCalender,
  security: MdSecurity,
  downarrow: FaAngleDown,
  dashboard: MdDashboard,
  lineHeart: FaRegHeart,
  fillheart: FaHeart,
  linedashboard: MdOutlineDashboard,
  lineclock: FaRegClock,
  linesetting: CiSettings,
  fillsetting:IoMdSettings,
};
const tourarray = [
  {
    title: "Naran Kaghan",
    para: "5 days trip . From Rs.105,000",
    title2: "Swat Kalam",
    para2: "5 days trip . From Rs.125,000",
    img: tour1,
    img2: tour1,
  },
  {
    title: "Hunza",
    para: "5 days trip . From Rs.105,000",
    title2: "Neelam Valley",
    para2: "5 days trip . From Rs.125,000",
    img: tour1,
    img2: tour1,
  },
  {
    title: "Swat Kalam",
    para: "5 days trip . From Rs.105,000",
    title2: "Naran Kaghan",
    para2: "5 days trip . From Rs.125,000",
    img: tour1,
    img2: tour1,
  },
  {
    title: "Neelam Valley",
    para: "5 days trip . From Rs.105,000",
    title2: "Hunza",
    para2: "5 days trip . From Rs.125,000",
    img: tour1,
    img2: tour1,
  },
];

// ✅ Update footer images to use paths directly
const footerpaymentsec = [
  { img: "/assets/images/image1.png" },
  { img: "/assets/images/image2.png" },
  { img: "/assets/images/image3.png" },
  { img: "/assets/images/image4.png" },
  { img: "/assets/images/image5.png" },
];

export {
  images,
  Icons,
  footerpaymentsec,
  vectorarray,
  tourarray,
  tourTypearray,
  homeTourPickup,
};
