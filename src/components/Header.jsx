function Header({logoImg}) {
    return (
    <header className="header">
        <nav className="nav">
            <div className="blocLogo">
                <img className="logoNav" src={logoImg} alt="logo eco"/>
                <h2>Eco Clean</h2>
            </div>
            <ul className="blocLink">
                <li className="aboutUs"><a href="#">About Us</a></li>
                <li className="plasticProblem"><a href="#">The Plastic Problem</a></li>
                <li className="contactUs"><a href="#">Contact Us</a></li>
            </ul>
        </nav>
    </header>
    )
}

export default Header