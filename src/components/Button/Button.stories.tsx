import { Meta, StoryObj } from '@storybook/react'

import Button from '.'

const meta: Meta<typeof Button> = {
	title: 'Components/Button',
	component: Button,
	args: {
		title: 'View Plans',
	},
}

export default meta
type Story = StoryObj<typeof Button>

export const OnLightBackground: Story = {
	args: {
		color: 'dark',
	},
	decorators: [
		(Story) => {
			return (
				<div className='bg-neutral-100 p-6'>
					<Story />
				</div>
			)
		},
	],
}

export const OnDarkBackground: Story = {
	args: {
		color: 'light',
	},

	decorators: [
		(Story) => {
			return (
				<div className='bg-neutral-300 p-6'>
					<Story />
				</div>
			)
		},
	],
}
