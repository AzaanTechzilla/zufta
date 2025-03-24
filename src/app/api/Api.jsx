import { IoLocation } from "react-icons/io5";
import { FaClock } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { PiPhoneCallFill } from "react-icons/pi";
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { FaBarsStaggered } from "react-icons/fa6";

// ✅ Use direct paths instead of imports
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
};

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
};

// ✅ Update footer images to use paths directly
const footerpaymentsec = [
  { img: "/assets/images/image1.png" },
  { img: "/assets/images/image2.png" },
  { img: "/assets/images/image3.png" },
  { img: "/assets/images/image4.png" },
  { img: "/assets/images/image5.png" },
];

export { images, Icons, footerpaymentsec };
