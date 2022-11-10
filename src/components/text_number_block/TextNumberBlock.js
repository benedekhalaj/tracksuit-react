import {Card, TextField} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import PropTypes from "prop-types";
import {isBrowser} from "react-device-detect";


const TextNumberBlock = (props) => {
    return (
        <Card>
            <Grid2 justifyItems={"center"} alignContent={"center"} container spacing={2} padding={"1%"} lineHeight={"0%"}>
                <Grid2 xs={8}>
                    <p style={{fontWeight: "bold"}}>{props.text}</p>
                </Grid2>
                <Grid2 xs={4}>
                    <input
                        style={{
                            width: "100%",
                            height: "35px",
                            padding: "2px",
                            borderRadius: "2px",
                            border: "1px lightgray solid",
                            font: "inherit"
                    }}
                        type={"number"}
                        placeholder={(isBrowser) ? "points" : "points"}
                    />
                </Grid2>
            </Grid2>
        </Card>
    );
}

TextNumberBlock.propTypes = {
    text: PropTypes.string.isRequired
}

export default TextNumberBlock;
