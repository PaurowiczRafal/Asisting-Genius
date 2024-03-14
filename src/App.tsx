import React from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './components/header/Header'
import CardSm from './components/cards/CardSm'
import Tabs from './components/Tabs/Tabs'

const titleCards = [
	{ title: 'Cliient number', text: '1234567890', delay: 0.5 },
	{ title: 'Short name', text: 'Some BIG company', delay: 1 },
	{ title: 'Registration date', text: '13-03-2024', delay: 1.5 },
]

function App() {
	return (
		<div className='mx-auto flex justify-center items-center flex-col relative pt-1 scrollbar-hide overflow-clip bg-gray-50 '>
			<Header />
			<div className='my-8 flex flex-row gap-16'>
				{titleCards.map((card, index) => (
					<CardSm
						key={index}
						title={card.title}
						text={card.text}
						delay={card.delay}
					/>
				))}
			</div>
			<Tabs />
		</div>
	)
}

export default App
