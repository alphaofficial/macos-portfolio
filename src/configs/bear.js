import { FaPaw } from "react-icons/fa";
import { GiNinjaHeroicStance } from "react-icons/gi";
import { VscGithub } from "react-icons/vsc";
import { GoRepo, GoBrowser } from "react-icons/go";
import { RiGamepadLine } from "react-icons/ri";
import { HiFire } from "react-icons/hi";
import { AiFillShopping, AiFillCar, AiOutlineAudit } from "react-icons/ai";

const bear = [
  {
    id: "profile",
    title: "Profile",
    icon: <FaPaw />,
    md: [
      {
        id: "about-me",
        title: "About Me",
        file: "markdown/about-me.md",
        icon: <GiNinjaHeroicStance />,
        excerpt: "Hey there! I'm a shadow monarch lost in human world..."
      },
      {
        id: "github-stats",
        title: "Github Stats",
        file: "markdown/github-stats.md",
        icon: <VscGithub />,
        excerpt: "Here are some status about my github account..."
      },
      {
        id: "about-site",
        title: "About This Site",
        file: "markdown/about-site.md",
        icon: <GoBrowser />,
        excerpt: "Something about this personal portfolio site..."
      }
    ]
  },
  {
    id: "project",
    title: "Projects",
    icon: <GoRepo />,
    md: [
      {
        id: "fuelsmart",
        title: "Fuelsmart",
        file: "markdown/fuelsmart.md",
        icon: <HiFire />,
        excerpt: "Fuelsmart is a fuel...",
        link: `https://play.google.com/store/apps/details?id=com.anchorintelligence.fuelsmart&hl=en_US&gl=US`
      },
      {
        id: "swoove",
        title: "Swoove Delivery",
        file: "markdown/swoove.md",
        icon: <AiFillCar />,
        excerpt: "A logisitics aggregator platform",
        link: "https://swoove.delivery"
      },
      {
        id: "thryll",
        title: "Thryll",
        file: "markdown/thryll.md",
        icon: <RiGamepadLine />,
        excerpt: "A ticketing platform...",
        link: "https://thryll.app"
      },
      {
        id: "curiashops",
        title: "Curiashops",
        file: "markdown/curiashops.md",
        icon: <AiFillShopping />,
        excerpt: "An e-commerce platform",
        link: "https://curiashops.com"
      },
      {
        id: "ananse",
        title: "Ananse Hub",
        file: "markdown/ananse.md",
        icon: <AiOutlineAudit />,
        excerpt: "An educational gaming platform",
        link: "https://anansehub.com/"
      }
    ]
  }
];

export default bear;
