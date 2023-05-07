type CardProps = {
	content: {
		title: string
		description: string
		image: string
	}
}

const Card = ({ content }: CardProps) => {
	return (
		<div className='flex flex-col items-center py-8 lg:py-0 lg:items-start max-w-[344px]'>
			<img src={content.image} alt='' className='mb-10 h-[88px] lg:mb-12' />

			<h2 className='font-heading text-[24px] mb-6 text-neutral-300'>
				{content.title}
			</h2>

			<p className='text-center text-neutral-200 lg:text-left'>
				{content.description}
			</p>
		</div>
	)
}

export default Card
