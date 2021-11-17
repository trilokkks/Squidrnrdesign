import logo from "../images/logo.png";
import text from "../images/title.png";
import joinBtn from "../images/btn.png";
import { Link } from "react-router-dom";

export const Home = () => {
    return ( <
        div className = "container home" >
        <
        div className = "logo" >
        <
        img src = { logo }
        alt = "logo" / >
        <
        /div> <
        div className = "text" >
        <
        img className = "textImage"
        src = { text }
        alt = "text" / >
        <
        span > We dont have any sports left! < /span> <
        span > Just think about it! < /span> < /
        div > <
        div className = "join" >
        <
        Link to = "/join" >
        <
        img src = { joinBtn }
        alt = "join btn" / >
        <
        /Link> < /
        div > <
        /div>
    );
};