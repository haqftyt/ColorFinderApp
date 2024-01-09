import React from 'react';
const ColorScreen = ({colorValue,isDark,hexValue}) => {
  return (
     <div className='color-display'
     style={{backgroundColor:colorValue}}>
        <p style={{color:isDark ?'#000':'#fff'}}>{colorValue}<br/>{hexValue}</p>
     </div>
  )
}

export default ColorScreen