import React from 'react'
import "./summary.css"

let game = {
    players: [{name: "aq" , total: 0, scores: []},
    {name: "aq" , total: 0, scores: []},
    {name: "aq" , total: 0, scores: []},
    {name: "aq" , total: 0, scores: []}
],
    dartsPerPlayer: 3,
    round: 0,
    turn: 0
  }

function Summary() {
    const [selected, setSelected] = React.useState("")
    const [dpp, setDpp] = React.useState("")
    const [newPlayer, setNewPlayer] = React.useState("new player")
    const [update, setUpdate] = React.useState("")
    const [round, setRound] = React.useState(0)

    const [pl, setPl] = React.useState(game.players)

    console.log(game.players)
    const data = [
        {key:'1',value:'bruh1'},
        {key:'2',value:'bruh2'},
  
    ]

  return (
    
    <div className='summary'>
        
        <div className='toggle'>
            <button>Toggle</button>
        </div>

        <div className='playerlist'>

        {game.players.map((person, index) => {
        return (
          // <Player key={index} name={person.name} style={styles.playerItem}></Player>
          <div key={index} className="playeritem">


        <div className='leftside'>
        <div>{person.name ? person.name: "bruh" }</div>
        <button onClick={() => {}} className='score'> Current Score </button>
        </div>
        
      
  
      <div className='rightside'>
        <button onClick={() => {game.players.splice(index, 1); setPl([game.players])}} className='ptable'>
        <table className='table'>

  <tr className='tr'>
    <td className='td'>0</td>
    <td className='td'>0</td>
    <td className='td'>0</td>
    <td className='td'>0</td>
    <td className='td'>0</td>
    <td className='td'>0</td>    <td className='td'>0</td>
    <td className='td'>0</td>
    <td className='td'>0</td>
    <td className='td'>0</td>
    <td className='td'>0</td>
    <td className='td'>0</td>
  </tr>
  <tr className='tr'>
    <td className='td'>0</td>
    <td className='td'>0</td>
    <td className='td'>0</td>
    <td className='td'>0</td>
    <td className='td'>0</td>
    <td className='td'>0</td>    <td className='td'>0</td>
    <td className='td'>0</td>
    <td className='td'>0</td>
    <td className='td'>0</td>
    <td className='td'>0</td>
    <td className='td'>0</td>
  </tr>
  <tr className='tr'>
    <td className='td'>0</td>
    <td className='td'>0</td>
    <td className='td'>0</td>
    <td className='td'>0</td>
    <td className='td'>0</td>
    <td className='td'>0</td>    <td className='td'>0</td>
    <td className='td'>0</td>
    <td className='td'>0</td>
    <td className='td'>0</td>
    <td className='td'>0</td>
    <td className='td'>0</td>
  </tr>
</table> 
        </button>
        {/* <img source="https://cdn.discordapp.com/attachments/863918878429937676/1061879877789290527/menu.png"
        className='primages'
        />   */}
      </div>
      
    </div>
        );
      })}

        </div>


            <div className='bottombuttons'>
                <button>
                    End Game
                </button>
                <button>
                    Continue
                </button>
            </div>
        </div>

  )
}

export default Summary