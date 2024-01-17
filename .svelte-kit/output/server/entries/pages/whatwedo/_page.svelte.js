import { c as create_ssr_component, f as subscribe, h as createEventDispatcher, s as setContext, e as escape, l as each, p as set_store_value, g as getContext, o as onDestroy, a as add_attribute, b as compute_slots, v as validate_component } from "../../../chunks/ssr.js";
import { p as prefersReducedMotionStore } from "../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { w as writable } from "../../../chunks/index.js";
import { f as fade } from "../../../chunks/index2.js";
import "../../../chunks/functions.js";
const cBase$1 = "space-y-4";
const cHeader$1 = "flex items-center border-t mt-[15px]";
const cHeaderStep = "-mt-[15px] transition-all duration-300";
const cContent$1 = "";
const Stepper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isActive;
  let classesBase;
  let classesHeader;
  let classesHeaderStep;
  let classesBadge;
  let classesContent;
  let $state, $$unsubscribe_state;
  let $prefersReducedMotionStore, $$unsubscribe_prefersReducedMotionStore;
  $$unsubscribe_prefersReducedMotionStore = subscribe(prefersReducedMotionStore, (value) => $prefersReducedMotionStore = value);
  const dispatch = createEventDispatcher();
  let { gap = "gap-4" } = $$props;
  let { stepTerm = "Step" } = $$props;
  let { badge = "variant-filled-surface" } = $$props;
  let { active = "variant-filled" } = $$props;
  let { border = "border-surface-400-500-token" } = $$props;
  let { start = 0 } = $$props;
  let { justify = "justify-between" } = $$props;
  let { buttonBack = "variant-ghost" } = $$props;
  let { buttonBackType = "button" } = $$props;
  let { buttonBackLabel = "&larr; Back" } = $$props;
  let { buttonNext = "variant-filled" } = $$props;
  let { buttonNextType = "button" } = $$props;
  let { buttonNextLabel = "Next &rarr;" } = $$props;
  let { buttonComplete = "variant-filled-primary" } = $$props;
  let { buttonCompleteType = "button" } = $$props;
  let { buttonCompleteLabel = "Complete" } = $$props;
  let { regionHeader = "" } = $$props;
  let { regionContent = "" } = $$props;
  let { transitions = !$prefersReducedMotionStore } = $$props;
  let { transitionIn = fade } = $$props;
  let { transitionInParams = { duration: 100 } } = $$props;
  let { transitionOut = fade } = $$props;
  let { transitionOutParams = { duration: 100 } } = $$props;
  let state = writable({ current: start, total: 0 });
  $$unsubscribe_state = subscribe(state, (value) => $state = value);
  async function onNext(locked, stepIndex) {
    await new Promise((resolve) => setTimeout(resolve));
    if (locked)
      return;
    set_store_value(state, $state.current++, $state);
    dispatch("next", { step: stepIndex, state: $state });
    dispatch("step", { step: stepIndex, state: $state });
  }
  function onBack(stepIndex) {
    set_store_value(state, $state.current--, $state);
    dispatch("back", { step: stepIndex, state: $state });
    dispatch("step", { step: stepIndex, state: $state });
  }
  function onComplete(stepIndex) {
    dispatch("complete", { step: stepIndex, state: $state });
  }
  setContext("state", state);
  setContext("stepTerm", stepTerm);
  setContext("gap", gap);
  setContext("justify", justify);
  setContext("onNext", onNext);
  setContext("onBack", onBack);
  setContext("onComplete", onComplete);
  setContext("buttonBack", buttonBack);
  setContext("buttonBackType", buttonBackType);
  setContext("buttonBackLabel", buttonBackLabel);
  setContext("buttonNext", buttonNext);
  setContext("buttonNextType", buttonNextType);
  setContext("buttonNextLabel", buttonNextLabel);
  setContext("buttonComplete", buttonComplete);
  setContext("buttonCompleteType", buttonCompleteType);
  setContext("buttonCompleteLabel", buttonCompleteLabel);
  setContext("transitions", transitions);
  setContext("transitionIn", transitionIn);
  setContext("transitionInParams", transitionInParams);
  setContext("transitionOut", transitionOut);
  setContext("transitionOutParams", transitionOutParams);
  if ($$props.gap === void 0 && $$bindings.gap && gap !== void 0)
    $$bindings.gap(gap);
  if ($$props.stepTerm === void 0 && $$bindings.stepTerm && stepTerm !== void 0)
    $$bindings.stepTerm(stepTerm);
  if ($$props.badge === void 0 && $$bindings.badge && badge !== void 0)
    $$bindings.badge(badge);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  if ($$props.start === void 0 && $$bindings.start && start !== void 0)
    $$bindings.start(start);
  if ($$props.justify === void 0 && $$bindings.justify && justify !== void 0)
    $$bindings.justify(justify);
  if ($$props.buttonBack === void 0 && $$bindings.buttonBack && buttonBack !== void 0)
    $$bindings.buttonBack(buttonBack);
  if ($$props.buttonBackType === void 0 && $$bindings.buttonBackType && buttonBackType !== void 0)
    $$bindings.buttonBackType(buttonBackType);
  if ($$props.buttonBackLabel === void 0 && $$bindings.buttonBackLabel && buttonBackLabel !== void 0)
    $$bindings.buttonBackLabel(buttonBackLabel);
  if ($$props.buttonNext === void 0 && $$bindings.buttonNext && buttonNext !== void 0)
    $$bindings.buttonNext(buttonNext);
  if ($$props.buttonNextType === void 0 && $$bindings.buttonNextType && buttonNextType !== void 0)
    $$bindings.buttonNextType(buttonNextType);
  if ($$props.buttonNextLabel === void 0 && $$bindings.buttonNextLabel && buttonNextLabel !== void 0)
    $$bindings.buttonNextLabel(buttonNextLabel);
  if ($$props.buttonComplete === void 0 && $$bindings.buttonComplete && buttonComplete !== void 0)
    $$bindings.buttonComplete(buttonComplete);
  if ($$props.buttonCompleteType === void 0 && $$bindings.buttonCompleteType && buttonCompleteType !== void 0)
    $$bindings.buttonCompleteType(buttonCompleteType);
  if ($$props.buttonCompleteLabel === void 0 && $$bindings.buttonCompleteLabel && buttonCompleteLabel !== void 0)
    $$bindings.buttonCompleteLabel(buttonCompleteLabel);
  if ($$props.regionHeader === void 0 && $$bindings.regionHeader && regionHeader !== void 0)
    $$bindings.regionHeader(regionHeader);
  if ($$props.regionContent === void 0 && $$bindings.regionContent && regionContent !== void 0)
    $$bindings.regionContent(regionContent);
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
  isActive = (step) => step === $state.current;
  classesBase = `${cBase$1} ${$$props.class ?? ""}`;
  classesHeader = `${cHeader$1} ${border} ${gap} ${regionHeader}`;
  classesHeaderStep = `${cHeaderStep}`;
  classesBadge = (step) => isActive(step) ? active : badge;
  classesContent = `${cContent$1} ${regionContent}`;
  $$unsubscribe_state();
  $$unsubscribe_prefersReducedMotionStore();
  return `<div class="${"stepper " + escape(classesBase, true)}" data-testid="stepper"> ${$state.total ? `<header class="${"stepper-header " + escape(classesHeader, true)}">${each(Array.from(Array($state.total).keys()), (step) => {
    return `<div class="${[
      "stepper-header-step " + escape(classesHeaderStep, true),
      isActive(step) ? "flex-1" : ""
    ].join(" ").trim()}"><span class="${"badge " + escape(classesBadge(step), true)}">${escape(isActive(step) ? `${stepTerm} ${step + 1}` : step + 1)}</span> </div>`;
  })}</header>` : ``}  <div class="${"stepper-content " + escape(classesContent, true)}">${slots.default ? slots.default({}) : ``}</div></div>`;
});
const cBase = "space-y-4";
const cHeader = "text-2xl font-bold";
const cContent = "space-y-4";
const cNavigation = "flex";
const Step = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let classesHeader;
  let classesContent;
  let classesNavigation;
  let $$slots = compute_slots(slots);
  let $state, $$unsubscribe_state;
  let { locked = false } = $$props;
  let { regionHeader = "" } = $$props;
  let { regionContent = "" } = $$props;
  let { regionNavigation = "" } = $$props;
  let { state = getContext("state") } = $$props;
  $$unsubscribe_state = subscribe(state, (value) => $state = value);
  let { stepTerm = getContext("stepTerm") } = $$props;
  let { gap = getContext("gap") } = $$props;
  let { justify = getContext("justify") } = $$props;
  let { onNext = getContext("onNext") } = $$props;
  let { onBack = getContext("onBack") } = $$props;
  let { onComplete = getContext("onComplete") } = $$props;
  let { buttonBack = getContext("buttonBack") } = $$props;
  let { buttonBackType = getContext("buttonBackType") } = $$props;
  let { buttonBackLabel = getContext("buttonBackLabel") } = $$props;
  let { buttonNext = getContext("buttonNext") } = $$props;
  let { buttonNextType = getContext("buttonNextType") } = $$props;
  let { buttonNextLabel = getContext("buttonNextLabel") } = $$props;
  let { buttonComplete = getContext("buttonComplete") } = $$props;
  let { buttonCompleteType = getContext("buttonCompleteType") } = $$props;
  let { buttonCompleteLabel = getContext("buttonCompleteLabel") } = $$props;
  let { transitions = getContext("transitions") } = $$props;
  let { transitionIn = getContext("transitionIn") } = $$props;
  let { transitionInParams = getContext("transitionInParams") } = $$props;
  let { transitionOut = getContext("transitionOut") } = $$props;
  let { transitionOutParams = getContext("transitionOutParams") } = $$props;
  const stepIndex = $state.total;
  set_store_value(state, $state.total++, $state);
  onDestroy(() => {
    set_store_value(state, $state.total--, $state);
  });
  if ($$props.locked === void 0 && $$bindings.locked && locked !== void 0)
    $$bindings.locked(locked);
  if ($$props.regionHeader === void 0 && $$bindings.regionHeader && regionHeader !== void 0)
    $$bindings.regionHeader(regionHeader);
  if ($$props.regionContent === void 0 && $$bindings.regionContent && regionContent !== void 0)
    $$bindings.regionContent(regionContent);
  if ($$props.regionNavigation === void 0 && $$bindings.regionNavigation && regionNavigation !== void 0)
    $$bindings.regionNavigation(regionNavigation);
  if ($$props.state === void 0 && $$bindings.state && state !== void 0)
    $$bindings.state(state);
  if ($$props.stepTerm === void 0 && $$bindings.stepTerm && stepTerm !== void 0)
    $$bindings.stepTerm(stepTerm);
  if ($$props.gap === void 0 && $$bindings.gap && gap !== void 0)
    $$bindings.gap(gap);
  if ($$props.justify === void 0 && $$bindings.justify && justify !== void 0)
    $$bindings.justify(justify);
  if ($$props.onNext === void 0 && $$bindings.onNext && onNext !== void 0)
    $$bindings.onNext(onNext);
  if ($$props.onBack === void 0 && $$bindings.onBack && onBack !== void 0)
    $$bindings.onBack(onBack);
  if ($$props.onComplete === void 0 && $$bindings.onComplete && onComplete !== void 0)
    $$bindings.onComplete(onComplete);
  if ($$props.buttonBack === void 0 && $$bindings.buttonBack && buttonBack !== void 0)
    $$bindings.buttonBack(buttonBack);
  if ($$props.buttonBackType === void 0 && $$bindings.buttonBackType && buttonBackType !== void 0)
    $$bindings.buttonBackType(buttonBackType);
  if ($$props.buttonBackLabel === void 0 && $$bindings.buttonBackLabel && buttonBackLabel !== void 0)
    $$bindings.buttonBackLabel(buttonBackLabel);
  if ($$props.buttonNext === void 0 && $$bindings.buttonNext && buttonNext !== void 0)
    $$bindings.buttonNext(buttonNext);
  if ($$props.buttonNextType === void 0 && $$bindings.buttonNextType && buttonNextType !== void 0)
    $$bindings.buttonNextType(buttonNextType);
  if ($$props.buttonNextLabel === void 0 && $$bindings.buttonNextLabel && buttonNextLabel !== void 0)
    $$bindings.buttonNextLabel(buttonNextLabel);
  if ($$props.buttonComplete === void 0 && $$bindings.buttonComplete && buttonComplete !== void 0)
    $$bindings.buttonComplete(buttonComplete);
  if ($$props.buttonCompleteType === void 0 && $$bindings.buttonCompleteType && buttonCompleteType !== void 0)
    $$bindings.buttonCompleteType(buttonCompleteType);
  if ($$props.buttonCompleteLabel === void 0 && $$bindings.buttonCompleteLabel && buttonCompleteLabel !== void 0)
    $$bindings.buttonCompleteLabel(buttonCompleteLabel);
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
  classesBase = `${cBase} ${$$props.class ?? ""}`;
  classesHeader = `${cHeader} ${regionHeader}`;
  classesContent = `${cContent} ${regionContent}`;
  classesNavigation = `${cNavigation} ${justify} ${gap} ${regionNavigation}`;
  $$unsubscribe_state();
  return `  ${stepIndex === $state.current ? `<div class="${"step " + escape(classesBase, true)}" data-testid="step"> <header class="${"step-header " + escape(classesHeader, true)}">${slots.header ? slots.header({}) : `${escape(stepTerm)} ${escape(stepIndex + 1)}`}</header>  <div class="${"step-content " + escape(classesContent, true)}">${slots.default ? slots.default({}) : `(${escape(stepTerm)} ${escape(stepIndex + 1)} Content)`}</div>  ${$state.total > 1 ? `<div class="${"step-navigation " + escape(classesNavigation, true)}">${stepIndex === 0 && $$slots.navigation ? ` <div class="step-navigation-slot">${slots.navigation ? slots.navigation({}) : ``}</div>` : ` <button${add_attribute("type", buttonBackType, 0)} class="${"btn " + escape(buttonBack, true)}" ${$state.current === 0 ? "disabled" : ""}><!-- HTML_TAG_START -->${buttonBackLabel}<!-- HTML_TAG_END --></button>`} ${stepIndex < $state.total - 1 ? ` <button${add_attribute("type", buttonNextType, 0)} class="${"btn " + escape(buttonNext, true)}" ${locked ? "disabled" : ""}>${locked ? `<svg class="w-3 aspect-square fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"></path></svg>` : ``} <span><!-- HTML_TAG_START -->${buttonNextLabel}<!-- HTML_TAG_END --></span></button>` : ` <button${add_attribute("type", buttonCompleteType, 0)} class="${"btn " + escape(buttonComplete, true)}" ${locked ? "disabled" : ""}><!-- HTML_TAG_START -->${buttonCompleteLabel}<!-- HTML_TAG_END --></button>`}</div>` : ``}</div>` : ``}`;
});
const gbmImg1 = "/_app/immutable/assets/GBM1.MnNoJhOq.jpg";
const gbmImg2 = "/_app/immutable/assets/GBM2.nRN6G4US.jpg";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex flex-col"><div class="flex flex-col justify-normal" data-svelte-h="svelte-8plpoj"><div class="grid place-items-center grid-cols-3 gap-8 p-8"> <img${add_attribute("src", gbmImg1, 0)} alt="outreach first" class="w-auto h-auto rounded-lg object-cover mb-4">  <div class="card variant-filled p-4 rounded-md shadow-md col-span-2"><h2 class="text-xl font-bold text-primary-500 mb-2">Community Outreach</h2> <p class="text-variant-500">  Our community outreach model is intricately designed to revolve around
					comprehensive health screenings and targeted health education initiatives. When it comes
					to health screenings, our primary focus is on the early detection of <strong class="text-primary-500">Chronic Kidney Disease (CKD)</strong> risk factors. We go the extra mile by extending our services to medically-underserved communities,
					providing these crucial screenings free of charge. Through these initiatives, our overarching
					goal is to proactively identify potential health issues at their onset, paving the way for
					more effective and timely interventions that contribute to improved health outcomes.</p> <p class="text-variant-500">  Concurrently, our robust health education efforts are dedicated to elevating
					awareness about CKD. This multifaceted approach includes delivering <strong class="text-primary-500">one-on-one</strong>
					CKD education sessions during health screenings and orchestrating enlightening seminars at
					diverse locations such as senior homes, community centers, and churches. What sets our program
					apart is our commitment to linguistic inclusivity, as we diligently provide health education
					content in various languages. This ensures accessibility, enabling us to reach a broader audience
					and empowering individuals with the knowledge needed to make informed decisions about their
					well-being. Our unwavering commitment lies in fostering a
					<strong class="text-primary-500">healthier community through the synergy of preventive screenings</strong> and enlightening educational programs.</p></div>  <div class="card variant-filled p-4 rounded-md shadow-md col-span-2"><h2 class="text-xl font-bold text-primary-500 mb-2">Student Career Development</h2> <p class="text-variant-500">  Our <strong class="text-primary-500">Student Career Development program</strong> is
					a multifaceted initiative designed to empower students through comprehensive training
					workshops, engaging speaker series, mentor-mentee relationships, and leadership
					opportunities. In our Student Volunteer Training Workshops, participants receive training
					in professionalism, universal precautions, and the art of taking a medical history.
					Specialized sessions include a blood pressure certification workshop and hands-on training
					in operating
					<strong class="text-primary-500">glucometers and conducting dipstick urinalysis </strong>.
					These workshops serve as a foundation for students to develop essential skills in the
					medical field.</p> <p class="text-variant-500">  Our Speaker Series adds an enriching dimension to the program, featuring &quot;Meet the
					Professor&quot; and &quot;Meet the Physician&quot; colloquia. These events provide invaluable insights
					into the healthcare profession, offering students the chance to connect with experienced
					professionals. <strong class="text-primary-500">Mentor-Mentee Relationships form a cornerstone of our program,
					</strong>fostering collaboration among physicians, medical students, college students, and
					high school students. This inclusive approach aims to create a supportive network for
					personal and professional growth.</p> <p class="text-variant-500"> The Student Leadership component offers diverse opportunities for students to take
					on pivotal roles such as board members, health screening managers, and health screening
					station leaders. Beyond leadership roles, students can explore additional opportunities,
					including presenting at conferences, engaging in summer research, and shadowing
					nephrologists. These experiences not only contribute to personal and professional
					development but also allow participants to gain <strong class="text-primary-500">valuable clinical hours.</strong> In essence, our Student Career Development program provides a holistic and enriching platform
					for students to thrive in the medical field.</p></div>  <img${add_attribute("src", gbmImg2, 0)} alt="outreach second" class="w-auto h-auto rounded-lg object-cover mb-4"></div></div> <hr class="!border-t-4 !border-double"> <div class="flex flex-col justify-around h-screen"><div class="flex justify-evenly" data-svelte-h="svelte-frubfp"><h1 class="text-4xl text-primary-500 hover:animate-pulse">Our Health Screening Model</h1></div> <div class="grid justify-items-center"><div class="card variant-filled p-4 rounded-lg shadow-md w-[50vw]">${validate_component(Stepper, "Stepper").$$render($$result, { buttonComplete: "invisible" }, {}, {
    default: () => {
      return `${validate_component(Step, "Step").$$render($$result, {}, {}, {
        header: () => {
          return `<p class="text-primary-500" data-svelte-h="svelte-1gepte">Register with us</p>`;
        },
        default: () => {
          return `Once on the website or after connecting with our hotline, individuals can easily navigate
						to the &quot;Get Screened&quot; section, where they will find a user-friendly registration form. This
						form collects essential information required for scheduling the screening, including basic
						demographics and any relevant medical history. Participants can choose from upcoming screening
						events, locations, and time slots that best suit their schedule. Upon completing the registration,
						individuals will receive confirmation details and instructions on the screening process.
						Virginia Tech&#39;s Kidney Disease Screening Awareness Program is committed to providing a supportive
						and informative environment during screenings.`;
        }
      })} ${validate_component(Step, "Step").$$render($$result, {}, {}, {
        header: () => {
          return `<p class="text-primary-500" data-svelte-h="svelte-1ovnut3">BMI</p>`;
        },
        default: () => {
          return `We take your BMI`;
        }
      })} ${validate_component(Step, "Step").$$render($$result, {}, {}, {
        header: () => {
          return `<p class="text-primary-500" data-svelte-h="svelte-v6u8cp">bp</p>`;
        },
        default: () => {
          return `We take your blood pressure`;
        }
      })} ${validate_component(Step, "Step").$$render($$result, {}, {}, {
        header: () => {
          return `<p class="text-primary-500" data-svelte-h="svelte-pstgi">Urinalysis</p>`;
        },
        default: () => {
          return `We analyze your pee`;
        }
      })} ${validate_component(Step, "Step").$$render($$result, {}, {}, {
        header: () => {
          return `<p class="text-primary-500" data-svelte-h="svelte-4q8mx1">Results</p>`;
        },
        default: () => {
          return `Sit back and relax as u get your piss back`;
        }
      })}`;
    }
  })}</div></div></div> </div>`;
});
export {
  Page as default
};
