import { createSectionTimeline } from "../helpers/sectionTimeline";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export function initAvaliacoes(root) {
  if (!root) return;

  const title = root.querySelector(".js-avaliacoes-title");
  const decor = root.querySelector(".js-avaliacoes-decorativo");
  const button = root.querySelector(".js-avaliacoes-button");
  const cards = root.querySelectorAll(".js-avaliacoes-cards");

  const tl = createSectionTimeline({ trigger: root, start: "top 50%" });

  tl.from(decor, { autoAlpha: 0 })
    .from(title, { filter: "blur(24px)" }, "<")
    .from(button, { autoAlpha: 0 }, "<")
    .from(cards, { autoAlpha: 0, stagger: 0.1 }, "<");

  gsap.fromTo(
    root,
    { scale: 0.95 },
    {
      scale: 1,
      scrollTrigger: {
        trigger: root,
        start: "top bottom",
        end: "+=500",
        scrub: true,
      },
    }
  );
}
