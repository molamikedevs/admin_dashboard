import React from 'react'

const Button = ({ text, color, bgColor, borderRadius, size }) => {
	return (
		<button
			type="button"
			style={{ background: bgColor, color, borderRadius }}
			className={`text-${size} p-3 hover:drop-shadow-xl`}>
			{text}
		</button>
	)
}

export default Button
