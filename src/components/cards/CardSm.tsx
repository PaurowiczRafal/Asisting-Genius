import { motion } from 'framer-motion'

const CardSm = (props: any) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, type: 'tween', delay: props.delay}}
			className=' border-2 border-ing rounded-xl overflow-hidden shadow-lg'>
			<div className='flex flex-col'>
				<div className='flex justify-center items-center bg-ing px-4 py-2'>
					<p className='text-xl font-bold text-white tracking-wider'>{props.title}</p>
				</div>
				<div className=''>
					<p className='text-lg text-gray-900 px-10 py-4'>{props.text}</p>
				</div>
			</div>
		</motion.div>
	)
}

export default CardSm
