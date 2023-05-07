type ButtonProps = {
	title: string
	onClick: () => void
	color: 'light' | 'dark'
	// eslint-disable-next-line react/require-default-props
	fit?: boolean
	size: 'small' | 'large'
}

const Button = ({
	title,
	onClick,
	color = 'light',
	fit = true,
	size,
}: ButtonProps) => {
	return (
		<button
			type='button'
			onClick={onClick}
			className={`
      ${size === 'small' ? 'h-10' : ''}
      ${size === 'large' ? 'h-14' : ''}
       font-bold border-2  rounded px-6  
      ${
				color === 'light'
					? 'border-neutral-100 text-neutral-100 hover:bg-neutral-100 hover:text-neutral-300'
					: ''
			}
      ${
				color === 'dark'
					? 'border-neutral-300 text-neutral-300 hover:bg-neutral-300 hover:text-neutral-100'
					: ''
			}
      ${fit ? '' : 'w-full'}
      transition duration-300 ease-in-out
      `}
		>
			{title.toUpperCase()}
		</button>
	)
}

export default Button
