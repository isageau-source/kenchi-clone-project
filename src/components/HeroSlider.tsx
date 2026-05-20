import hero1 from "@/assets/kenchi/hero1.jpg";
import hero2 from "@/assets/kenchi/hero2.jpg";
import hero3 from "@/assets/kenchi/hero3.jpg";
import hero4 from "@/assets/kenchi/hero4.jpg";
import hero5 from "@/assets/kenchi/hero5.jpg";
import hero6 from "@/assets/kenchi/hero6.jpg";
import hero7 from "@/assets/kenchi/hero7.jpg";
import hero8 from "@/assets/kenchi/hero8.jpg";
import { GallerySlider } from "./GallerySlider";

const slides = [
  { src: hero1, caption: "Let Kenchi create your Lifestyle Garden" },
  { src: hero2, caption: "Feature Stone Walls" },
  { src: hero3, caption: "Custom Decking" },
  { src: hero4, caption: "Paving & Pathways" },
  { src: hero5, caption: "Lighting & Water Features" },
  { src: hero6, caption: "Privacy Screens" },
  { src: hero7, caption: "Pool Surrounds" },
  { src: hero8, caption: "Complete Outdoor Living" },
];

export function HeroSlider() {
  return <GallerySlider slides={slides} />;
}