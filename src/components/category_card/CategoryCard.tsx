import {Card} from "@mui/material";
import TextNumberBlock from "../text_number_block/TextNumberBlock";
import {FunctionComponent} from "react";

interface Props {
    title: string,
    players: string[]
}

const CategoryCard: FunctionComponent<Props> = (props) => {
    return (
        <Card style={{
            padding: "2%",
            lineHeight: "10px",
            borderRadius: "8px"
        }}>
            <h2 style={{textAlign: "center"}}>{props.title}</h2>
            {props.players.map((player, index) => <TextNumberBlock key={player + index} text={player} />)}
        </Card>
    );
}

export default CategoryCard;
