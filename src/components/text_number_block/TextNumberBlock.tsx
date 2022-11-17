import {Card} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import {FunctionComponent} from "react";

interface Props {
    text: string
}

const TextNumberBlock: FunctionComponent<Props> = (props) => {

    const inputStyles = {
        width: "100%",
        height: "35px",
        padding: "6px",
        borderRadius: "8px",
        border: "1px lightgray solid",
        font: "inherit"
    };

    return (
        <Card style={{
            borderRadius: "8px"
        }}>
            <Grid2 container spacing={2} padding={"1%"} lineHeight={"0%"}>
                <Grid2 xs={8}>
                    <p style={{fontWeight: "bold"}}>{props.text}</p>
                </Grid2>
                <Grid2 xs={4}>
                    <input
                        style={inputStyles}
                        type={"number"}
                        placeholder={"points"}
                        defaultValue={0}
                    />
                </Grid2>
            </Grid2>
        </Card>
    );
}

export default TextNumberBlock;
