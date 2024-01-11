<script>
	import img from '$lib/images/kidney_homepage.jpg';
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';
	import Icon from '@iconify/svelte';
</script>

<div class="flex flex-col">
	<div class="flex flex-col justify-around h-screen">
		<div class="flex justify-center">
			<h1 class="text-4xl text-primary-500 hover:animate-pulse">
				Kidney Disease Screening Awareness Program @ VT
			</h1>
		</div>
		<div class="flex justify-center">
			<div id="left-kidney" class="flex items-center justify-center">
				<img
					src={img}
					id="left-kidney-img"
					alt="Kidney"
					class="h-auto max-w-sm transition-all duration-300 rounded-full filter grayscale hover:grayscale-0 transform -scale-x-100"
				/>
			</div>
			<div id="right-kidney" class="flex items-center justify-center">
				<img
					src={img}
					id="right-kidney-img"
					alt="Kidney"
					class="h-auto max-w-sm transition-all duration-300 rounded-full filter grayscale hover:grayscale-0"
				/>
			</div>
		</div>
	</div>
	<hr class="!border-t-4 !border-double" />
	<div class="flex flex-col justify-around h-screen">
		<div class="flex justify-center">
			<h1 class="text-4xl text-primary-500 hover:animate-pulse">The Important Questions</h1>
		</div>
		<div class="flex justify-center">
			<Accordion
				autocollapse
				class="p-5 rounded-container-token max-w-3xl space-y-4 disabled bg-tertiary-500 "
			>
				<AccordionItem open>
					<svelte:fragment slot="lead"
						><Icon
							icon="healthicons:kidneys"
							color="white"
							width="2em"
							height="2em"
						/></svelte:fragment
					>
					<svelte:fragment slot="summary"
						><p class="text-white text-2xl">
							So... what do our kidneys really do?
						</p></svelte:fragment
					>
					<svelte:fragment slot="content"
						><p class="text-white">
							The kidneys, often regarded as the <strong class="text-primary-400"
								>unsung heroes</strong
							>
							of our bodies, play a crucial role in maintaining internal balance and ensuring overall
							health. Acting as the body's natural filtration system, kidneys filter around 200 quarts
							of blood daily, removing waste products and excess fluids, which are then excreted as urine.
							Besides waste elimination,
							<strong class="text-primary-400"
								>kidneys help regulate blood pressure, electrolyte balance, and red blood cell
								production.</strong
							> Interestingly, the kidneys are incredibly efficient, with the ability to filter an entire
							person's blood supply roughly 60 times a day.
						</p>
						<p class="text-white">
							For a fun medical fact, the kidneys are not just diligent workers; they're also quite
							artistic! The intricate network of blood vessels in the kidneys, if stretched out,
							would cover about <strong class="text-primary-400">160,000 kilometers. </strong> That's
							enough to wrap around the Earth four times! So, next time you marvel at the beauty of the
							world, remember your kidneys are creating their masterpiece inside you!
						</p></svelte:fragment
					>
				</AccordionItem>
				<AccordionItem>
					<svelte:fragment slot="lead"
						><Icon
							icon="mdi:bacteria-outline"
							color="white"
							width="2em"
							height="2em"
						/></svelte:fragment
					>
					<svelte:fragment slot="summary"
						><p class="text-white text-2xl">
							What is kidney disease and how does it happen?
						</p></svelte:fragment
					>
					<svelte:fragment slot="content"
						><p class="text-white">
							Kidney disease is a progessive condition where the kidneys <strong
								class="text-primary-400">gradually</strong
							>
							lose their ability to function properly, impacting their vital roles in waste elimination,
							fluid balance, and blood pressure regulation. It can manifest due to various factors, such
							as hypertension, diabetes, or genetic predisposition. In the early stages, the kidneys
							may be able to compensate for the damage, but as the disease progresses, the kidneys' ability
							to function properly declines. In the advanced stages, the kidneys may fail completely,
							<strong class="text-primary-400">requiring dialysis or a kidney transplant.</strong>
						</p>
						<p class="text-white">
							The subtle signs of kidney disease such as fatigue, swollen ankles, and changes in
							urine color are easy to overlook. <strong class="text-primary-400"
								>Prevention is key!</strong
							> Maintaining a healthy lifestyle, regular check-ups, and staying hydrated are great ways
							to protect your kidneys. So, the next time you toast to good health, give a nod to your
							kidneys—the silent guardians of your internal equilibrium
						</p></svelte:fragment
					>
				</AccordionItem>
				<AccordionItem>
					<svelte:fragment slot="lead"
						><Icon icon="octicon:goal-16" color="white" width="2em" height="2em" /></svelte:fragment
					>
					<svelte:fragment slot="summary"
						><p class="text-white text-2xl">What is KDSAP's goal?</p></svelte:fragment
					>
					<svelte:fragment slot="content"
						><p class="text-white">
							KDSAP collaborates with physician volunteers and community members to offer
							<strong class="text-primary-400"
								>complimentary kidney screenings and health education</strong
							> to the New River Valley. Our monthly kidney health screenings take place at various locations,
							including churches, community centers, elder homes, nursing homes, and homeless shelters.
							The aim is to extend essential health services to those who may face barriers to access,
							promoting well-being and awareness within our community.
						</p>
						<p class="text-white">
							Overall, we want to help the NRV community keep their kidneys <strong
								class="text-primary-400">healthy and happy!</strong
							>
						</p>
						<p /></svelte:fragment
					>
				</AccordionItem>
				<AccordionItem>
					<svelte:fragment slot="lead"
						><Icon
							icon="medical-icon:i-radiology"
							color="white"
							width="2em"
							height="2em"
						/></svelte:fragment
					>
					<svelte:fragment slot="summary"
						><p class="text-white text-2xl">
							How can I get a screening for myself?
						</p></svelte:fragment
					>
					<svelte:fragment slot="content"
						><p class="text-white">
							Getting a free kidney screening with VT KDSAP is a <strong class="text-primary-400"
								>simple and accessible</strong
							> process. To prioritize your kidney health, individuals can reach out to our dedicated
							team through our official website or contact our outreach coordinators directly. Our team
							will guide you through the registration process, which involves providing basic information
							and selecting a convenient screening location from our scheduled monthly events.
						</p>
						<p class="text-white">
							Our commitment to providing these essential services is rooted in the belief that <strong
								class="text-primary-400">everyone deserves access to preventive healthcare,</strong
							>
							and we strive to break down barriers to kidney health awareness within the Virginia
							Tech community. Take the first step towards proactive well-being by connecting with VT
							KDSAP for your <strong class="text-primary-400">free kidney screening</strong>. Your
							health matters, and we are here to support you on your journey to a healthier
							tomorrow.
						</p>
						<p /></svelte:fragment
					>
				</AccordionItem>
			</Accordion>
		</div>
	</div>
</div>

<style>
</style>
