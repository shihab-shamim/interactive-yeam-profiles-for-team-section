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

export const OneCard = ({ attributes, Richtext, setAttributes }) => {
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
								{options.showName && profile.name && !Richtext && <h2 className='itp_card_name' dangerouslySetInnerHTML={{ __html: profile.name }} />}

								{options.showName && Richtext && <Richtext tagName="h2" value={profile.name} onChange={(value) => setAttributes({ ...attributes, profiles: attributes.profiles.map((p, i) => i === index ? { ...p, name: value } : p) })} className='itp_card_name' placeholder="Enter name" />}

								{options.showDesignation && profile.designation && !Richtext && <h3 className='itp_card_designation' dangerouslySetInnerHTML={{ __html: profile.designation }} />}

								{options.showDesignation && Richtext && <Richtext tagName="h3" value={profile.designation} onChange={(value) => setAttributes({ ...attributes, profiles: attributes.profiles.map((p, i) => i === index ? { ...p, designation: value } : p) })} className='itp_card_designation' placeholder="Enter designation" />}

								{options.showBio && profile.bio && !Richtext && <p className='itp_card_bio' dangerouslySetInnerHTML={{ __html: profile.bio }} />}

								{options.showBio && Richtext && <Richtext tagName="p" value={profile.bio} onChange={(value) => setAttributes({ ...attributes, profiles: attributes.profiles.map((p, i) => i === index ? { ...p, bio: value } : p) })} className='itp_card_bio' placeholder="Enter bio" />}

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
