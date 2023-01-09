import React from 'react'
import "./gameplay.css"

let dlist = []
for (let i = 0; i < 3; i++) {
    dlist.push(<div className='dart'>
      <div>Dart {i+1}:</div>
      <input type={"number"}></input>
      <button>1x</button>
      <button>2x</button>
      <button>3x</button>
    </div>)
}

function Gameplay() {


  return (
    <div className='gameplay'>
      <div className='scorecard'>
        scorecard
        <table className='scoretable'>
          <tr>
            <td>--</td>
            <td>--</td>
            <td>--</td>
            <td>--</td>
            <td>--</td>
            <td>--</td>
            <td>--</td>
            <td>--</td>
          </tr>
          <tr>
            <td>--</td>
            <td>--</td>
            <td>--</td>
            <td>--</td>
            <td>--</td>
            <td>--</td>
            <td>--</td>
            <td>--</td>
          </tr>
          <tr>
            <td>--</td>
            <td>--</td>
            <td>--</td>
            <td>--</td>
            <td>--</td>
            <td>--</td>
            <td>--</td>
            <td>--</td>
          </tr>
        </table>
      </div>
      <div className='dartlist'>
        {dlist}
      </div>
      <div className='bb'>
      <button className='backbutton'>Back</button>
      <button className='backbutton'>Next</button>
      </div>
    </div>
  )
}

export default Gameplay