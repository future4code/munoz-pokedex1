import Router from "./Router";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <>
      <div>
        <GlobalStyle />
        <main>
          <Router />
        </main>
      </div>
      <footer>Pokédex - Labenu</footer>
    </>
  );
}

export default App;
