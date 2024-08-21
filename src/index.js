import ReactDOM from "react-dom/client";
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById("root"))
import Home from "./Views/Home/Home"
import About from "./Views/About/About"
import Contact from "./Views/Contact/Contact"


const Path =window.location.pathname;
if(Path=="/")
    {
        root.render(<Home/>)
    }
    else if(Path=="/about")
        {
            root.render(<About/>) 
        }
        else if(Path=="/contact")
            {
                root.render(<Contact/>) 
            }
            else{
                root.render(<h1>404 Not found</h1>)
            }