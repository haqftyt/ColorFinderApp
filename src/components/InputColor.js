import React from 'react';
import colornames from 'colornames';
const InputColor = ({colorValue,setcolorValue,setisDark,isDark,sethexValue}) => {
  return (
   <div>
     <input
    type="text"
    role="searchbox"
    placeholder='Search color'
    value={colorValue}
    onChange={(e)=>{
        setcolorValue(e.target.value)
        sethexValue(colornames(e.target.value))
    }
    }
    />
    <div>
    <button
    type='submit'
    onClick={()=>setisDark(!isDark)}
    >Toggle Button</button>
    </div>
   </div>
  )
}

export default InputColor