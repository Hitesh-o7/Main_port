import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const applyScrollAnimations = ({ elementRef, textRef, setBgColor }) => {
  gsap.timeline({
    scrollTrigger: {
      trigger: elementRef.current,
      start: "top 70%",
      end: "bottom 30%",
      scrub: true,
      markers: true, // Remove markers in production
      onEnter: () => {
        setBgColor("#222");
        gsap.to(textRef.current, { color: "#ffca28", duration: 1 });
      },
      onLeaveBack: () => {
        setBgColor("#fff");
        gsap.to(textRef.current, { color: "#000", duration: 1 });
      },
    },
  });
};
