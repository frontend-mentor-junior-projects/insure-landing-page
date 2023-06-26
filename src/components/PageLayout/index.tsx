import { Footer, Header } from 'components'

type PageLayoutProps = {
	mainContentRef: React.RefObject<HTMLElement>
	children: React.ReactNode | React.ReactNode[]
}

const PageLayout = ({ mainContentRef, children }: PageLayoutProps) => {
	return (
		<>
			<a
				href='#main-content'
				className='skip-link'
				onClick={() => {
					mainContentRef.current?.focus()
				}}
			>
				Skip to content
			</a>

			<Header />

			{children}

			<Footer />
		</>
	)
}

export default PageLayout
