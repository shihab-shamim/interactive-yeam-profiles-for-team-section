// const iconColor = '#4527a4';

// Tall portrait card with a person and a solid "slide-up" content overlay
// band carrying the name line + social dots — the interactive reveal.
export const blockIcon = (
	<svg xmlns='http://www.w3.org/2000/svg' width={24} height={24} viewBox='0 0 24 24'>
		<rect x='5' y='2.5' width='14' height='19' rx='2.5'  opacity='0.12' />
		<rect x='5' y='2.5' width='14' height='19' rx='2.5' fill='none'  strokeWidth='1.5' />
		<circle cx='12' cy='8' r='2.6' opacity='0.55' />
		<path d='M7.8 14.4c0-2.4 1.9-3.8 4.2-3.8s4.2 1.4 4.2 3.8z'  opacity='0.55' />
		<path d='M5 14.4H19V19a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 5 19z'  />
		<rect x='8.5' y='15.5' width='7' height='1.3' rx='0.65' fill='#ffffff' />
		<circle cx='9.3' cy='18.9' r='0.85' fill='#ffffff' />
		<circle cx='12' cy='18.9' r='0.85' fill='#ffffff' />
		<circle cx='14.7' cy='18.9' r='0.85' fill='#ffffff' />
	</svg>
);

export const verticalLineIcon = <svg xmlns='http://www.w3.org/2000/svg' width={24} height={24} viewBox='0 0 14.707 14.707'>
	<rect x='6.275' y='0' width='2.158' height='14.707' />
</svg>;

export const horizontalLineIcon = <svg xmlns='http://www.w3.org/2000/svg' width={24} height={24} viewBox='0 0 357 357'>
	<path d='M357,204H0v-51h357V204z' />
</svg>;
