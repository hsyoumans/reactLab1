import './Cssfiles/Ads.css';

interface AdProps {
  fontSize: number;
  lightPicked?: boolean;
  pickFlavor: string;
}

function Ad({pickFlavor, fontSize, lightPicked = false}: AdProps) {
  let className = "Ad " + (lightPicked ? "Ad--dark" : "Ad--light");
  return (
    <div className={className}>
      <p className="Ad_prompt">Vote For</p>
      <p className="Ad_choice" style={{fontSize: fontSize + 'px'}}>{pickFlavor}</p>
    </div>
  )
}

export default Ad;