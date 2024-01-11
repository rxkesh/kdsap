<script>
	import gbmImg1 from '$lib/images/kdsap_related/GBM1.jpg';
	import gbmImg2 from '$lib/images/kdsap_related/GBM2.jpg';
	import { Step, Stepper } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';
	import Icon from '@iconify/svelte';
</script>

<div class="flex flex-col">
	<div class="flex flex-col justify-normal">
		<div class="grid place-items-center grid-cols-3 gap-8 p-8">
			<!-- First Block with Image -->

			<img src={gbmImg1} alt="outreach first" class="w-auto h-auto rounded-lg object-cover mb-4" />

			<!-- Second Block with Header and Paragraph -->
			<div class="card variant-filled p-4 rounded-md shadow-md col-span-2">
				<h2 class="text-xl font-bold text-primary-500 mb-2">Community Outreach</h2>
				<p class="text-variant-500">
					&emsp; Our community outreach model is intricately designed to revolve around
					comprehensive health screenings and targeted health education initiatives. When it comes
					to health screenings, our primary focus is on the early detection of <strong
						class="text-primary-500">Chronic Kidney Disease (CKD)</strong
					> risk factors. We go the extra mile by extending our services to medically-underserved communities,
					providing these crucial screenings free of charge. Through these initiatives, our overarching
					goal is to proactively identify potential health issues at their onset, paving the way for
					more effective and timely interventions that contribute to improved health outcomes.
				</p>
				<p class="text-variant-500">
					&emsp; Concurrently, our robust health education efforts are dedicated to elevating
					awareness about CKD. This multifaceted approach includes delivering <strong
						class="text-primary-500">one-on-one</strong
					>
					CKD education sessions during health screenings and orchestrating enlightening seminars at
					diverse locations such as senior homes, community centers, and churches. What sets our program
					apart is our commitment to linguistic inclusivity, as we diligently provide health education
					content in various languages. This ensures accessibility, enabling us to reach a broader audience
					and empowering individuals with the knowledge needed to make informed decisions about their
					well-being. Our unwavering commitment lies in fostering a
					<strong class="text-primary-500">
						healthier community through the synergy of preventive screenings</strong
					> and enlightening educational programs.
				</p>
			</div>

			<!-- Third Block with Header and Paragraph -->
			<div class="card variant-filled p-4 rounded-md shadow-md col-span-2">
				<h2 class="text-xl font-bold text-primary-500 mb-2">Student Career Development</h2>
				<p class="text-variant-500">
					&emsp; Our <strong class="text-primary-500">Student Career Development program</strong> is
					a multifaceted initiative designed to empower students through comprehensive training
					workshops, engaging speaker series, mentor-mentee relationships, and leadership
					opportunities. In our Student Volunteer Training Workshops, participants receive training
					in professionalism, universal precautions, and the art of taking a medical history.
					Specialized sessions include a blood pressure certification workshop and hands-on training
					in operating
					<strong class="text-primary-500">glucometers and conducting dipstick urinalysis </strong>.
					These workshops serve as a foundation for students to develop essential skills in the
					medical field.
				</p>
				<p class="text-variant-500">
					&emsp; Our Speaker Series adds an enriching dimension to the program, featuring "Meet the
					Professor" and "Meet the Physician" colloquia. These events provide invaluable insights
					into the healthcare profession, offering students the chance to connect with experienced
					professionals. <strong class="text-primary-500"
						>Mentor-Mentee Relationships form a cornerstone of our program,
					</strong>fostering collaboration among physicians, medical students, college students, and
					high school students. This inclusive approach aims to create a supportive network for
					personal and professional growth.
				</p>
				<p class="text-variant-500">
					&emsp;The Student Leadership component offers diverse opportunities for students to take
					on pivotal roles such as board members, health screening managers, and health screening
					station leaders. Beyond leadership roles, students can explore additional opportunities,
					including presenting at conferences, engaging in summer research, and shadowing
					nephrologists. These experiences not only contribute to personal and professional
					development but also allow participants to gain <strong class="text-primary-500"
						>valuable clinical hours.</strong
					> In essence, our Student Career Development program provides a holistic and enriching platform
					for students to thrive in the medical field.
				</p>
			</div>
			<!-- Fourth Block with Image -->
			<img src={gbmImg2} alt="outreach second" class="w-auto h-auto rounded-lg object-cover mb-4" />
		</div>
	</div>
	<hr class="!border-t-4 !border-double" />
	<div class="flex flex-col justify-around h-screen">
		<div class="flex justify-evenly">
			<h1 class="text-4xl text-primary-500 hover:animate-pulse">Our Health Screening Model</h1>
		</div>
		<div class="grid justify-items-center">
			<div class="card variant-filled p-4 rounded-lg shadow-md w-[50vw]">
				<Stepper buttonComplete="invisible">
					<Step>
						<svelte:fragment slot="header"><p class="text-primary-500">Register with us</p></svelte:fragment>
						Once on the website or after connecting with our hotline, individuals can easily navigate
						to the "Get Screened" section, where they will find a user-friendly registration form. This
						form collects essential information required for scheduling the screening, including basic
						demographics and any relevant medical history. Participants can choose from upcoming screening
						events, locations, and time slots that best suit their schedule. Upon completing the registration,
						individuals will receive confirmation details and instructions on the screening process.
						Virginia Tech's Kidney Disease Screening Awareness Program is committed to providing a supportive
						and informative environment during screenings.
					</Step>
					<Step>
						<svelte:fragment slot="header"><p class="text-primary-500">BMI</p></svelte:fragment>
						We take your BMI
					</Step>
					<Step>
                        <svelte:fragment slot="header"><p class="text-primary-500">bp</p></svelte:fragment>
                        We take your blood pressure
                    </Step>
                    <Step>
                        <svelte:fragment slot="header"><p class="text-primary-500">Urinalysis</p></svelte:fragment>
                        We analyze your pee
                    </Step>
                    <Step>
                        <svelte:fragment slot="header"><p class="text-primary-500">Results</p></svelte:fragment>
                        Sit back and relax as u get your piss back
                    </Step>
				</Stepper>
			</div>
		</div>
	</div>
</div>

<style>
</style>
