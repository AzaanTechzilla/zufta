import logo from "../../../public/assets/images/zufta-Logo1.png";
import footer from "../../../public/assets/images/footer.png";
import { IoLocation } from "react-icons/io5";
import { FaClock } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { PiPhoneCallFill } from "react-icons/pi";
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import img1 from "../../../public/assets/images/image1.png"
import img2 from "../../../public/assets/images/image2.png"
import img3 from "../../../public/assets/images/image3.png"
import img4 from "../../../public/assets/images/image4.png"
import img5 from "../../../public/assets/images/image5.png"

const images = { logo, footer, img1,img2, img3, img4, img5  };
const Icons={
    location: IoLocation,
    clock: FaClock,
    mail: IoMdMail,
    phone:PiPhoneCallFill,
    insta: RiInstagramFill,
    youtube: FaYoutube,
    facebook: FaFacebookSquare,
    twitter: FaTwitter
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

