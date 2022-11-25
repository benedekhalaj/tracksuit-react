import {FunctionComponent} from "react";
import PlayerModel from "../../interfaces/player-model";
import {Button, Card} from "@mui/material";

interface Props {
    player: PlayerModel,
    onDelete: Function
}

const Player: FunctionComponent<Props> = (props) => {
    return (
        <Card style={{width: "fit-content", minWidth: "10%", margin: "10px", padding: "5px", borderRadius: "10px"}}>
            <h3>{props.player.name}</h3>
            <Button onClick={() => props.onDelete(props.player.id)}>Delete</Button>
        </Card>
    );
}

export default Player;
