import { c as create_ssr_component, f as subscribe, s as setContext, e as escape, h as createEventDispatcher, g as getContext, a as add_attribute, b as compute_slots, v as validate_component } from "../../chunks/ssr.js";
import { p as prefersReducedMotionStore } from "../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { w as writable } from "../../chunks/index.js";
import { s as slide } from "../../chunks/index2.js";
import { I as Icon } from "../../chunks/Icon.js";
const Accordion = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let $prefersReducedMotionStore, $$unsubscribe_prefersReducedMotionStore;
  $$unsubscribe_prefersReducedMotionStore = subscribe(prefersReducedMotionStore, (value) => $prefersReducedMotionStore = value);
  let { autocollapse = false } = $$props;
  let { width = "w-full" } = $$props;
  let { spacing = "space-y-1" } = $$props;
  let { disabled = false } = $$props;
  let { padding = "py-2 px-4" } = $$props;
  let { hover = "hover:bg-primary-hover-token" } = $$props;
  let { rounded = "rounded-container-token" } = $$props;
  let { caretOpen = "rotate-180" } = $$props;
  let { caretClosed = "" } = $$props;
  let { regionControl = "" } = $$props;
  let { regionPanel = "space-y-4" } = $$props;
  let { regionCaret = "" } = $$props;
  let { transitions = !$prefersReducedMotionStore } = $$props;
  let { transitionIn = slide } = $$props;
  let { transitionInParams = { duration: 200 } } = $$props;
  let { transitionOut = slide } = $$props;
  let { transitionOutParams = { duration: 200 } } = $$props;
  const active = writable(null);
  setContext("active", active);
  setContext("autocollapse", autocollapse);
  setContext("disabled", disabled);
  setContext("padding", padding);
  setContext("hover", hover);
  setContext("rounded", rounded);
  setContext("caretOpen", caretOpen);
  setContext("caretClosed", caretClosed);
  setContext("regionControl", regionControl);
  setContext("regionPanel", regionPanel);
  setContext("regionCaret", regionCaret);
  setContext("transitions", transitions);
  setContext("transitionIn", transitionIn);
  setContext("transitionInParams", transitionInParams);
  setContext("transitionOut", transitionOut);
  setContext("transitionOutParams", transitionOutParams);
  if ($$props.autocollapse === void 0 && $$bindings.autocollapse && autocollapse !== void 0)
    $$bindings.autocollapse(autocollapse);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.spacing === void 0 && $$bindings.spacing && spacing !== void 0)
    $$bindings.spacing(spacing);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.hover === void 0 && $$bindings.hover && hover !== void 0)
    $$bindings.hover(hover);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.caretOpen === void 0 && $$bindings.caretOpen && caretOpen !== void 0)
    $$bindings.caretOpen(caretOpen);
  if ($$props.caretClosed === void 0 && $$bindings.caretClosed && caretClosed !== void 0)
    $$bindings.caretClosed(caretClosed);
  if ($$props.regionControl === void 0 && $$bindings.regionControl && regionControl !== void 0)
    $$bindings.regionControl(regionControl);
  if ($$props.regionPanel === void 0 && $$bindings.regionPanel && regionPanel !== void 0)
    $$bindings.regionPanel(regionPanel);
  if ($$props.regionCaret === void 0 && $$bindings.regionCaret && regionCaret !== void 0)
    $$bindings.regionCaret(regionCaret);
  if ($$props.transitions === void 0 && $$bindings.transitions && transitions !== void 0)
    $$bindings.transitions(transitions);
  if ($$props.transitionIn === void 0 && $$bindings.transitionIn && transitionIn !== void 0)
    $$bindings.transitionIn(transitionIn);
  if ($$props.transitionInParams === void 0 && $$bindings.transitionInParams && transitionInParams !== void 0)
    $$bindings.transitionInParams(transitionInParams);
  if ($$props.transitionOut === void 0 && $$bindings.transitionOut && transitionOut !== void 0)
    $$bindings.transitionOut(transitionOut);
  if ($$props.transitionOutParams === void 0 && $$bindings.transitionOutParams && transitionOutParams !== void 0)
    $$bindings.transitionOutParams(transitionOutParams);
  classesBase = `${width} ${spacing} ${$$props.class ?? ""}`;
  $$unsubscribe_prefersReducedMotionStore();
  return ` <div class="${"accordion " + escape(classesBase, true)}" data-testid="accordion">${slots.default ? slots.default({}) : ``}</div>`;
});
const cBase = "";
const cControl = "text-start w-full flex items-center space-x-4";
const cControlIcons = "fill-current w-3 transition-transform duration-[200ms]";
const cPanel = "";
const AccordionItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let openState;
  let classesBase;
  let classesControl;
  let classesCaretState;
  let classesControlCaret;
  let classesControlIcons;
  let classesPanel;
  let $$slots = compute_slots(slots);
  let $active, $$unsubscribe_active;
  const dispatch = createEventDispatcher();
  let { open = false } = $$props;
  let { id = String(Math.random()) } = $$props;
  let { autocollapse = getContext("autocollapse") } = $$props;
  let { active = getContext("active") } = $$props;
  $$unsubscribe_active = subscribe(active, (value) => $active = value);
  let { disabled = getContext("disabled") } = $$props;
  let { padding = getContext("padding") } = $$props;
  let { hover = getContext("hover") } = $$props;
  let { rounded = getContext("rounded") } = $$props;
  let { caretOpen = getContext("caretOpen") } = $$props;
  let { caretClosed = getContext("caretClosed") } = $$props;
  let { regionControl = getContext("regionControl") } = $$props;
  let { regionPanel = getContext("regionPanel") } = $$props;
  let { regionCaret = getContext("regionCaret") } = $$props;
  let { transitions = getContext("transitions") } = $$props;
  let { transitionIn = getContext("transitionIn") } = $$props;
  let { transitionInParams = getContext("transitionInParams") } = $$props;
  let { transitionOut = getContext("transitionOut") } = $$props;
  let { transitionOutParams = getContext("transitionOutParams") } = $$props;
  const svgCaretIcon = `
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class={classesControlCaret}>
			<path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
		</svg>`;
  function setActive(event) {
    if (autocollapse === true) {
      active.set(id);
    } else {
      open = !open;
    }
    onToggle(event);
  }
  function onToggle(event) {
    const currentOpenState = autocollapse ? $active === id : open;
    dispatch("toggle", {
      event,
      id,
      panelId: `accordion-panel-${id}`,
      open: currentOpenState,
      autocollapse
    });
  }
  if (autocollapse && open)
    setActive();
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.autocollapse === void 0 && $$bindings.autocollapse && autocollapse !== void 0)
    $$bindings.autocollapse(autocollapse);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.hover === void 0 && $$bindings.hover && hover !== void 0)
    $$bindings.hover(hover);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.caretOpen === void 0 && $$bindings.caretOpen && caretOpen !== void 0)
    $$bindings.caretOpen(caretOpen);
  if ($$props.caretClosed === void 0 && $$bindings.caretClosed && caretClosed !== void 0)
    $$bindings.caretClosed(caretClosed);
  if ($$props.regionControl === void 0 && $$bindings.regionControl && regionControl !== void 0)
    $$bindings.regionControl(regionControl);
  if ($$props.regionPanel === void 0 && $$bindings.regionPanel && regionPanel !== void 0)
    $$bindings.regionPanel(regionPanel);
  if ($$props.regionCaret === void 0 && $$bindings.regionCaret && regionCaret !== void 0)
    $$bindings.regionCaret(regionCaret);
  if ($$props.transitions === void 0 && $$bindings.transitions && transitions !== void 0)
    $$bindings.transitions(transitions);
  if ($$props.transitionIn === void 0 && $$bindings.transitionIn && transitionIn !== void 0)
    $$bindings.transitionIn(transitionIn);
  if ($$props.transitionInParams === void 0 && $$bindings.transitionInParams && transitionInParams !== void 0)
    $$bindings.transitionInParams(transitionInParams);
  if ($$props.transitionOut === void 0 && $$bindings.transitionOut && transitionOut !== void 0)
    $$bindings.transitionOut(transitionOut);
  if ($$props.transitionOutParams === void 0 && $$bindings.transitionOutParams && transitionOutParams !== void 0)
    $$bindings.transitionOutParams(transitionOutParams);
  {
    if (open && autocollapse)
      setActive();
  }
  openState = autocollapse ? $active === id : open;
  classesBase = `${cBase} ${$$props.class ?? ""}`;
  classesControl = `${cControl} ${padding} ${hover} ${rounded} ${regionControl}`;
  classesCaretState = openState ? caretOpen : caretClosed;
  classesControlCaret = `${cControlIcons} ${regionCaret} ${classesCaretState}`;
  classesControlIcons = `${cControlIcons} ${regionCaret}`;
  classesPanel = `${cPanel} ${padding} ${rounded} ${regionPanel}`;
  $$unsubscribe_active();
  return ` <div class="${"accordion-item " + escape(classesBase, true)}" data-testid="accordion-item"> <button type="button" class="${"accordion-control " + escape(classesControl, true)}"${add_attribute("id", id, 0)}${add_attribute("aria-expanded", openState, 0)} aria-controls="${"accordion-panel-" + escape(id, true)}" ${disabled ? "disabled" : ""}> ${$$slots.lead ? `<div class="accordion-lead">${slots.lead ? slots.lead({}) : ``}</div>` : ``}  <div class="accordion-summary flex-1">${slots.summary ? slots.summary({}) : `(summary)`}</div>  ${$$slots.iconClosed || $$slots.iconOpen ? `  <div class="${"accordion-summary-icons " + escape(classesControlIcons, true)}">${openState ? `${slots.iconClosed ? slots.iconClosed({}) : `<!-- HTML_TAG_START -->${svgCaretIcon}<!-- HTML_TAG_END -->`}` : `${slots.iconOpen ? slots.iconOpen({}) : `<!-- HTML_TAG_START -->${svgCaretIcon}<!-- HTML_TAG_END -->`}`}</div>` : ` <div class="${"accordion-summary-caret " + escape(classesControlCaret, true)}"><!-- HTML_TAG_START -->${svgCaretIcon}<!-- HTML_TAG_END --></div>`}</button>  ${openState ? `<div class="${"accordion-panel " + escape(classesPanel, true)}" id="${"accordion-panel-" + escape(id, true)}" role="region"${add_attribute("aria-hidden", !openState, 0)}${add_attribute("aria-labelledby", id, 0)}>${slots.content ? slots.content({}) : `(content)`}</div>` : ``}</div>`;
});
const img = "/_app/immutable/assets/kidney_homepage.HNSvxBdh.jpg";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex flex-col"><div class="flex flex-col justify-around h-screen" data-svelte-h="svelte-nti5nk"><div class="flex justify-center"><h1 class="text-4xl text-primary-500 hover:animate-pulse">Kidney Disease Screening Awareness Program @ VT</h1></div> <div class="flex justify-center"><div id="left-kidney" class="flex items-center justify-center"><img${add_attribute("src", img, 0)} id="left-kidney-img" alt="Kidney" class="h-auto max-w-sm transition-all duration-300 rounded-full filter grayscale hover:grayscale-0 transform -scale-x-100"></div> <div id="right-kidney" class="flex items-center justify-center"><img${add_attribute("src", img, 0)} id="right-kidney-img" alt="Kidney" class="h-auto max-w-sm transition-all duration-300 rounded-full filter grayscale hover:grayscale-0"></div></div></div> <hr class="!border-t-4 !border-double"> <div class="flex flex-col justify-around h-screen"><div class="flex justify-center" data-svelte-h="svelte-1xmf3ky"><h1 class="text-4xl text-primary-500 hover:animate-pulse">The Important Questions</h1></div> <div class="flex justify-center">${validate_component(Accordion, "Accordion").$$render(
    $$result,
    {
      autocollapse: true,
      class: "p-5 rounded-container-token max-w-3xl space-y-4 disabled bg-tertiary-500 "
    },
    {},
    {
      default: () => {
        return `${validate_component(AccordionItem, "AccordionItem").$$render($$result, { open: true }, {}, {
          content: () => {
            return `<p class="text-white" data-svelte-h="svelte-oosyqw">The kidneys, often regarded as the <strong class="text-primary-400">unsung heroes</strong>
							of our bodies, play a crucial role in maintaining internal balance and ensuring overall
							health. Acting as the body&#39;s natural filtration system, kidneys filter around 200 quarts
							of blood daily, removing waste products and excess fluids, which are then excreted as urine.
							Besides waste elimination,
							<strong class="text-primary-400">kidneys help regulate blood pressure, electrolyte balance, and red blood cell
								production.</strong> Interestingly, the kidneys are incredibly efficient, with the ability to filter an entire
							person&#39;s blood supply roughly 60 times a day.</p> <p class="text-white" data-svelte-h="svelte-1t0fals">For a fun medical fact, the kidneys are not just diligent workers; they&#39;re also quite
							artistic! The intricate network of blood vessels in the kidneys, if stretched out,
							would cover about <strong class="text-primary-400">160,000 kilometers.</strong> That&#39;s
							enough to wrap around the Earth four times! So, next time you marvel at the beauty of the
							world, remember your kidneys are creating their masterpiece inside you!</p>`;
          },
          summary: () => {
            return `<p class="text-white text-2xl" data-svelte-h="svelte-1wi55k8">So... what do our kidneys really do?</p>`;
          },
          lead: () => {
            return `${validate_component(Icon, "Icon").$$render(
              $$result,
              {
                icon: "healthicons:kidneys",
                color: "white",
                width: "2em",
                height: "2em"
              },
              {},
              {}
            )}`;
          }
        })} ${validate_component(AccordionItem, "AccordionItem").$$render($$result, {}, {}, {
          content: () => {
            return `<p class="text-white" data-svelte-h="svelte-14j1q7w">Kidney disease is a progessive condition where the kidneys <strong class="text-primary-400">gradually</strong>
							lose their ability to function properly, impacting their vital roles in waste elimination,
							fluid balance, and blood pressure regulation. It can manifest due to various factors, such
							as hypertension, diabetes, or genetic predisposition. In the early stages, the kidneys
							may be able to compensate for the damage, but as the disease progresses, the kidneys&#39; ability
							to function properly declines. In the advanced stages, the kidneys may fail completely,
							<strong class="text-primary-400">requiring dialysis or a kidney transplant.</strong></p> <p class="text-white" data-svelte-h="svelte-4erkrx">The subtle signs of kidney disease such as fatigue, swollen ankles, and changes in
							urine color are easy to overlook. <strong class="text-primary-400">Prevention is key!</strong> Maintaining a healthy lifestyle, regular check-ups, and staying hydrated are great ways
							to protect your kidneys. So, the next time you toast to good health, give a nod to your
							kidneys—the silent guardians of your internal equilibrium</p>`;
          },
          summary: () => {
            return `<p class="text-white text-2xl" data-svelte-h="svelte-1x6bl2f">What is kidney disease and how does it happen?</p>`;
          },
          lead: () => {
            return `${validate_component(Icon, "Icon").$$render(
              $$result,
              {
                icon: "mdi:bacteria-outline",
                color: "white",
                width: "2em",
                height: "2em"
              },
              {},
              {}
            )}`;
          }
        })} ${validate_component(AccordionItem, "AccordionItem").$$render($$result, {}, {}, {
          content: () => {
            return `<p class="text-white" data-svelte-h="svelte-1xzpauq">KDSAP collaborates with physician volunteers and community members to offer
							<strong class="text-primary-400">complimentary kidney screenings and health education</strong> to the New River Valley. Our monthly kidney health screenings take place at various locations,
							including churches, community centers, elder homes, nursing homes, and homeless shelters.
							The aim is to extend essential health services to those who may face barriers to access,
							promoting well-being and awareness within our community.</p> <p class="text-white" data-svelte-h="svelte-4d0tjb">Overall, we want to help the NRV community keep their kidneys <strong class="text-primary-400">healthy and happy!</strong></p> <p></p>`;
          },
          summary: () => {
            return `<p class="text-white text-2xl" data-svelte-h="svelte-214ksb">What is KDSAP&#39;s goal?</p>`;
          },
          lead: () => {
            return `${validate_component(Icon, "Icon").$$render(
              $$result,
              {
                icon: "octicon:goal-16",
                color: "white",
                width: "2em",
                height: "2em"
              },
              {},
              {}
            )}`;
          }
        })} ${validate_component(AccordionItem, "AccordionItem").$$render($$result, {}, {}, {
          content: () => {
            return `<p class="text-white" data-svelte-h="svelte-33jww">Getting a free kidney screening with VT KDSAP is a <strong class="text-primary-400">simple and accessible</strong> process. To prioritize your kidney health, individuals can reach out to our dedicated
							team through our official website or contact our outreach coordinators directly. Our team
							will guide you through the registration process, which involves providing basic information
							and selecting a convenient screening location from our scheduled monthly events.</p> <p class="text-white" data-svelte-h="svelte-p2yu0u">Our commitment to providing these essential services is rooted in the belief that <strong class="text-primary-400">everyone deserves access to preventive healthcare,</strong>
							and we strive to break down barriers to kidney health awareness within the Virginia
							Tech community. Take the first step towards proactive well-being by connecting with VT
							KDSAP for your <strong class="text-primary-400">free kidney screening</strong>. Your
							health matters, and we are here to support you on your journey to a healthier
							tomorrow.</p> <p></p>`;
          },
          summary: () => {
            return `<p class="text-white text-2xl" data-svelte-h="svelte-74jva1">How can I get a screening for myself?</p>`;
          },
          lead: () => {
            return `${validate_component(Icon, "Icon").$$render(
              $$result,
              {
                icon: "medical-icon:i-radiology",
                color: "white",
                width: "2em",
                height: "2em"
              },
              {},
              {}
            )}`;
          }
        })}`;
      }
    }
  )}</div></div> </div>`;
});
export {
  Page as default
};
