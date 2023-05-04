
// eslint-disable-next-line no-unused-vars
import React,{useState} from 'react';
import  ReactDOM from "react-dom";
import './index.css'


const Board = () =>{
  const initialSquares = Array(9).fill(null)
  
  const[squares, setSquares ] = useState(initialSquares)
   
  const handleClickEvent = (i) => {

    const newSquares = [...squares];

    newSquares[i] = 'X';

    setSquares(newSquares)
};

  const renderSquare = (i) =>{
    return(
      <Square value = {squares[i]} 

        onClickEvent = {() => handleClickEvent(i)}
      />
    );
  };
  
  
  return(
  <div style={{
    backgroundColor: "skyblue",
    margin: 10,
    padding: 20
  }}>
    Board
    <div className="board-row">
    {renderSquare(0)}{renderSquare(1)}{renderSquare(2)}
    </div>
    <div className="board-row">
    {renderSquare(3)}{renderSquare(4)}{renderSquare(5)}
    </div>
    <div className="board-row">
    {renderSquare(6)}{renderSquare(7)}{renderSquare(8)}
    </div>
  </div>
  );
};

const Square= (props) =>{


  return(
    <button 
      className="square"
      onClick={props.onClickEvent}

    >{props.value}
    </button>
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