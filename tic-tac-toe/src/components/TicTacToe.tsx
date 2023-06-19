import GameItem from "./GameItem";
import "./game.css";
const initialBoard = Array(9).fill(null)

const TicTacToe = () => {
    return <>
        <main>
            <div className="container-game">
                <div className="board-game">
                    {initialBoard.map((item,index) => (
                        <GameItem key={index} val={"x"}/>
                    ))}
                </div>
                
            </div>
        </main>
    </>
}

export default TicTacToe