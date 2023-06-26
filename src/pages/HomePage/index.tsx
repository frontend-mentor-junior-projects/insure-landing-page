import { Button, Footer, Header } from 'components'
import utils from 'utils'

import { Card } from './components'

const HomePage = () => {
	return (
		<main className='overflow-x-hidden'>
			<Header />

			<section className='sm:grid sm:grid-cols-2 bg-primary-200 flex flex-col-reverse relative'>
				<div
					className={`pt-[104px] pb-[96px] sm:pb-[64px] lg:pb-[96px] px-6 sm:px-10 xl:pl-[160px] flex flex-col items-center sm:items-start text-neutral-100 lg:px-10 bg-pattern-left-mobile bg-no-repeat bg-left-top sm:bg-none
          relative`}
				>
					<div className='relative'>
						<hr className='hidden sm:block w-[152px] h-[2px] bg-[#B7A8B8] mb-[72px]' />

						<h1 className='mb-8  font-heading text-[32px] text-center sm:text-left sm:text-[48px] leading-none'>
							Humanizing <br /> your insurance.
						</h1>
					</div>

					<p className='mb-8 text-center sm:text-left'>
						Get your life insurance coverage easier and faster. We blend our
						expertise and technology to help you find the plan that’s right for
						you. Ensure you and your loved ones are protected.
					</p>

					<Button
						title='View Plans'
						onClick={() => {}}
						color='light'
						size='small'
					/>

					{/* Right pattern. */}
					<img
						className='sm:hidden absolute top-[340px] right-0'
						src='assets/images/bg-pattern-intro-right-mobile.svg'
						alt=''
					/>
				</div>

				<picture className='sm:absolute xl:right-[168px] xl:top-[104px] lg:right-[32px] sm:w-1/2 lg:w-1/2 xl:w-auto lg:top-[100px] sm:bg-red-400 sm:top-[100px] sm:right-0'>
					<source
						media='(min-width:640px)'
						srcSet='assets/images/image-intro-desktop.jpg'
					/>
					<img
						src='assets/images/image-intro-mobile.jpg'
						alt=''
						className='w-full'
					/>
				</picture>

				{/* Left pattern. */}
				<img
					className='hidden sm:block absolute top-[400px]'
					src='assets/images/bg-pattern-intro-left-desktop.svg'
					alt=''
				/>
				{/* Right pattern. */}
				<img
					className='hidden lg:block absolute -right-40 xl:right-0 top-0'
					src='assets/images/bg-pattern-intro-right-desktop.svg'
					alt=''
				/>
			</section>

			<section className='pt-[184px] xl:pt-[304px] pb-[112px] flex flex-col items-center lg:items-start px-6 lg:px-10 xl:px-[160px]'>
				<hr className='w-[152px] h-[2px] bg-[#B7A8B8] mb-10' />

				<h2 className='mb-8 sm:mb-[104px] font-heading text-[32px] sm:text-[48px] text-center sm:text-left'>
					We&apos;re different
				</h2>

				<div className='lg:justify-between lg:flex lg:flex-row lg:w-full lg:gap-x-20 xl:space-x-0'>
					{utils.SERVICES.map((service) => {
						return <Card key={service.id} content={service} />
					})}
				</div>
			</section>

			{/* Aside. */}
			<section className='py-[72px] bg-primary-200 flex flex-col sm:flex-row items-center mx-6 mb-[136px] sm:px-10 lg:px-20 lg:mx-10 xl:mx-[160px] lg:bg-hww-desktop bg-hww-mobile bg-no-repeat bg-right-top'>
				<h2 className='mb-8 sm:mb-0 font-heading text-[32px] sm:text-[40px] text-center sm:text-left text-neutral-100 w-full flex-1'>
					Find out more <br />
					about how we <br className='sm:hidden' />
					work
				</h2>

				<Button
					title='How We Work'
					onClick={() => {}}
					size='small'
					color='light'
				/>
			</section>

			<Footer />
		</main>
	)
}

export default HomePage
