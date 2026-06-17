const normalizeIconColor = (svgString) => {
	if (!svgString) return svgString;
	return svgString
		.replace(/fill\s*=\s*["'][^"']*["']/gi, 'fill="currentColor"')
		.replace(/(<svg[^>]*)(>)/i, (match, p1, p2) => {
			if (!p1.includes('fill=')) {
				return p1 + ' fill="currentColor"' + p2;
			}
			return match;
		});
};

export const OneCard = ({ attributes }) => {
	const {
		profiles = [],
		options = { showName: true, showDesignation: true, showBio: true, showSocial: true, openInNewTab: true }
	} = attributes || {};

	return (
		<section className='itp_team_section'>
			<div className='itp_team_section__container'>
				<div className='itp_team_section__cards'>
					{profiles.map((profile, index) => (
						<div className='itp_team_section__card' key={index}>
							<div className='itp_team_section__img-box'>
								{profile.image
									? <img src={profile.image} alt={profile.name || ''} />
									: <div className='itp_team_section__img-placeholder' />
								}
							</div>

							<div className='itp_team_section__content'>
								{options.showName && profile.name && (
									<h2 className='itp_card_name'>{profile.name}</h2>
								)}

								{options.showDesignation && profile.designation && (
									<h3 className='itp_card_designation'>{profile.designation}</h3>
								)}

								{options.showBio && profile.bio && (
									<p className='itp_card_bio'>{profile.bio}</p>
								)}

								{options.showSocial && profile.social?.length > 0 && (
									<ul className='itp_team_section__social-links'>
										{profile.social.map((item, sIndex) => (
											<li key={sIndex}>
												<a
													href={item.link || '#'}
													target={options.openInNewTab ? '_blank' : '_self'}
													rel={options.openInNewTab ? 'noopener noreferrer' : ''}
													aria-label={profile.name}
													dangerouslySetInnerHTML={{ __html: normalizeIconColor(item.icon) }}
												/>
											</li>
										))}
									</ul>
								)}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default OneCard;
