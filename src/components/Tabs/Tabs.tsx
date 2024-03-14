import { useState } from 'react'
import Tab from './Tab'
import { motion } from 'framer-motion'

// const activeTab = 'bg-ing border-2 border-white rounded-t-lg text-white '
// const inactiveTab =
// 	'border-2 border-white rounded-t-lg text-gray-900 bg-gray-400 text-gray-900 border-2 border-white rounded-t-lg'

const companyDatas = [
	{
		title: 'Location',
		data: [
			{ key: 'Name', value: 'Some very very BIG company' },
			{ key: 'Adress', value: 'Ulica 12/1' },
			{ key: 'Zip code', value: '41-500' },
			{ key: 'City', value: 'Chorzów' },
			{ key: 'Country', value: 'Poland' },
		],
	},
	{
		title: 'Websites',
		data: [
			{ key: 'KRS', value: 'www.somekrs.pl' },
			{ key: 'Office', value: 'www.bigcompanyoffice.pl' },
			{ key: 'Other', value: 'www.smallercompanyoffice.pl' },
		],
	},
	{
		title: 'Document registry',
		data: [
			{ key: 'NIP', value: '9979979970' },
			{ key: 'REGON', value: '123123123' },
			{ key: 'PKD REGON', value: '62.01.Z - Działalność związana z oprogramowaniem' },
		],
	},
	{
		title: 'Representation',
		data: [
			{
				key: 'Type',
				value:
					'W przypadku zarządu jednoosobowego jedyny członek zarządu reprezentuje co do zasady spółkę samodzielnie. Jednakże istnieje możliwość ustanowienia w takim wypadku prokury jednoosobowej lub łącznej. Przykładowo Sąd Najwyższy w wyroku z 15 grudnia 2016 r., sygn. akt II CSK 163/16 wyjaśnił, że gdy zarząd jest jednoosobowy, to nie ma podstaw do określania sposobu reprezentacji w umowie spółki.',
			},
		],
	},
]

const uboDatas = [
	{
		title: 'KRS',
		data: [
			{ key: 'KKI', value: '1212121212' },
			{ key: 'Name', value: 'Anna Nowak' },
			{ key: 'Country of birth', value: 'GB' },
			{ key: 'Country of citizenship', value: 'PL' },
			{ key: 'Country of living', value: 'PL' },
			{ key: 'PESEL/REGON', value: '213704193' },
			{ key: 'Percentage of shares', value: '95,93' },
			{ key: 'Date of birth', value: '12-07-1987' },
			{ key: 'ID/passport', value: 'JPB12345' },
		],
	},
	{
		title: 'ICBS',
		data: [
			{ key: 'KKI', value: '1212121212' },
			{ key: 'Name', value: 'Anna Ślimak' },
			{ key: 'Country of birth', value: 'PL' },
			{ key: 'Country of citizenship', value: 'PL' },
			{ key: 'Country of living', value: 'PL' },
			{ key: 'PESEL/REGON', value: '213704193' },
			{ key: 'Percentage of shares', value: '97,38' },
			{ key: 'Date of birth', value: '12-07-1987' },
			{ key: 'ID/passport', value: '' },
		],
	},
	{
		title: 'KRS - representation',
		data: [
			{ key: 'KKI', value: '1212121212' },
			{ key: 'Name', value: 'Anna Nowak' },
			{ key: 'Country of birth', value: 'PL' },
			{ key: 'Country of citizenship', value: 'PL' },
			{ key: 'Country of living', value: 'PL' },
			{ key: 'PESEL/REGON', value: '213704193' },
			{ key: 'Position', value: 'CEO' },
			{ key: 'Date of birth', value: '12-07-1987' },
			{ key: 'Compliance', value: 'N' },
		],
	},
	{
		title: 'ICBS - representation',
		data: [
			{ key: 'KKI', value: '1212121212' },
			{ key: 'Name', value: 'Anna Nowak' },
			{ key: 'Country of birth', value: 'PL' },
			{ key: 'Country of citizenship', value: 'PL' },
			{ key: 'Country of living', value: 'PL' },
			{ key: 'PESEL/REGON', value: '213704193' },
			{ key: 'Position', value: 'Legal rep' },
			{ key: 'Date of birth', value: '12-07-1987' },
			{ key: 'Compliance', value: 'N' },
		],
	},
]
const crbrDatas = [
	{
		title: 'KRS ',
		data: [
			{ key: 'Name', value: 'Big company' },
			{ key: 'Legal form', value: '117' },
			{ key: 'Nr KRS', value: '000004563' },
			{ key: 'NIP', value: '213704933' },
			{ key: 'Zip code', value: '41-100' },
			{ key: 'City', value: 'Katowice' },
			{ key: 'Adress', value: 'Sokolska 34' },
		],
	},
	{
		title: 'CRBR',
		data: [
			{ key: 'Name', value: 'Big company' },
			{ key: 'Legal form', value: '117' },
			{ key: 'Nr KRS', value: '000004563' },
			{ key: 'NIP', value: '213704933' },
			{ key: 'Zip code', value: '41-100' },
			{ key: 'City', value: 'Katowice' },
			{ key: 'Adress', value: 'Sokolska 34' },
		],
	},
]

const selectTabData = (tab: string) => {
	switch (tab) {
		case 'Company data':
			return companyDatas
		case 'UBO and representation':
			return uboDatas
		case 'CRBR comparition':
			return crbrDatas
		default:
			return companyDatas
	}
}

const Tabs = () => {
	const [activeTab, setActiveTab] = useState('Company data')

	const getTabClass = (tabName: string) => {
		return activeTab === tabName
			? 'bg-ing border-2 border-white rounded-t-lg text-white cursor-pointer'
			: 'border-2 border-white rounded-t-lg text-gray-900 bg-gray-400 text-gray-900 border-2 border-white rounded-t-lg cursor-pointer hover:bg-orange-200 transition-all'
	}

	return (
		<motion.div
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, type: 'tween', delay: 2 }}
			className='border-2 border-ing rounded-xl overflow-hidden flex flex-col relative mb-10 transition-all'>
			<div className='relative flex flex-row'>
				<div
					className={getTabClass('Company data')}
					onClick={() => setActiveTab('Company data')}>
					<p className='px-4 py-2 font-semibold'>Company data</p>
				</div>
				<div className='w-[1px] bg-gray-300 h-8 my-auto mx-[2px]'></div>
				<div
					className={getTabClass('UBO and representation')}
					onClick={() => setActiveTab('UBO and representation')}>
					<p className='px-4 py-2 font-semibold'>UBO and representation</p>
				</div>
				<div className='w-[1px] bg-gray-300 h-8 my-auto mx-[2px]'></div>
				<div
					className={getTabClass('CRBR comparition')}
					onClick={() => setActiveTab('CRBR comparition')}>
					<p className='px-4 py-2 font-semibold'>CRBR comparition</p>
				</div>
				<div className='w-[1px] bg-gray-300 h-8 my-auto mx-[2px]'></div>
				<div
					className={getTabClass('Summary')}
					onClick={() => setActiveTab('Summary')}>
					<p className='px-4 py-2 font-semibold'>Summary</p>
				</div>
			</div>
			<div className='h-[2px] bg-ing mb-2'></div>
			<Tab
				data={selectTabData(activeTab)}
				tab={activeTab}
			/>
		</motion.div>
	)
}

export default Tabs
