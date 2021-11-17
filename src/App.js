import { BrowserRouter } from "react-router-dom";
import "./App.css";
import bgmUrl from "./assets/bgm.mp3";
import { useEffect } from "react";
import { Routes } from "./components/Routes";
import { SuspenseWithPerf } from "reactfire";

const Loading = () => < div className = "container centered" > Loading... < /div>;

function App() {
    const bgm = new Audio(bgmUrl);

    useEffect(() => {
        bgm.play();
        return () => {
            bgm.pause();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return ( <
        BrowserRouter >
        <
        SuspenseWithPerf fallback = { < Loading / > } >
        <
        div className = "App" >
        <
        Routes / >
        <
        /div> <
        /SuspenseWithPerf> <
        /BrowserRouter>
    );
}

export default App;