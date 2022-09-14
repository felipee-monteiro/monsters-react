import * as React from 'react';
import reactLogo from './assets/react.svg';

function App() {
  const [monsters, setMonsters] = React.useState([]);

  function handleCleanScreen(e) {
      e.stopPropagation();
      setMonsters([]);
  }

  async function getMonsters() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    return data;
  }

  React.useEffect(() => {
    getMonsters().then(setMonsters);
  }, []);

  return (
    <main>
      <section className="container">
        <h1>{monsters.length} Monstros</h1>
        {monsters.map((item) => (
          <article className="monstros" key={item.id}>
            <img src={`https://robohash.org/${item.name}`} alt={item.name} />
            <div>
              <h2>{item.name}</h2>
              <p>{item.email}</p>
            </div>
          </article>
        ))}
        <button onClick={handleCleanScreen}>
          Limpar Monstros
        </button>
      </section>
    </main>
  )
}
export default App;
