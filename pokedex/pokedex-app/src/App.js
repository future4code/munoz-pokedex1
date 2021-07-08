import Router from './Router' 



function App() {
  return (
    <div>

      <header>
        <a href="/PokedexPage">
          Ver minha pokedex
        </a>
        <h2>
          Lista de Pokémons
        </h2>
      </header>
      
      <main>
        <Router/>
      </main>

      <footer>
        Pokédex - Labenu
      </footer>
      
    </div>

      


  
    
  );
}

export default App;
