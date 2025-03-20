import logo from "../../assets/images/zufta-logo1.png";
import footer from "../../assets/images/footer.png";
import { IoLocation } from "react-icons/io5";
import { FaClock } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { PiPhoneCallFill } from "react-icons/pi";
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import img1 from "../../assets/images/image1.png"
import img2 from "../../assets/images/image2.png"
import img3 from "../../assets/images/image3.png"
import img4 from "../../assets/images/image4.png"
import img5 from "../../assets/images/image5.png";
import { IoIosArrowDown } from "react-icons/io";

const images = { logo, footer, img1,img2, img3, img4, img5  };
const Icons={
    location: IoLocation,
    clock: FaClock,
    mail: IoMdMail,
    phone:PiPhoneCallFill,
    insta: RiInstagramFill,
    youtube: FaYoutube,
    facebook: FaFacebookSquare,
    twitter: FaTwitter,
    arrow: IoIosArrowDown
}
const footerpaymentsec= [
    {
        img: img1
    },
    {
        img: img2
    },
    {
        img: img3
    },
    {
        img: img4
    },
    {
        img: img5
    },
]

export {images, Icons ,footerpaymentsec};

