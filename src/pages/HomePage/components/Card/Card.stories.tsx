import { Meta, StoryObj } from '@storybook/react'
import utils from 'utils'

import Card from '.'

const meta: Meta<typeof Card> = {
	title: 'Pages/Home/Card',
	component: Card,
	args: {
		content: utils.SERVICES[0],
	},
}

export default meta
type Story = StoryObj<typeof Card>

export const Default: Story = {}
