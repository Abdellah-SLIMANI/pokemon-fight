import './App.css';
import PokemonCard from "./components/PokemonCard/PokemonCard";
import CardsContainer from "./containers/CardsContainer";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
        <Header />
        <CardsContainer />
    </div>
  );
}

export default App;
