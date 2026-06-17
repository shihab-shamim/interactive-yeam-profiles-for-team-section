const iconColor = '#4527a4';

export const blockIcon = <svg xmlns='http://www.w3.org/2000/svg' width={24} height={24} viewBox='0 0 24 24'>
	{/* Card background */}
	<rect fill={iconColor} opacity='0.12' x='2' y='1' width='20' height='22' rx='3' />
	{/* Card border */}
	<rect fill='none' stroke={iconColor} strokeWidth='1.5' x='2' y='1' width='20' height='22' rx='3' />
	{/* Avatar circle */}
	<circle fill={iconColor} cx='12' cy='9' r='4' />
	{/* Name bar */}
	<rect fill={iconColor} x='5' y='16' width='14' height='2' rx='1' />
	{/* Designation bar */}
	<rect fill={iconColor} x='7.5' y='19.5' width='9' height='1.5' rx='0.75' opacity='0.5' />
</svg>;

export const verticalLineIcon = <svg xmlns='http://www.w3.org/2000/svg' width={24} height={24} viewBox='0 0 14.707 14.707'>
	<rect x='6.275' y='0' width='2.158' height='14.707' />
</svg>;

export const horizontalLineIcon = <svg xmlns='http://www.w3.org/2000/svg' width={24} height={24} viewBox='0 0 357 357'>
	<path d='M357,204H0v-51h357V204z' />
</svg>;