import { useState } from "react";

function Footer() {
    const [change, setChange] = useState(false);
    let handleClick = () => {
      setChange(!change);
    }
    let toggleClassCheck = change? 'active': '';
    return (
    <footer className={`footer${toggleClassCheck}`}>
        <button onClick={handleClick}>Recycle</button>
    </footer>
    )
}

export default Footer