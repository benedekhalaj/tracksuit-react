import {useState} from "react";
import PropTypes from "prop-types";
import randomColor from "randomcolor";

function Button(props) {

    const [color, setColor] = useState(props.color);

    function updateColor() {
        const color = randomColor();
        setColor(color);
    }

    return (<button
        onMouseEnter={updateColor}
        style={{backgroundColor: color}}>change color</button>)
}

Button.propTypes = {
    color: PropTypes.string.isRequired
}

export default Button;
