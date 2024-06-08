import { Board } from "./components/Board";



function App() {


    return (
        <section className="w-screen min-h-screen bg-white flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold mb-8">CogMates Game</h1>
            <Board />
        </section >
    );
}

export default App;
