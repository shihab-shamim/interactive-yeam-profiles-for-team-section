import { mobileBreakpoint, tabBreakpoint } from '../../../../bpl-tools/utils/data';
import { getBackgroundCSS, getBoxCSS, getTypoCSS } from '../../../../bpl-tools/utils/getCSS';

const Style = ({ attributes, id }) => {
	const { styles = {} } = attributes || {};

	const mainSl        = `#${id}`;
	const sectionSl     = `${mainSl} .itp_team_section`;
	const containerSl   = `${sectionSl} .itp_team_section__container`;
	const gridSl        = `${containerSl} .itp_team_section__cards`;
	const cardSl        = `${gridSl} .itp_team_section__card`;
	const imgBoxSl      = `${cardSl} .itp_team_section__img-box`;
	const imgSl         = `${imgBoxSl} img`;
	const contentSl     = `${cardSl} .itp_team_section__content`;
	const nameSl        = `${contentSl} .itp_card_name`;
	const designationSl = `${contentSl} .itp_card_designation`;
	const bioSl         = `${contentSl} .itp_card_bio`;
	const socialListSl  = `${contentSl} .itp_team_section__social-links`;
	const socialLinkSl  = `${socialListSl} li a`;

	return <style dangerouslySetInnerHTML={{
		__html: `

		${getTypoCSS('', styles?.name?.typo)?.googleFontLink || ''}
		${getTypoCSS('', styles?.designation?.typo)?.googleFontLink || ''}
		${getTypoCSS('', styles?.bio?.typo)?.googleFontLink || ''}

		${getTypoCSS(nameSl, styles?.name?.typo)?.styles || ''}
		${getTypoCSS(designationSl, styles?.designation?.typo)?.styles || ''}
		${getTypoCSS(bioSl, styles?.bio?.typo)?.styles || ''}

		${containerSl} {
			${getBackgroundCSS(styles?.bg)}
			padding: ${getBoxCSS(styles?.padding?.desktop)};
			margin: ${getBoxCSS(styles?.margin?.desktop)};
		}

		${gridSl} {
			grid-template-columns: repeat(${styles?.columns?.desktop}, 1fr);
			column-gap: ${styles?.columnGap || 28}px;
			row-gap: ${styles?.rowGap || 28}px;
		}

		${cardSl} {
			height: ${styles?.card?.height?.desktop};
			border-radius: ${getBoxCSS(styles?.card?.radius)};
		}

		${imgSl} {
			object-fit: ${styles?.image?.imageFit || 'cover'};
		}

		${cardSl}:hover .itp_team_section__img-box {
			transform: scale(${styles?.image?.hoverScale || 1.06});
		}

		${contentSl} {
			${getBackgroundCSS(styles?.content?.bg)}
			height: ${styles?.content?.height || '65%'};
			padding: ${getBoxCSS(styles?.content?.padding)};
			text-align: ${styles?.content?.textAlign || 'center'};
		}

		${nameSl} {
			color: ${styles?.name?.color || '#ffffff'};
			margin: ${getBoxCSS(styles?.name?.margin)};
		}

		${designationSl} {
			color: ${styles?.designation?.color || '#ffeb3b'};
			margin: ${getBoxCSS(styles?.designation?.margin)};
		}

		${bioSl} {
			color: ${styles?.bio?.color || '#dddddd'};
			margin: ${getBoxCSS(styles?.bio?.margin)};
		}

		${socialListSl} {
			gap: ${styles?.social?.gap || 10}px;
			margin: ${getBoxCSS(styles?.social?.margin)};
		}

		${socialLinkSl} {
			color: ${styles?.social?.iconColor || '#ffffff'};
			background-color: ${styles?.social?.iconBg || 'rgba(255,255,255,0.15)'};
			width: ${styles?.social?.btnSize || '36px'};
			height: ${styles?.social?.btnSize || '36px'};
			border-radius: ${getBoxCSS(styles?.social?.btnRadius) || '50%'};
			svg {
				width: ${styles?.social?.iconSize || 14}px;
				height: ${styles?.social?.iconSize || 14}px;
			}
		}

		${socialLinkSl}:hover {
			background-color: ${styles?.social?.iconHoverBg || '#ffeb3b'};
			color: ${styles?.social?.iconHoverColor || '#000000'};
			svg {
				color: ${styles?.social?.iconHoverColor || '#000000'};
				fill: ${styles?.social?.iconHoverColor || '#000000'};
			}
		}

		${tabBreakpoint} {
			${containerSl} {
				padding: ${getBoxCSS(styles?.padding?.tablet)};
				margin: ${getBoxCSS(styles?.margin?.tablet)};
			}
			${gridSl} {
				grid-template-columns: repeat(${styles?.columns?.tablet}, 1fr);
			}
			${cardSl} {
				height: ${styles?.card?.height?.tablet};
			}
		}

		${mobileBreakpoint} {
			${containerSl} {
				padding: ${getBoxCSS(styles?.padding?.mobile)};
				margin: ${getBoxCSS(styles?.margin?.mobile)};
			}
			${gridSl} {
				grid-template-columns: repeat(${styles?.columns?.mobile}, 1fr);
			}
			${cardSl} {
				height: ${styles?.card?.height?.mobile};
			}
		}

	`}} />;
};

export default Style;
