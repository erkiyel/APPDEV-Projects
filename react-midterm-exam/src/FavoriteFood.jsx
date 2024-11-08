export default function FavoriteFood({item}) {
    if (item.length === 0) {
      return <p>I have no Favorite Pork Dishes</p>
    }

    return (
      <div>
        <h3>My Favorite Fruits</h3>
        <ul>
          {item.map(fruit => (
            <li key={fruit.id}>
              <strong>{fruit.name}</strong> - {fruit.color} - Rating: {fruit.rating}/5
            </li>
          ))}
        </ul>
      </div>
    )
  }
  