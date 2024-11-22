import { useLocation } from "react-router-dom"

export default function Game() {
    const location = useLocation()
    const game = location.state.game;

    return (
        <div className="game-detail">
            <h1>{game.name}</h1>
            <p>{game.description}</p>

            <h2>Reviews:</h2>
            <ul className="reviews-list">
                {game.reviews.map((review, index) => (
                    <li key={index} className="review-item">
                        <p>"{review}"</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}
