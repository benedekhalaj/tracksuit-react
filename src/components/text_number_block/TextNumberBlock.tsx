import {Card} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import {FunctionComponent} from "react";

interface Props {
    text: string
}

const TextNumberBlock: FunctionComponent<Props> = (props) => {

    return (
        <Card>
            <Grid2 container>
                <Grid2 xs={8}>
                    <p>{props.text}</p>
                </Grid2>
                <Grid2 xs={4}>
                    <input
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
