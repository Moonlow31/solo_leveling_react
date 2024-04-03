import PropTypes from "prop-types";

function Box({plasticImg,}) {
    return (
    <div className="box">
        <h2>Plastic</h2>
        <br/>
        <img className="plasticImg" src={plasticImg} alt="plastic trash"/>
        <br/>
        <p>Plastic is not so fantastic !</p>
    </div>
    )
}

Box.propTypes = {
    plasticImg: PropTypes.string.isRequired
}.isRequired

export default Box