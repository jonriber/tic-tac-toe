import { useEffect } from "react";
import GameItem from "./GameItem";
import "./game.css";
const initialBoard = Array(9).fill(null)

const TicTacToe = () => {
    useEffect(() => {
        console.log("update")
    })

    return <>
        <main>
            <div className="container-game">
                <div className="board-game">
                    {initialBoard.map((item,index) => (
                        <GameItem key={index} val={"x"} {...item}/>
                    ))}
                </div>
            </div>
            <div>
                Controller
            </div>
        </main>
    </>
}

export default TicTacToe