import MatchModel from "../../interfaces/match-model";
import {FunctionComponent} from "react";
import {Card} from "@mui/material";

interface Props {
    match: MatchModel
}

const Match: FunctionComponent<Props> = (props) => {
    return (
        <Card>
            <h3>{props.match.name}</h3>
        </Card>
    );
};

export default Match;
