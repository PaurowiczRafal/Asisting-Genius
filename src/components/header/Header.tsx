import imgLogo from '../../img/ing.png'
import { motion } from 'framer-motion'
const Header = () => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, type: 'tween' }}
			className='mt-10 flex'>
			<img
				src={imgLogo}
				alt=''
				className='h-10 w-10'
			/>
			<p className='text-4xl text-ing font-bold ml-2'>Genius advice</p>
		</motion.div>
	)
}

export default Header
