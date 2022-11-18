import {FunctionComponent} from "react";
import {Divider, Paper} from "@mui/material";
import playerScore from "../../interfaces/player-score";

interface Props {
    playerScore: playerScore
}

const PlayerScore: FunctionComponent<Props> = (props) => {
    return (
        <Paper>
            <h3>{props.playerScore.playerName}</h3>
            {
                props.playerScore.categoryScores.map(categoryScore =>
                <p key={props.playerScore.playerName + categoryScore.category}
                >{categoryScore.category} | {categoryScore.score}</p>)
            }
            <Divider></Divider>
            <p><strong>{props.playerScore.totalScore}</strong></p>
        </Paper>
    );
}

export default PlayerScore;
