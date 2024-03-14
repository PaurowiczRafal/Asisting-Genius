const Table = (props: any) => {
	const { key, data, type } = props

	console.log(data)

	const checkIfTrue = (item: any) => {
		if (
			item.value === '' ||
			item.value === '97,38' ||
			item.value === '95,93' ||
			item.value === 'Small company' ||
			item.value === '21-370' ||
			item.value === 'Anna Nowak' ||
			item.value === 'Anna Ślimak' ||
			item.value === 'GB' ||
			item.value === ''
		)
			return true
		else return false
	}
	const seprator = <div className='h-[1px] bg-gray-300 w-[80%] mx-auto my-2'></div>

	const nameError = (
		<p>
			It seems that name and surname <br />
			are incorrect in ICBS. <br />
			Check what is the reason. <br />
			(TIP: surrname often changes <br /> if you get married.)
		</p>
	)

	const countryError = (
		<p>
			It seems that country of birth <br /> is difftren in KRS.{' '}
		</p>
	)

	const percentError = (
		<p>
			Percentage of shares <br /> may have changed.{' '}
		</p>
	)


	const idError = (
		<p>
			Mmissing ID number <br /> varify client ID or passport..{' '}
		</p>
	)

	const correct = (
		<p>
			All data is correct. <br />
			No action is needed.
		</p>
	)

	const krsCmp = (<div className="py-2 bg-red-300">{countryError} {seprator} {percentError} </div>)
	const icbsCmp = (<div className="py-2 first:bg-red-300">{nameError} {seprator} {percentError} {seprator} {idError}</div>)
	const krsRCmp = (<div className="py-2 bg-red-300"><p>Verify name and surname.</p></div>)
	const icbsRCmp = (<div className="py-2 bg-red-300"><p>Verify name and surname.</p></div>)

	const correctCmp = (
		<div className='py-2 bg-green-300'>
			{correct}
		</div>
	)
	const companyCmp = (
		<div className='pb-10'>
			<div
				id={key}
				className='relative rounded-md  border-2 border-ing overflow-hidden shadow-lg '>
				<table className='w-full text-white border-2 border-ing'>
					<thead>
						<tr className='bg-ing'>
							<th colSpan={2}>{data.title}</th>
						</tr>
					</thead>
					<tbody className='text-gray-900'>
						{data.data.map((item: any, index: any) => (
							<tr key={index}>
								<td className={`border border-ing text-base p-2`}>{item.key}</td>
								{type === 'Company data' && (
									<td className={`border border-ing pl-3 max-w-72 text-sm p-2 `}>{item.value}</td>
								)}
								{type !== 'Company data' && (
									<td
										className={`border border-ing pl-3 max-w-72 text-sm p-2 ${
											checkIfTrue(item) ? 'bg-red-500' : 'bg-green-400'
										}`}>
										{item.value}
									</td>
								)}
							</tr>
						))}
					</tbody>
				</table>
			</div>
			{type !== 'Company data' && (
				<div className='mt-5 relative rounded-md  border-2 border-ing overflow-hidden shadow-xl'>
					<table className='w-full text-white border-2 border-ing'>
						<thead>
							<tr className='bg-ing'>
								<th colSpan={2}>{data.title}</th>
							</tr>
						</thead>
						<tbody className=''>
							<tr className='text-black text-center justify-center items-center'>
								{data.title === 'KRS' && krsCmp}
								{data.title === 'ICBS' && icbsCmp}
								{data.title === 'KRS - representation' && krsRCmp}
								{data.title === 'ICBS - representation' && icbsRCmp} 
								{data.title === 'KRS ' && correctCmp}
								{data.title === 'CRBR' && correctCmp}

							</tr>
						</tbody>
					</table>
				</div>
			)}
		</div>
	)

	return <div>{companyCmp}</div>
}

export default Table
