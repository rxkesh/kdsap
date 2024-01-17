import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { I as Icon } from "../../../chunks/Icon.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex flex-col"><div class="flex flex-col justify-evenly h-screen items-center"><h1 class="text-4xl text-primary-500 text-center" data-svelte-h="svelte-1oy7par">Get in touch with us!</h1> <div class="grid grid-rows-1 grid-cols-2 gap-8 p-8"><div class="card variant-filled p-4 rounded-md shadow-md"><div class="flex flex-col"><h2 class="text-xl font-bold text-primary-500 mb-2" data-svelte-h="svelte-sg457x">Are you a vt student interested in joining?</h2> <div class="flex space-x-4 items-center"><p class="text-variant-500" data-svelte-h="svelte-gxo31k">We are looking for members of the Virginia Tech community passionate about making a
							difference in health promotion in our community here in Blacksburg and the surrounding
							areas. General body meetings will be bi-weekly (every two weeks) with special dates
							for training sessions and other events. If you are interested in getting involved,
							fill out the form accessible here, and keep an eye out for more information and
							announcements soon!</p> <a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSewVhfANHkR5szwX6P7SlFxMX2-doZoUinkCzZxMo9BZ9Tpvg/viewform" class="btn variant-filled-tertiary shadow-md hover:shadow-lg transition-all duration-300 h-10"><span>${validate_component(Icon, "Icon").$$render($$result, { icon: "pajamas:smile" }, {}, {})}</span> <span data-svelte-h="svelte-juq0es">Get Involved!</span></a></div></div></div> <div class="card variant-filled p-4 rounded-md shadow-md" data-svelte-h="svelte-1kfvqgx"><h2 class="text-xl font-bold text-primary-500 mb-2">Are you a New River Valley resident interested in getting a kidney screening?</h2> <p class="text-variant-500">Follow these instructions and follow this link</p></div></div> <div class="logo-cloud grid-cols-1 lg:!grid-cols-3 w-40 h-30 [&>.logo-item]:bg-tertiary-500"><a class="logo-item" href="mailto:kdsap.vt@gmail.com">${validate_component(Icon, "Icon").$$render($$result, { icon: "line-md:email" }, {}, {})}</a> <a class="logo-item" href="/"></a> <a class="logo-item" href="https://www.instagram.com/kdsapvt/">${validate_component(Icon, "Icon").$$render($$result, { icon: "bi:instagram" }, {}, {})}</a></div></div></div>`;
});
export {
  Page as default
};
