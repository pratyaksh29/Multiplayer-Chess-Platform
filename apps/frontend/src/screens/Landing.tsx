import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import BackgroundSvg from "../components/BackgroundSvg";
import { useState, useEffect } from "react";

const chessFacts = [
    "The longest possible chess game is 5,949 moves.",
    "The word 'Checkmate' comes from the Persian phrase 'Shah Mat', meaning 'the King is dead'.",
    "There are more possible chess games than atoms in the observable universe.",
    "The shortest possible chess game ending in checkmate is just two moves.",
    "The first chess computer program was developed in 1951.",
    "The longest chess game in history lasted 269 moves and ended in a draw.",
    "The number of possible unique chess games is 10^120, called the Shannon number.",
    "The youngest chess grandmaster was Sergey Karjakin, achieving the title at 12 years and 7 months.",
    "The first official World Chess Champion was Wilhelm Steinitz in 1886.",
    "The chess piece now known as the queen was originally the vizier, a male figure.",
    "The folding chess board was invented by a priest who was forbidden to play chess.",
    "The longest time for a player to make a single move in competitive chess was 2 hours and 20 minutes.",
    "The first chess tournament in history was held in London in 1851.",
    "Blindfold chess is played without seeing the board, requiring players to keep the entire game in their minds.",
    "The oldest recorded chess game in history dates back to the 10th century."
];

export const Landing = () => {
    const navigate = useNavigate();
    const [chessFact, setChessFact] = useState("");

    useEffect(() => {
        const randomFact = chessFacts[Math.floor(Math.random() * chessFacts.length)];
        setChessFact(randomFact);
    }, []);

    return (
        <div className="flex justify-center overflow-hidden relative h-full" style={{ backgroundColor: "#1a1a1a" }}>
            <BackgroundSvg />
            <div className="py-8 max-w-screen-xl z-[1]">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3 h-full">
                    <div className="col-span-2 flex justify-center items-center">
                        <img src={"/chessboard3.png"} className="max-w-screen-sm animate-glow" />
                    </div>
                    <div className="pt-16">
                        <div className="flex justify-center">
                            <h1 className="text-4xl font-bold text-white text-center">Play chess on the number 1 site!</h1>
                        </div>
                        <div className="mt-4 flex justify-center">
                            <p className="text-xl text-gray-300">{chessFact}</p>
                        </div>

                        <div className="mt-8 flex space-x-5 justify-center">
                            <div className="bg-gradient-to-br from-yellow-500 to-orange-500 p-0.5 rounded-[6px] duration-500 shadow-[-30_0_1rem_-1rem,0_0_1rem_-1rem] hover:shadow-[-1rem_0_2rem_-0.5rem,1rem_0_2rem_-0.5rem] hover:shadow-orange-400">
                                <Button className="bg-gray-800 text-white rounded-[5px] px-4 duration-300 transition-colors hover:bg-gray-700 font-medium" onClick={() => {
                                    navigate("/game/random")
                                }} >
                                    Play Online
                                </Button>
                            </div>
                            <Button className="bg-green-500 text-white rounded-[6px] h-auto px-4 duration-300 transition-colors hover:bg-green-600 font-medium" onClick={() => {
                                navigate("/login")
                            }} >
                                Login
                            </Button>
                        </div>    
                    </div>
                </div>
            </div>
        </div>
    );
}