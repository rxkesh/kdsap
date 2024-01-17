<script lang="ts">
	import '../../app.postcss';
	import soham_headshot from '$lib/images/headshots/soham_headshot.jpg';
	import sachin_headshot from '$lib/images/headshots/sachin_headshot.jpg';
	import aryan_headshot from '$lib/images/headshots/aryan_headshot.jpg';
	import rakesh_headshot from '$lib/images/headshots/rakesh_headshot.jpg';
    import recupero_headshot from '$lib/images/headshots/doc_recupero.jpg';
    import simonds_headshot from '$lib/images/headshots/doc_simonds.jpg';
    import ghosheh_headshot from '$lib/images/headshots/doc_ghosheh.jpg';

	import { popup, PopupSettings } from '@skeletonlabs/skeleton';
	import Icon from '@iconify/svelte';

	let elemCarousel: HTMLDivElement;

	// List holding executive members of the board
	// EDITABLE: Add or remove members as needed, don't change keys
	const headshots = [
		{
			key: 'president',
			name: 'Soham Desai',
			title: 'President',
			class: '2025',
			major: 'Nanomedicine',
			img: soham_headshot
		},
		{
			key: 'vicepresident',
			name: 'Sachin Gandhi',
			title: 'Vice President',
			class: '2025',
			major: 'Clinical Neuroscience',
			img: sachin_headshot
		},
		{
			key: 'treasurer',
			name: 'Aryan Bangalore',
			title: 'Treasurer',
			class: '2025',
			major: 'Clinical Neuroscience',
			img: aryan_headshot
		},
		{
			key: 'CTO',
			name: 'Rakesh Pillai',
			title: 'Chief Technology Officer',
			class: '2025',
			major: 'Computer Engineering',
			img: rakesh_headshot
		}
	];

	let isHovered = false;
	let hoveredPerson = headshots[0];
    let indexOfMainPerson = 0;
    function carouselLeft(): void {
		const x =
			elemCarousel.scrollLeft === 0
				? elemCarousel.clientWidth * elemCarousel.childElementCount // loop
				: elemCarousel.scrollLeft - elemCarousel.clientWidth; // step left
		elemCarousel.scroll(x, 0);
        if (indexOfMainPerson === 0) {
            indexOfMainPerson = headshots.length - 1;
        } else {
            indexOfMainPerson--;
        }
	}
	function carouselRight(): void {
		const x =
			elemCarousel.scrollLeft === elemCarousel.scrollWidth - elemCarousel.clientWidth
				? 0 // loop
				: elemCarousel.scrollLeft + elemCarousel.clientWidth; // step right
		elemCarousel.scroll(x, 0);

        if (indexOfMainPerson === headshots.length - 1) {
            indexOfMainPerson = 0;
        } else {
            indexOfMainPerson++;
        }
	}


	function handleHoverEnter(person: any) {
		isHovered = !isHovered;
		hoveredPerson = person;
	}
	function handleHoverLeave() {
		isHovered = !isHovered;
	}
</script>

<div class="flex flex-col items-center">
	<div class="flex flex-col justify-evenly h-screen">
		<div class="flex justify-center">
			<h1 class="text-4xl text-primary-500 hover:animate-pulse">The Team</h1>
		</div>

		<div
			class="card card-hover variant-ringed p-4 grid grid-cols-[auto_1fr_auto] gap-4 items-center max-w-2xl"
		>
			<!-- Button: Left -->
			<button type="button" class="btn-icon variant-filled" on:click={carouselLeft}>
				<i class="fa-solid fa-arrow-left" />
			</button>

			<!-- Full Images -->
			<div
				bind:this={elemCarousel}
				class="snap-x snap-mandatory scroll-smooth flex overflow-hidden space-x-4"
			>
				{#each headshots as headshot}
					<img
						class="snap-center w-[1024px] h-[512px] object-fill rounded-container-token hover:blur-lg hover:transition-all duration-700"
						src={headshot.img}
						alt="Headshot of {headshot.name}"
						loading="lazy"
						role="group"
						aria-label="Image Carousel"
						on:mouseenter={() => handleHoverEnter(headshot)}
						on:mouseleave={handleHoverLeave}
					/>

					{#if isHovered && hoveredPerson.name === headshots[indexOfMainPerson].name}
						<p
							class="text-white text-2xl text-center"
							style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);"
						>
							{hoveredPerson.name} <br />
							{hoveredPerson.major} <br />
							{hoveredPerson.class}
						</p>

						<p
							class="text-secondary-500 text-3xl text-center font-bold"
							style="position: absolute; top: 15%; left: 50%; transform: translate(-50%, -50%); "
						>
							{hoveredPerson.title}
						</p>
					{/if}
				{/each}
			</div>

			<!-- Button: Right -->
			<button type="button" class="btn-icon variant-filled" on:click={carouselRight}>
				<i class="fa-solid fa-arrow-right" />
			</button>
		</div>
	</div>
    <hr class="!border-t-4 !border-double" />
	<div class="flex flex-col justify-evenly h-screen">
		<div class="flex justify-center">
			<h1 class="text-4xl text-primary-500 hover:animate-pulse">The Advisory Board</h1>
		</div>

		<section class="grid md:grid-cols-3 gap-4 max-w-4xl">
			<div class="flex flex-col items-center space-y-5">
				<img
					class="h-auto max-w-full rounded-full"
					src={ghosheh_headshot}
					alt="doctor 1 on advisory board"
				/>
                <h1 class="text-primary-500">Feras J Ghosheh, MD</h1>
			</div>
			<div class="flex flex-col items-center space-y-5">
                <img
					class="h-auto max-w-full rounded-full object-cover "
                    src={simonds_headshot}
                    alt="doc 3"
				/>
				<h1 class="text-primary-500">Gary R Simonds, MD</h1>
			</div>
			<div class="flex flex-col items-center space-y-5">
                <img
                    class="h-auto max-w-full rounded-full"
                    src={recupero_headshot}
                    alt="doc 2"
                />
                <h1 class="text-primary-500">Peter J Recupero, DO</h1>
			</div>
		</section>
	</div>
</div>
