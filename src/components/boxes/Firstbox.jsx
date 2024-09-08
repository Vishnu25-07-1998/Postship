import { useState } from 'react'
import './firstbox.scss'


const Firstbox = () => {
    const [accent, setAccent] = useState("#e66465");
    const [text, setText] = useState("#3390ff");
    const [background, setBackground] = useState("#7a9a65");
    const handleColorChange = (event) => {
        setAccent(event.target.value);
    };
    const handleColorText = (event) => {
        setText(event.target.value);
    };
    const handleColorBackground = (event) => {
        setBackground(event.target.value);
    };
  return (
    <div className="firstbox">
        <h5>
            Elevate Your Brand Aesthetics with Custom Tracking Page Styles
        </h5>
        <span>
            Immerse your customers in a branded experience by personalizing the colors on your tracking page.
        </span>
        <div className="colors">
            <p>Accent Color</p>
            <div className="color_set">
                <span>{accent}</span>
                <input type="color" id="Accent" name="Accent" value={accent} onChange={handleColorChange} />
            </div>
            <p>Text Color</p>
            <div className="color_set">
                <span>{text}</span>
                <input type="color" id="text" name="text" value={text} onChange={handleColorText} />  
            </div>
            <p>Background Color</p>
            <div className="color_set">
                <span>{background}</span>
                <input type="color" id="background" name="background" value={background} onChange={handleColorBackground} />
            </div>
        </div>
        <div className="buttons">
            <button>Preview</button>
            <button>Apply Colors</button>
        </div>
    </div>
  )
}

export default Firstbox
