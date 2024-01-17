import { c as create_ssr_component, a as add_attribute, l as each, e as escape } from "../../../chunks/ssr.js";
/* empty css                  */
import "../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import "../../../chunks/functions.js";
const soham_headshot = "/_app/immutable/assets/soham_headshot.X0mXjRNB.jpg";
const sachin_headshot = "/_app/immutable/assets/sachin_headshot.2G9_stmp.jpg";
const aryan_headshot = "/_app/immutable/assets/aryan_headshot.P004tirm.jpg";
const rakesh_headshot = "/_app/immutable/assets/rakesh_headshot.Y-gH_ah4.jpg";
const recupero_headshot = "/_app/immutable/assets/doc_recupero.A5hBpKSp.jpg";
const simonds_headshot = "/_app/immutable/assets/doc_simonds.pa4ofgjz.jpg";
const ghosheh_headshot = "/_app/immutable/assets/doc_ghosheh.qVoRge0X.jpg";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let elemCarousel;
  const headshots = [
    {
      key: "president",
      name: "Soham Desai",
      title: "President",
      class: "2025",
      major: "Nanomedicine",
      img: soham_headshot
    },
    {
      key: "vicepresident",
      name: "Sachin Gandhi",
      title: "Vice President",
      class: "2025",
      major: "Clinical Neuroscience",
      img: sachin_headshot
    },
    {
      key: "treasurer",
      name: "Aryan Bangalore",
      title: "Treasurer",
      class: "2025",
      major: "Clinical Neuroscience",
      img: aryan_headshot
    },
    {
      key: "CTO",
      name: "Rakesh Pillai",
      title: "Chief Technology Officer",
      class: "2025",
      major: "Computer Engineering",
      img: rakesh_headshot
    }
  ];
  headshots[0];
  return `<div class="flex flex-col items-center"><div class="flex flex-col justify-evenly h-screen"><div class="flex justify-center" data-svelte-h="svelte-ya5hhw"><h1 class="text-4xl text-primary-500 hover:animate-pulse">The Team</h1></div> <div class="card card-hover variant-ringed p-4 grid grid-cols-[auto_1fr_auto] gap-4 items-center max-w-2xl"> <button type="button" class="btn-icon variant-filled" data-svelte-h="svelte-3tk92b"><i class="fa-solid fa-arrow-left"></i></button>  <div class="snap-x snap-mandatory scroll-smooth flex overflow-hidden space-x-4"${add_attribute("this", elemCarousel, 0)}>${each(headshots, (headshot) => {
    return `<img class="snap-center w-[1024px] h-[512px] object-fill rounded-container-token hover:blur-lg hover:transition-all duration-700"${add_attribute("src", headshot.img, 0)} alt="${"Headshot of " + escape(headshot.name, true)}" loading="lazy" role="group" aria-label="Image Carousel"> ${``}`;
  })}</div>  <button type="button" class="btn-icon variant-filled" data-svelte-h="svelte-16ajaal"><i class="fa-solid fa-arrow-right"></i></button></div></div> <hr class="!border-t-4 !border-double"> <div class="flex flex-col justify-evenly h-screen" data-svelte-h="svelte-16wpld8"><div class="flex justify-center"><h1 class="text-4xl text-primary-500 hover:animate-pulse">The Advisory Board</h1></div> <section class="grid md:grid-cols-3 gap-4 max-w-4xl"><div class="flex flex-col items-center space-y-5"><img class="h-auto max-w-full rounded-full"${add_attribute("src", ghosheh_headshot, 0)} alt="doctor 1 on advisory board"> <h1 class="text-primary-500">Feras J Ghosheh, MD</h1></div> <div class="flex flex-col items-center space-y-5"><img class="h-auto max-w-full rounded-full object-cover "${add_attribute("src", simonds_headshot, 0)} alt="doc 3"> <h1 class="text-primary-500">Gary R Simonds, MD</h1></div> <div class="flex flex-col items-center space-y-5"><img class="h-auto max-w-full rounded-full"${add_attribute("src", recupero_headshot, 0)} alt="doc 2"> <h1 class="text-primary-500">Peter J Recupero, DO</h1></div></section></div></div>`;
});
export {
  Page as default
};
