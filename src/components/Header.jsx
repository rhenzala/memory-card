
function Score({
    currentScore,
    bestScore
}) {
    return (
        <div className="bg-white border-black border-2 border-solid rounded-md p-4">
            <p>Score: {currentScore}</p>
            <p>Best Score: {bestScore}</p>
        </div>
    )
}

export default function Header({
    currentScore,
    bestScore
}) {
    return (
        <header className="flex items-center justify-between gap-4 p-4 bg-red border-b-black border-b-solid border-b-4 custom-sm:flex-col">
            <div className="logo flex flex-col custom-sm:items-center gap-3">
                <h1>PokeMemory</h1>
                <p className="text-sm text-white">Get points by clicking on any image but don't click on any more than once!</p>
            </div>
            <Score
            currentScore={currentScore}
            bestScore={bestScore} 
            />
        </header>
    )
}