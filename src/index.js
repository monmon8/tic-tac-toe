
import  ReactDOM from "react-dom";
import './index.css'


const Board = () =>{
  return(
  <div style={{
    backgroundColor: "skyblue",
    margin: 10,
    padding: 20
  }}>
    Board
    <div className="board-row">
    <Square /><Square /><Square />
    </div>
    <div className="board-row">
    <Square /><Square /><Square />
    </div>
    <div className="board-row">
    <Square /><Square /><Square />
    </div>
  </div>
  );
};

const Square= () =>{

  return(
    <div className="square">X</div>
  );
};

const Game = () =>{
  return (
    <div className="game"> 
      Game
      <Board />
      
    </div>
  );
};

ReactDOM.render(
  <Game />,
  document.getElementById('root')
)