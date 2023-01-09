import React from 'react'
import "./setup.css"

let game = {
    players: [],
    dartsPerPlayer: 3,
    round: 0,
    turn: 0
  }

function Setup() {
    const [selected, setSelected] = React.useState("")
    const [dpp, setDpp] = React.useState("")
    const [pl, setPl] = React.useState([])
    const [newPlayer, setNewPlayer] = React.useState("new player")
    const [update, setUpdate] = React.useState("")

    console.log(game.players)
    const data = [
        {key:'1',value:'bruh1'},
        {key:'2',value:'bruh2'},
  
    ]

  return (
    
    <div className='setup'>
        <div className='sbs1'>
            <div>Profile</div>
            <div>Settings</div>
        </div>

        <div className='sbs'>
            <div>Gamemode</div>
            <select>
                <option>bruh</option>
            </select>
        </div>

        <div className='sbs'>
            <div>Darts Per Player</div>
            <input type={"number"}></input>
        </div>

        <div className='roster'>

        {game.players.map((person, index) => {
        return (
          // <Player key={index} name={person.name} style={styles.playerItem}></Player>
          <div key={index} className="player">
      <div >
        {/* <Image source={require('../assets/player.png')}
          style={styles.plimages}
        />  */}
        <div>{person.name ? person.name: "bruh" }</div>
        {/* <Image source={require('../assets/pencil.png')} */}
          {/* style={styles.pimages} */}
        {/* />  */}
      
      </div>
      <div className='pright'>
        <button onClick={() => {game.players.splice(index, 1); setPl([game.players])}} className='prights'>
        <img src="https://media.discordapp.net/attachments/863918878429937676/1061878961119969340/x.png"
        className='primages'
        />  
        </button>
        {/* <img source="https://cdn.discordapp.com/attachments/863918878429937676/1061879877789290527/menu.png"
        className='primages'
        />   */}
      </div>
      
    </div>
        );
      })}

        </div>

        <div className='bottom'>
            <input type={"text"} ></input>
            <div className='buttons'>
                <button className='button2'>
                <img className='pimages' alt="add" src='https://media.discordapp.net/attachments/863918878429937676/1061879030636355584/add.png'
                    onClick={() => {game.players.push({name:newPlayer, total: 0, scores: []}); console.log(game.players); setPl([game.players])}}
                
                ></img>
                
                    Add Player
                </button>
                <button className='button2'>
                <img className='pimages' alt="play" src='https://media.discordapp.net/attachments/863918878429937676/1061878959672922153/play.png'></img>
                    Start Game</button>
            </div>
        </div>

    </div>
  )
}

export default Setup