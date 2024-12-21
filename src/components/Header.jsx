
function Score({
    currentScore,
    bestScore
}) {
    return (
        <div>
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
        <header className="flex justify-between gap-3 p-4">
            <div className="logo">
                <h1>PokeMind</h1>
            </div>
            <Score
            currentScore={currentScore}
            bestScore={bestScore} 
            />
        </header>
    )
}