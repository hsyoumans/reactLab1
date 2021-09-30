import {useState} from 'react';
import './Cssfiles/Voter.css';

function Votes() {
    const [chocolateChipCookiedough, setChocolateChipCookiedough] = useState(0);
    const [mooseTracks, setMooseTracks] = useState(0);
    const [appleCrisp, setAppleCrisp] = useState(0);

    const total = chocolateChipCookiedough + mooseTracks + appleCrisp;
    const percents = {
        chocolateChipCookiedough: percent(chocolateChipCookiedough, total),
        mooseTracks: percent(mooseTracks, total),
        appleCrisp: percent(appleCrisp, total)
    };
    const [newInput, setNewInput] = useState("");

return (
    <div className="Vote">
      <h2>Vote Here</h2>
      <div className="buttons">
        <button onClick={() => setChocolateChipCookiedough(prev => prev + 1)}>Chocolate Chip Cookiedough</button>
        <button onClick={() => setMooseTracks(prev => prev + 1)}>Moose Tracks</button>
        <button onClick={() => setAppleCrisp(prev => prev + 1)}>Apple Crisp</button>
      </div>
      <input type="text" value={newInput} onChange={(event)=> setNewInput(event.target.value)}/>
      { total === 0 ? 
         <p>No votes yet.</p>:
          <>
            {chocolateChipCookiedough !== 0 && <>
              <p>
                <label>Chocolate Chip Cookiedough:</label> {chocolateChipCookiedough} ({percents.chocolateChipCookiedough})
              </p>
              <div
                className="Votes__bar Votes__bar--chocolate"
                style={{ width: percents.chocolateChipCookiedough }}
              ></div>
            </>}
            {mooseTracks !== 0 && <>
              <p>
                <label>Moose Tracks:</label> {mooseTracks} ({percents.mooseTracks})
              </p>
              <div
                className="Votes__bar Votes__bar--moose"
                style={{ width: percents.mooseTracks }}
              ></div>
            </>}
            {appleCrisp !== 0 && <>
              <p>
                <label>Apple Crisp:</label> {appleCrisp} ({percents.appleCrisp})
              </p>
              <div
                className="Votes__bar Votes__bar--apple"
                style={{ width: percents.appleCrisp }}
              ></div>
            </>}
          </>
         }
    </div>
  );
}

function percent(n: number, total: number): string {
  if (total === 0) {
    return "0.0%";
  }
  return ((n / total) * 100).toFixed(1) + "%";
}

export default Votes;