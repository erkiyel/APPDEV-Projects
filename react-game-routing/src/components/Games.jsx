import { Link } from "react-router-dom"

const games = [
    {
        id: 1,
        name: 'Teamfight Tactics',
        description: 'This is the most popular chess auto battler in the world.',
        publisher: "Riot Games",
        developer: "Riot Games",
        reviews: [
            "Amazing strategy game with tons of depth!",
            "A little too RNG-dependent at times, but overall very fun.",
            "Highly addictive, perfect for casual or competitive players."
        ]
    },
    {
        id: 2,
        name: 'Valorant',
        description: 'This is the most popular FPS game in the world.',
        publisher: "Riot Games",
        developer: "Riot Games",
        reviews: [
            "A fantastic tactical shooter with great mechanics.",
            "The learning curve is steep, but once you get the hang of it, it's incredibly rewarding.",
            "The game has a strong community, but matchmaking can sometimes be frustrating."
        ]
    },
    {
        id: 3,
        name: '2XKO',
        description: 'An upcoming 2v2 Tag Team Fighting Game.',
        publisher: "Riot Games",
        developer: "Riot Games",
        reviews: [
            "Excited to see where this game goes, a unique take on fighting games.",
            "The mechanics feel fresh, and the teamwork aspect is fun.",
            "Still early days, but potential is huge!"
        ]
    },
    {
        id: 4,
        name: 'Minecraft',
        description: 'This is a game appropriate for all ages.',
        publisher: "Mojang",
        developer: "Mojang",
        reviews: [
            "An all-time classic. Endless creativity and exploration!",
            "The blocky graphics aren't for everyone, but the gameplay is fantastic.",
            "Minecraft is a game that grows with you—always something new to discover."
        ]
    },
    {
        id: 5,
        name: 'Pokemon Trading Card Game Pocket',
        description: 'This is a young game released on October 30, 2024.',
        publisher: "Pokemon Company",
        developer: "Pokemon Company",
        reviews: [
            "A great portable version of the beloved card game.",
            "I love the nostalgic feel, but wish there were more cards available.",
            "A great way to pass time while playing the classic Pokémon TCG!"
        ]
    }
]

export default function Games() {
    return (
        <>
            <h1>Games List:</h1>
            <ul>
                {games.map((game) => (
                    <li key={game.id}>
                        <Link to={`/games/${game.id}`} state={{ game }}>
                            {game.name.toUpperCase()} - {game.description}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}
