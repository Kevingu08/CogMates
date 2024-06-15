import { Board } from "./components/Board";
import { Homepage } from "./components/Homepage";
import { Instructions } from "./components/Instructions";



function App() {


    return (
        <section className="w-screen h-screen bg-white flex flex-col sm:justify-center mt-6 sm:mt-0 sm:items-center p-4 text-center">
            <Instructions />
        </section >
    );
}

export default App;
