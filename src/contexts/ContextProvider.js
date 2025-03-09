import React, { createContext, useState, useContext } from 'react'

const StateContext = createContext()

const initialState = {
	chat: false,
	cart: false,
	userProfile: false,
	notification: false,
}

export const ContextProvider = ({ children }) => {
	const [isClicked, setIsClicked] = useState(initialState)
	const [screenSize, setScreenSize] = useState(undefined)
	const [currentColor, setCurrentColor] = useState('#03C9D7')
	const [currentMode, setCurrentMode] = useState('Light')
	const [themeSettings, setThemeSettings] = useState(false)
	const [activeMenu, setActiveMenu] = useState(true)

	const setMode = e => {
		setCurrentMode(e.target.value)
		localStorage.setItem('themeMode', e.target.value)

		setThemeSettings(false)
	}

	const setColor = color => {
		setCurrentColor(color)
		localStorage.setItem('colorMode', color)

		setThemeSettings(false)
	}

	const handleClick = (clicked) => {
		setIsClicked((prevState) => ({
			...initialState,
			[clicked]: !prevState[clicked], // Toggle instead of always setting to true
		}));
	};
	
	
	

	return (
		// eslint-disable-next-line react/jsx-no-constructed-context-values
		<StateContext.Provider
			value={{
				handleClick,
				setMode,
				setColor,
				currentColor,
				currentMode,
				activeMenu,
				screenSize,
				setScreenSize,
				isClicked,
				initialState,
				setIsClicked,
				setActiveMenu,
				setCurrentColor,
				setCurrentMode,
				themeSettings,
				setThemeSettings,
			}}>
			{children}
		</StateContext.Provider>
	)
}

export const useProvider = () => {
	const context = useContext(StateContext)
	if (context === undefined)
		throw new Error('useProvider must be used within a ContextProvider')
	return context
}
