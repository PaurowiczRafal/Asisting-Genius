import { useState } from 'react'
import Table from '../table/Table'
import { motion } from 'framer-motion'

const Tab = (props: any) => {
	const [isChecked, setIsChecked] = useState(false)
	const { data, tab } = props
	const isActive = true

	console.log('Data', props.data.dataKrs)
	const tempTab = (
		<motion.div
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, type: 'tween' }}
			className='relative px-1 py-2 mr-2 flex gap-4'>
			{data.map((item: any, index: any) => (
				<Table
					key={index}
					data={item}
					type={tab}
				/>
			))}
		</motion.div>
	)

	const handleClick = () => {
		setIsChecked(!isChecked)
	}
	const summaryTab = (
		<motion.div
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, type: 'tween' }}
			className='relative px-1 py-2 mr-2 flex gap-4'>
			<div className='flex flex-col justify-center items-center mx-auto'>
				<p className='text-xl font-bold text-ing'>Summary</p>
				<div className='flex items-center mb-4 my-2'>
					<input
						id='default-checkbox'
						type='checkbox'
						value=''
						onClick={handleClick}
						className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 cursor-pointer'
					/>
					<label
						htmlFor='default-checkbox'
						className='ms-2 text-sm font-medium text-gray-900'>
						I accept that I have read the information presented.
					</label>
				</div>
				<div className='flex gap-4 mb-6'>
					<button className='px-10 py-2 border border-ing bg-transparent rounded-lg hover:text-gray-50 font-semibold hover:bg-orange-500 transition-all shadow-md'>
						Open PDF
					</button>
					<button className='px-10 py-2 border border-ing bg-transparent rounded-lg hover:text-gray-50 font-semibold hover:bg-orange-500 transition-all shadow-md'>
						Ask for help
					</button>
					<button
						className={`px-10 py-2 border border-gray-200 bg-transparent rounded-lg h font-semibold ${
							isChecked ? 'hover:bg-orange-500 hover:text-gray-50 border-ing cursor-pointer' : 'cursor-not-allowed'
						}  transition-all shadow-md`}>
						Send to another anlyst
					</button>
				</div>
			</div>
		</motion.div>
	)

	return (
		<div className='transition-all'>
			{tab === 'Company data' && tempTab}
			{tab === 'UBO and representation' && tempTab}
			{tab === 'CRBR comparition' && tempTab}
			{tab === 'Summary' && summaryTab}
		</div>
	)
}

export default Tab
