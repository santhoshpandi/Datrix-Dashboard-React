import { createContext, useContext, useState } from "react";

// ----------------- 1. Creating new context -----------------
const SlideContext = createContext()

// ----------------- 2. Creating new context provider -----------------
export const SlideProvider = ({children})=>{

  // For side nav bar (left to right)
  const [menu, setMenu] = useState()
  // For slide of buttons bar (top to bottom)
  const [slide, setSlide] = useState(false)
  // For managing themes
  const [theme, setTheme] = useState(false)

  return(
    <SlideContext.Provider value={{menu, setMenu, slide, setSlide, theme, setTheme}}>
      {children}
    </SlideContext.Provider>
  )
}

// ----------------- 3. Creating new useContext -----------------
export const useSlide = ()=>{
  return useContext(SlideContext)
}