import { useState } from 'react'

import Close from 'assets/images/icon-close.svg'
import Hamburger from 'assets/images/icon-hamburger.svg'
import Button from 'components/Button'
import Logo from 'components/Logo'

const NAVIGATION_LINKS = ['How We Work', 'Blog', 'Account']

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen)
	}

	const closeMenu = () => {
		setIsMenuOpen(false)
	}

	return (
		<header className='relative lg:px-10 xl:px-[160px]'>
			<nav className='px-6 lg:px-0 h-20 flex flex-row justify-between items-center'>
				<Logo />

				<button
					type='button'
					onClick={toggleMenu}
					name='mobile-menu'
					className='lg:hidden'
				>
					{isMenuOpen ? <Close /> : <Hamburger />}
				</button>

				<div className='hidden lg:flex lg:flex-row lg:items-center lg:space-x-6'>
					<ul className='flex flex-row items-center space-x-6 font-bold'>
						{NAVIGATION_LINKS.map((link) => {
							return (
								<li key={link}>
									<a
										href='/#'
										className='text-neutral-200 hover:text-neutral-300 transition duration-300 ease-out whitespace-nowrap'
										onClick={closeMenu}
									>
										{link.toUpperCase()}
									</a>
								</li>
							)
						})}
					</ul>

					<Button
						title='View Plans'
						color='dark'
						onClick={() => {
							// TODO: Navigate to Plans
							closeMenu()
						}}
						size='small'
					/>
				</div>
			</nav>

			{/* Sidebar. */}
			<div
				className={`px-6 fixed h-full w-full bg-neutral-300 pt-16 top-20 z-50 ${
					isMenuOpen
						? 'translate-x-0 opacity-100'
						: 'translate-x-full opacity-0'
				} transition duration-300 ease-in-out bg-mobile-nav bg-no-repeat bg-bottom bg-contain`}
			>
				<ul className='space-y-12 flex flex-col items-center font-bold'>
					{NAVIGATION_LINKS.map((link) => {
						return (
							<li key={link}>
								<a href='/#' className='text-neutral-100' onClick={closeMenu}>
									{link.toUpperCase()}
								</a>
							</li>
						)
					})}

					<Button
						title='View Plans'
						fit={false}
						onClick={() => {
							// TODO: Navigate to Plans
							closeMenu()
						}}
						size='large'
						color='light'
					/>
				</ul>
			</div>
		</header>
	)
}

export default Header
