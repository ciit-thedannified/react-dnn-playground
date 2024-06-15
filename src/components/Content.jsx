import {
    BrowserRouter,
    Route,
    Routes,
    NavLink
} from "react-router-dom";

import "../css/style.css"
import Title from "./Title.jsx";
import Body from "./Body.jsx";
import Home from "./pages/Home.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import ContactUs from "./pages/ContactUs.jsx";

function Content() {

    /*
    let [title, setTitle] = useState("Welcome to Single React SPA");
    let [content, setContent] = useState("You have successfully logged in!");

    function handleChangeContext(context) {
        let information = Information.get(context);

        setTitle(information.title);
        setContent(information.content);
    }
    */

    return (
    <>
        <div className="main">
            <Title Text="Single React SPA" />
            <BrowserRouter>
                {/* NavBar */}
                <div className="nav">
                    <ul>
                        <NavLink to="/home">
                            <li> Home </li>
                        </NavLink>
                        <NavLink to="/about">
                            <li> About Us </li>
                        </NavLink>
                        <NavLink to="/contact">
                            <li> Contact Us </li>
                        </NavLink>
                    </ul>
                </div>

                <Routes>
                    <Route exact path="/" element={<Body Title="Welcome to React SPA!" Content="You have successfully logged in." /> } />
                    <Route path="/home" element={ <Home /> } />
                    <Route path="/about" element={ <AboutUs /> } />
                    <Route path="/contact" element={ <ContactUs /> } />
                </Routes>

            </BrowserRouter>

        </div>
    </>
    )

}

export default Content;