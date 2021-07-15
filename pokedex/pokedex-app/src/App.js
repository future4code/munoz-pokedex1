import GlobalState from "./components/GlobalState/GlobalState";
import Router from "./Router";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <>
      <div>
        <GlobalStyle />
        <main>
          <GlobalState>
            <Router />
          </GlobalState>
        </main>
      </div>
      
    </>
  );
}

export default App;
