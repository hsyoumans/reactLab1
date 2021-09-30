import {useState} from 'react';
import Ads from './Ads';

function DesignAdd() {
    const [fontSize, setfontSize] = useState(36);
    const [lightPicked, setLight] = useState<boolean>(true);
    const [pickFlavor, setFlavor] = useState<string>("Moose Tracks");
           
    return (
		<div  className="AdDesigner">
			<h3>Ad Designer</h3>
            <div className='AdDesign'>
                <Ads fontSize = {fontSize} lightPicked={lightPicked} pickFlavor={pickFlavor} />
            </div>
            <section>
                <p>
                    <h4>What to Support</h4>
                </p>
                <p className="buttons">
                    <button type="button" onClick={() => setFlavor("Chocolate Chip Cookiedough")} disabled={pickFlavor === "Chocolate Chip Cookiedough"}>Chocolate Chip Cookiedough</button>
                    <button type="button" onClick={() => setFlavor("Moose Tracks")} disabled={pickFlavor === "Moose Tracks"}>Moose Tracks</button>
                    <button type="button" onClick={() => setFlavor("Apple Crisp")} disabled={pickFlavor === "Apple Crisp"}>Apple Crisp</button>
                </p>
            </section>
            <section>
                <p>
                    <h4>Color Theme</h4>
                </p>
                <p className="buttons">
		            <button type="button" onClick={() => setLight(true)} disabled={lightPicked}>Dark</button>
		            <button type="button" onClick={() => setLight(false)} disabled={!lightPicked}>Light</button>
                </p>
            </section>
            <p>
                <h4>Font Size</h4>
                <p>
                    <button type="button" onClick={() => setfontSize(fontSize => fontSize + 1)}> Up </button>
                    {fontSize}
                    <button type="button" onClick={() => setfontSize(prevfontSize => fontSize - 1)}> Down </button>
                </p>
            </p>
		</div>
	)
};

export default DesignAdd;