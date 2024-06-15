import {Information} from "../../db/information.js";
import Body from "../Body.jsx";

function ContactUs() {

    const information = Information.get("contact");

    return (
        <>
            <Body Title={information.title} Content={information.content} />
        </>
    )
}

export default ContactUs;