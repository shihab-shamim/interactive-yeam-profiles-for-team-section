import { __ } from '@wordpress/i18n';
import { PanelBody, PanelRow, RangeControl, ToggleControl } from '@wordpress/components';
import { updateData } from '../../../../utils/functions';
import { Device, ItemsPanel, Label } from '../../../../../../bpl-tools/Components';
import OneSetting from '../../../Common/cards/OneSetting';

const General = ({ attributes, setAttributes, device }) => {
	const { profiles = [], options = {}, styles = {} } = attributes || {};

	const newProfile = {
		name: `Team Member ${profiles.length + 1}`,
		designation: 'Job Title',
		bio: 'Short description about this team member.',
		image: 'https://i.ibb.co/8x9xK4H/team.jpg',
		social: [
			{
				icon: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512' width='14' height='14' fill='currentColor'><path d='M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z'/></svg>",
				link: '#'
			},
			{
				icon: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='14' height='14' fill='currentColor'><path d='M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z'/></svg>",
				link: '#'
			},
			{
				icon: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512' width='14' height='14' fill='currentColor'><path d='M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z'/></svg>",
				link: '#'
			}
		]
	};

	return (
		<>
			<PanelBody
				className='bPlPanelBody'
				title={__('Team Profiles', 'team-section')}
				initialOpen={true}
			>
				<ItemsPanel
					newItem={newProfile}
					design='sortable'
					attributes={attributes}
					setAttributes={setAttributes}
					arrKey='profiles'
					itemLabel={__('Profile', 'team-section')}
					ItemSettings={OneSetting}
				/>
			</PanelBody>

			<PanelBody
				className='bPlPanelBody'
				title={__('Layout', 'team-section')}
				initialOpen={false}
			>
				<PanelRow>
					<Label>{__('Columns', 'team-section')}</Label>
					<Device />
				</PanelRow>
				<RangeControl
					value={styles?.columns?.[device]}
					min={1}
					max={6}
					onChange={(val) => setAttributes({ styles: { ...styles, columns: { ...styles.columns, [device]: val } } })}
				/>

				<RangeControl
					label={__('Column Gap (px)', 'team-section')}
					value={styles?.columnGap}
					min={0}
					max={200}
					onChange={(val) => setAttributes({ styles: { ...styles, columnGap: val } })}
				/>

				<RangeControl
					label={__('Row Gap (px)', 'team-section')}
					value={styles?.rowGap}
					min={0}
					max={200}
					onChange={(val) => setAttributes({ styles: { ...styles, rowGap: val } })}
				/>
			</PanelBody>

			<PanelBody
				className='bPlPanelBody'
				title={__('Elements', 'team-section')}
				initialOpen={false}
			>
				<ToggleControl
					className='mt10'
					label={__('Show Name', 'team-section')}
					checked={options.showName}
					onChange={(val) => setAttributes({ options: { ...options, showName: val } })}
				/>
				<ToggleControl
					className='mt10'
					label={__('Show Designation', 'team-section')}
					checked={options.showDesignation}
					onChange={(val) => setAttributes({ options: { ...options, showDesignation: val } })}
				/>
				<ToggleControl
					className='mt10'
					label={__('Show Bio', 'team-section')}
					checked={options.showBio}
					onChange={(val) => setAttributes({ options: { ...options, showBio: val } })}
				/>
				<ToggleControl
					className='mt10'
					label={__('Show Social Links', 'team-section')}
					checked={options.showSocial}
					onChange={(val) => setAttributes({ options: { ...options, showSocial: val } })}
				/>
				<ToggleControl
					className='mt10'
					label={__('Open Social Links in New Tab', 'team-section')}
					checked={options.openInNewTab}
					onChange={(val) => setAttributes({ options: { ...options, openInNewTab: val } })}
				/>
			</PanelBody>
		</>
	);
};

export default General;
