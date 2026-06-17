import { __ } from '@wordpress/i18n';
import {
	PanelBody,
	PanelRow,
	RangeControl,
	SelectControl,
	__experimentalUnitControl as UnitControl
} from '@wordpress/components';
import { Background, BoxControl, ColorControl, Device, Label, Typography } from '../../../../../../bpl-tools/Components';
import { updateData } from '../../../../utils/functions';
import { imageFitOptions, textAlignOptions } from '../../../../utils/options';

const Style = ({ attributes, setAttributes, device }) => {
	const { styles = {} } = attributes;

	return (
		<>
			{/* ── Container ─────────────────────────────────────── */}
			<PanelBody className='bPlPanelBody' title={__('Container', 'team-section')} initialOpen={false}>
				<Background
					label={__('Background', 'team-section')}
					value={styles?.bg}
					onChange={(v) => setAttributes({ styles: updateData(styles, v, 'bg') })}
				/>

				<PanelRow>
					<Label>{__('Padding', 'team-section')}</Label>
					<Device />
				</PanelRow>
				<BoxControl
					values={styles?.padding?.[device]}
					onChange={(v) => setAttributes({ styles: updateData(styles, v, 'padding', device) })}
				/>

				<PanelRow>
					<Label>{__('Margin', 'team-section')}</Label>
					<Device />
				</PanelRow>
				<BoxControl
					values={styles?.margin?.[device]}
					onChange={(v) => setAttributes({ styles: updateData(styles, v, 'margin', device) })}
				/>
			</PanelBody>

			{/* ── Card ──────────────────────────────────────────── */}
			<PanelBody className='bPlPanelBody' title={__('Team Profile', 'team-section')} initialOpen={false}>
				<PanelRow>
					<Label>{__('Height', 'team-section')}</Label>
					<Device />
				</PanelRow>
				<UnitControl
					value={styles?.card?.height?.[device]}
					onChange={(v) => setAttributes({ styles: updateData(styles, v, 'card', 'height', device) })}
				/>

				<BoxControl
					className='mt15'
					label={__('Radius', 'team-section')}
					values={styles?.card?.radius}
					onChange={(v) => setAttributes({ styles: updateData(styles, v, 'card', 'radius') })}
				/>
			</PanelBody>

			{/* ── Image ─────────────────────────────────────────── */}
			<PanelBody className='bPlPanelBody' title={__('Image', 'team-section')} initialOpen={false}>
				<SelectControl
					label={__('Image Fit', 'team-section')}
					value={styles?.image?.imageFit}
					options={imageFitOptions}
					onChange={(v) => setAttributes({ styles: updateData(styles, v, 'image', 'imageFit') })}
				/>
				<RangeControl
					className='mt15'
					label={__('Hover Scale', 'team-section')}
					value={styles?.image?.hoverScale}
					min={1}
					max={2}
					step={0.01}
					onChange={(v) => setAttributes({ styles: updateData(styles, v, 'image', 'hoverScale') })}
				/>
			</PanelBody>

			{/* ── Content Overlay ───────────────────────────────── */}
			<PanelBody className='bPlPanelBody' title={__('Content Overlay', 'team-section')} initialOpen={false}>
				<Background
					label={__('Background', 'team-section')}
					value={styles?.content?.bg}
					onChange={(v) => setAttributes({ styles: updateData(styles, v, 'content', 'bg') })}
				/>
				<UnitControl
					className='mt15'
					label={__('Overlay Height', 'team-section')}
					value={styles?.content?.height}
					onChange={(v) => setAttributes({ styles: updateData(styles, v, 'content', 'height') })}
				/>
				<BoxControl
					className='mt15'
					label={__('Padding', 'team-section')}
					values={styles?.content?.padding}
					onChange={(v) => setAttributes({ styles: updateData(styles, v, 'content', 'padding') })}
				/>
				<SelectControl
					className='mt15'
					label={__('Text Align', 'team-section')}
					value={styles?.content?.textAlign}
					options={textAlignOptions}
					onChange={(v) => setAttributes({ styles: updateData(styles, v, 'content', 'textAlign') })}
				/>
			</PanelBody>

			{/* ── Name ──────────────────────────────────────────── */}
			<PanelBody className='bPlPanelBody' title={__('Name', 'team-section')} initialOpen={false}>
				<ColorControl
					label={__('Color', 'team-section')}
					value={styles?.name?.color}
					onChange={(v) => setAttributes({ styles: updateData(styles, v, 'name', 'color') })}
				/>
				<BoxControl
					className='mt15'
					label={__('Margin', 'team-section')}
					values={styles?.name?.margin}
					onChange={(v) => setAttributes({ styles: updateData(styles, v, 'name', 'margin') })}
				/>
				<Typography
					className='mt15'
					label={__('Typography', 'team-section')}
					value={styles?.name?.typo}
					onChange={(v) => setAttributes({ styles: updateData(styles, v, 'name', 'typo') })}
				/>
			</PanelBody>

			{/* ── Designation ───────────────────────────────────── */}
			<PanelBody className='bPlPanelBody' title={__('Designation', 'team-section')} initialOpen={false}>
				<ColorControl
					label={__('Color', 'team-section')}
					value={styles?.designation?.color}
					onChange={(v) => setAttributes({ styles: updateData(styles, v, 'designation', 'color') })}
				/>
				<BoxControl
					className='mt15'
					label={__('Margin', 'team-section')}
					values={styles?.designation?.margin}
					onChange={(v) => setAttributes({ styles: updateData(styles, v, 'designation', 'margin') })}
				/>
				<Typography
					className='mt15'
					label={__('Typography', 'team-section')}
					value={styles?.designation?.typo}
					onChange={(v) => setAttributes({ styles: updateData(styles, v, 'designation', 'typo') })}
				/>
			</PanelBody>

			{/* ── Bio ───────────────────────────────────────────── */}
			<PanelBody className='bPlPanelBody' title={__('Bio', 'team-section')} initialOpen={false}>
				<ColorControl
					label={__('Color', 'team-section')}
					value={styles?.bio?.color}
					onChange={(v) => setAttributes({ styles: updateData(styles, v, 'bio', 'color') })}
				/>
				<BoxControl
					className='mt15'
					label={__('Margin', 'team-section')}
					values={styles?.bio?.margin}
					onChange={(v) => setAttributes({ styles: updateData(styles, v, 'bio', 'margin') })}
				/>
				<Typography
					className='mt15'
					label={__('Typography', 'team-section')}
					value={styles?.bio?.typo}
					onChange={(v) => setAttributes({ styles: updateData(styles, v, 'bio', 'typo') })}
				/>
			</PanelBody>

			{/* ── Social Icons ──────────────────────────────────── */}
			<PanelBody className='bPlPanelBody' title={__('Social Icons', 'team-section')} initialOpen={false}>
				<ColorControl
					label={__('Icon Color', 'team-section')}
					value={styles?.social?.iconColor}
					onChange={(v) => setAttributes({ styles: updateData(styles, v, 'social', 'iconColor') })}
				/>
				<ColorControl
					className='mt10'
					label={__('Icon Hover Color', 'team-section')}
					value={styles?.social?.iconHoverColor}
					onChange={(v) => setAttributes({ styles: updateData(styles, v, 'social', 'iconHoverColor') })}
				/>
				<ColorControl
					className='mt10'
					label={__('Button Background', 'team-section')}
					value={styles?.social?.iconBg}
					onChange={(v) => setAttributes({ styles: updateData(styles, v, 'social', 'iconBg') })}
				/>
				<ColorControl
					className='mt10'
					label={__('Button Hover Background', 'team-section')}
					value={styles?.social?.iconHoverBg}
					onChange={(v) => setAttributes({ styles: updateData(styles, v, 'social', 'iconHoverBg') })}
				/>
				<RangeControl
					className='mt15'
					label={__('Icon Size (px)', 'team-section')}
					value={styles?.social?.iconSize}
					min={8}
					max={40}
					onChange={(v) => setAttributes({ styles: updateData(styles, v, 'social', 'iconSize') })}
				/>
				<UnitControl
					className='mt15'
					label={__('Button Size', 'team-section')}
					value={styles?.social?.btnSize}
					onChange={(v) => setAttributes({ styles: updateData(styles, v, 'social', 'btnSize') })}
				/>
				<UnitControl
					className='mt15'
					label={__('Button Border Radius', 'team-section')}
					value={styles?.social?.btnRadius}
					onChange={(v) => setAttributes({ styles: updateData(styles, v, 'social', 'btnRadius') })}
				/>
				<RangeControl
					className='mt15'
					label={__('Gap Between Icons (px)', 'team-section')}
					value={styles?.social?.gap}
					min={0}
					max={60}
					onChange={(v) => setAttributes({ styles: updateData(styles, v, 'social', 'gap') })}
				/>
				<BoxControl
					className='mt15'
					label={__('Social Links Margin', 'team-section')}
					values={styles?.social?.margin}
					onChange={(v) => setAttributes({ styles: updateData(styles, v, 'social', 'margin') })}
				/>
			</PanelBody>
		</>
	);
};

export default Style;
