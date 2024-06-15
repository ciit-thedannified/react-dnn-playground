import {Information} from "../../db/information.js";
import Body from "../Body.jsx";

function AboutUs() {

    const information = Information.get("about");

    return (
        <>
            <Body Title={information.title} Content={information.content} />
        </>
    )
}

export default AboutUs;