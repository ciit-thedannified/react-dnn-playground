import {Information} from "../../db/information.js";
import Body from "../Body.jsx";

function Home() {

    const information = Information.get("home");

    return (
        <>
            <Body Title={information.title} Content={information.content} />
        </>
    )
}

export default Home;