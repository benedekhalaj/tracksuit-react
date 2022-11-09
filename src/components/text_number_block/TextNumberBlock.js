import {Card, TextField} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import PropTypes from "prop-types";


const TextNumberBlock = (props) => {
    return (
        <Card>
            <Grid2 container spacing={2} padding={"1rem"}>
                <Grid2 xs={8}>
                    <p style={{fontWeight: "bold"}}>{props.text}</p>
                </Grid2>
                <Grid2 xs={4}>
                    <TextField type={"number"} defaultValue={0}/>
                </Grid2>
            </Grid2>
        </Card>
    );
}

TextNumberBlock.propTypes = {
    text: PropTypes.string.isRequired
}

export default TextNumberBlock;
