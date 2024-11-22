import { Link } from "react-router-dom"
const games = [
    {id: 1,
    name: 'Teamfight Tactics',
    description: 'This is the most popular chess auto battler in the world.'},
    {id: 2,
    name: 'Valorant',
    description: 'This is the most popular FPS game1 in the world.'},
    {id: 3,
    name: '2XKO',
    description: 'An upcoming 2v2 Tag Team Fighting Game.'},
    {id: 4,
    name: 'Minecraft',
    description: 'This is the most autistic game in the world.'}
]
export default function Games() {
    return(
        <>
            <h1>Games List:</h1>
            <ul>
                {games.map((game) => (
                    <li key = {game.id}>
                        <Link to = {`/games/${game.id}`}
                        state={{game}}>
                        {game.name.toUpperCase()} - </Link>
                        {game.description}
                    </li>
                ))}
                <li>Teamfight Tactics</li>
                <li>Valorant</li>
                <li>2XKO</li>
                <li>Minecraft</li>
            </ul>
        </>
    )
}