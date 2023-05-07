import { Meta, StoryObj } from '@storybook/react'
import { userEvent, within } from '@storybook/testing-library'

import Header from '.'

const meta: Meta<typeof Header> = {
	title: 'Components/Header',
	component: Header,
	parameters: {
		layout: 'fullscreen',
	},
}

export default meta
type Story = StoryObj<typeof Header>

export const Default: Story = {
	play: ({ canvasElement }) => {
		const canvas = within(canvasElement)

		// const getById = queryByAttribute.bind(null, 'id')

		const mobileMenu = canvas.getByRole('button', { name: 'mobile-menu' })
		// const mobileMenu = getById(canvas, 'mobile menu')
		userEvent.click(mobileMenu)
	},
}
