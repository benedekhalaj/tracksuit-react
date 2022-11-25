import {Card} from "@mui/material";
import TextNumberBlock from "../text_number_block/TextNumberBlock";
import {FunctionComponent} from "react";
import PlayerModel from "../../interfaces/player-model";

interface Props {
    title: string,
    players: PlayerModel[]
}

const CategoryCard: FunctionComponent<Props> = (props) => {
    return (
        <Card style={{
            padding: "2%",
            lineHeight: "10px",
            borderRadius: "8px"
        }}>
            <h2 style={{textAlign: "center"}}>{props.title}</h2>
            {props.players.map((player, index) => <TextNumberBlock key={player.name + index} text={player.name} />)}
        </Card>
    );
}

export default CategoryCard;
