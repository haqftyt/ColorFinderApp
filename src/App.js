import { useState } from "react";
import ColorScreen from "./components/ColorScreen";
import InputColor from "./components/InputColor";

function App() {
  const [colorValue,setcolorValue]=useState('');
  const[isDark,setisDark]=useState(true);
  const[hexValue,sethexValue]=useState('');
  return (
    <div className="App">
      <h1>ColorFinder App</h1>
      <ColorScreen
       colorValue={colorValue}
       isDark={isDark}
       hexValue={hexValue}
       />
      <InputColor
       colorValue={colorValue}
       setcolorValue={setcolorValue}
       isDark={isDark}
       setisDark={setisDark}
       sethexValue={sethexValue}/>
    </div>
  );
}

export default App;
