import TopNavBar from "./components/shared/TopNavBar";
import Greet from "./components/Greet";
import "./App.css"

function App() {
    return (
        <div className="App">
            <TopNavBar className="TopNavBar"/>
            <Greet name="Tomasz"/>
            <Greet name="Łukasz"/>
            <Greet name="Arek"/>
            <Greet name="Mateusz"/>
        </div>
    );
}

export default App;
