import Facebook from 'assets/images/icon-facebook.svg'
import Instagram from 'assets/images/icon-instagram.svg'
import Pinterest from 'assets/images/icon-pinterest.svg'
import Twitter from 'assets/images/icon-twitter.svg'
import Logo from 'components/Logo'
import utils from 'utils'

const Footer = () => {
	return (
		<footer className='flex flex-col items-center bg-neutral-100 px-6 xl:px-[160px] sm:px-10 bg-footer-mobile sm:bg-footer-desktop bg-no-repeat sm:bg-[position:left_top] lg:bg-center-top bg-contain sm:bg-auto'>
			<section className='flex flex-col sm:flex-row items-center sm:justify-between pb-10 mt-[88px] mb-12 border-b-[1px] border-b-neutral-200 w-full'>
				<div className='mb-8 sm:mb-0'>
					<Logo />
				</div>

				<div className='flex flex-row space-x-4'>
					<a href='/'>
						<Facebook />
					</a>
					<a href='/'>
						<Twitter />
					</a>
					<a href='/'>
						<Instagram />
					</a>
					<a href='/'>
						<Pinterest />
					</a>
				</div>
			</section>

			<section className='sm:flex sm:flex-row sm:justify-between sm:w-full sm:pb-12'>
				{utils.FOOTER_LINKS.map((group) => {
					return (
						<div
							key={group.title}
							className='font-bold mb-10 text-center sm:text-left'
						>
							<p className='mb-10 text-neutral-200'>
								{group.title.toUpperCase()}
							</p>

							<ul className='space-y-4'>
								{group.links.map((link) => {
									return (
										<li key={link}>
											<a
												href='/#'
												className='text-neutral-300 hover:underline transition duration-500 ease-out'
											>
												{link.toUpperCase()}
											</a>
										</li>
									)
								})}
							</ul>
						</div>
					)
				})}
			</section>
		</footer>
	)
}

export default Footer
