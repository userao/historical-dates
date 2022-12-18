import { gsap } from 'gsap';
import MotionPathPlugin from 'gsap/MotionPathPlugin';
import { IActiveYears } from './types/data';
gsap.registerPlugin(MotionPathPlugin);

const animateCategoryChange = (rotationAngle: number, category: string, newActiveYears: IActiveYears, setNewActive: Function) => {
  const tl = gsap.timeline();
  tl.to('.carousel', {rotation: -rotationAngle, duration: 2})
    .to('.btn-container', {rotation: rotationAngle, duration: 2}, '<')
    .to('.active-category-hover', {className: 'active-category-transition', duration: 0}, '<')
    .to('.active-category-transition', {clearProps: 'all'}, '<')
    .to('.active-category', {width: 6, height: 6, background: '#42567A', className: 'inactive-category', clearProps: "all"}, '<')
    .to('.btn-container .category-name.shown', {opacity: 0, duration: 0.5}, '<')
    .to('.active-category .category-index', {opacity: 0, duration: 0}, '<')
    .to('.swiper-container', {opacity: 0, duration: 1}, '<')
    .fromTo('.active-category-transition + .category-name.hidden', {opacity: 0}, {className: 'category-name shown', opacity: 1,duration: 1}, '-=1')
    .add(() => setNewActive(category))
    .to('.category-name, .category-index', {clearProps: 'all'})
    .to('.swiper-container', {opacity: 1, duration: 1}, '<')
    .to('.from', {
      textContent: newActiveYears.from,
      duration: 2,
      ease: 'power1.out',
      snap: { textContent: 1 },
      stagger: 1,
    }, '-=4')
    .to('.to', {
      textContent: newActiveYears.to,
      duration: 2,
      ease: 'power1.out',
      snap: { textContent: 1 },
      stagger: 1,
    }, '<');
};

const animateMouseHover = (category: string) => {
  const tl = gsap.timeline({
    reversed: true, 
    paused: true, 
    defaults: {duration: 0.5}
  });
  tl.from(`#${category}`, {scale: 5, background: '#42567A'});

  return tl;
}

export { animateCategoryChange, animateMouseHover };
