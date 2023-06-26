import { Footer, Header } from 'components'

type PageLayoutProps = {
	children: React.ReactNode | React.ReactNode[]
}

const PageLayout = ({ children }: PageLayoutProps) => {
	return (
		<>
			<Header />

			{children}

			<Footer />
		</>
	)
}

export default PageLayout
