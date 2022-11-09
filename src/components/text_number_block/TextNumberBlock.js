import {Card, TextField} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";


const TextNumberBlock = () => {
    return (
        <Card>
            <Grid2 container spacing={2} padding={"1rem"}>
                <Grid2 xs={8}>
                    <p style={{fontWeight: "bold"}}>Terraforming Rate</p>
                </Grid2>
                <Grid2 xs={4}>
                    <TextField type={"number"} defaultValue={0}/>
                </Grid2>
            </Grid2>
        </Card>
    );
}

export default TextNumberBlock;
