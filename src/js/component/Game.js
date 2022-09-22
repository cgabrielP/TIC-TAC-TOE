import React, {useState} from "react";
import {calculateWinner} from "../helper";
import Board from "./Board"
import Input from "./input"

const Game = ()=>{
    const[history, setHistory] = useState([Array(9).fill('')])
    const[stepNumber, setStepNumber] = useState(0);
    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(history[stepNumber]);
    const [name1, setName1]= useState('')
    const [name2, setName2]= useState('')

    const xO = xIsNext ? "X" : "O";
    const playerName = xIsNext ? (name1) : (name2);
    

    const handleClick = (i) => {
        const historyPoint = history.slice(0, stepNumber + 1);
        const current = historyPoint[stepNumber];
        const squares = [...current];
        //return if won or occupied
        if (winner || squares[i]) return;
        squares[i]= xO
        setHistory([...historyPoint, squares])
        setStepNumber(historyPoint.length);
        setXisNext(!xIsNext)
    };
    const jumpTo= (step) =>{
        setStepNumber(step);
        setXisNext(step % 2 === 0);
    };

const renderMoves = () =>
    history.map((_step, move) =>{
        const destination = move ? `Go to move #${move}` :"REINICIAR"
        return(
            <li key={move}>
                <button onClick={()=> jumpTo(move)}>{destination}</button>
            </li>
        );
    });

    return (
        <>
          <h1 className="text-center">React Tic Tac Toe </h1>
          <div className='row'>
          <div className='col-6'>
          <Input type={"text"} id={'player2'} name={'name'} value={name1} placeholder={'Jugador 1'} onChange={(event) => setName1(event.target.value)} className={"form-control my-2"} />
          </div>
          <div className='col-6'>
          <Input type={"text"} id={'player1'} name={'name'} value={name2} placeholder={'Jugador 2'} onChange={(event) => setName2(event.target.value)} className={"form-control my-2"} />
          </div>
          </div>
          <Board squares={history[stepNumber]} onClick={handleClick} />
          <div className="info-wrapper">
            <div>
              
              {renderMoves()}
            </div>
            <h3>{winner ? "Ganador " + winner : "Turno de " + (playerName)}</h3>
          </div>
        </>
      );
} 
export default Game;