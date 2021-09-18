import './topbar.scss'
import { Person, Mail } from "@material-ui/icons"
export default function ({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Lorem Ipsum</a>
                    <div className="itemContainer">
                        <Person classname="icon" />
                        <span>+000 999 888 777</span>
                    </div>
                    <div className="itemContainer">
                        <Mail classname="icon" />
                        <span>johndoe@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2" ></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
