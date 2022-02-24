export default function Navbar() {
    return (
        <div className="navbar">
            <div className="container">
                <nav className="flex">
                    <div className="navbar-brand">
                        <p>&lt;/design<span style={{color: "pink"}}>pig</span>&gt;</p>
                    </div>
                    <ul className="navbar-items flex">
                        <li className="navbar-item"><a href="/" className="navbar-link">Home</a></li>
                        <li className="navbar-item"><a href="/projects" className="navbar-link">Projects</a></li>
                        <li className="navbar-item"><a href="/contact" className="navbar-link">Contact Me</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}