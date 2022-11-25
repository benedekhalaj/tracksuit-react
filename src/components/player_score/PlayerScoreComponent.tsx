import {FunctionComponent} from "react";
import {Divider, Paper} from "@mui/material";
import PlayerScore from "../../interfaces/player-score";
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

interface Props {
    playerScore: PlayerScore
}

interface TrophyColors {
    1: "warning",
    2: "action",
    3: "error"
}

const PlayerScoreComponent: FunctionComponent<Props> = (props) => {

    const trophyColors: TrophyColors = {
        1: "warning",
        2: "action",
        3: "error"
    }

    const getTrophy = (placement: number) => {
        if (placement > 3) {
            return (<></>)
        }
        const color =
                (placement === 1) ? "warning" :
                (placement === 2) ? "action" :
                (placement === 3) ? "error" :
                                    "inherit";
        return (<EmojiEventsIcon color={color}></EmojiEventsIcon>);
    }

    return (
        <Paper style={{textAlign: "center"}}>
            <h3>{props.playerScore.playerName} {getTrophy(props.playerScore.placement)}</h3>
            <p><strong>Total: {props.playerScore.totalScore}</strong></p>
            <Divider></Divider>

            {props.playerScore.categoryScores.map(categoryScore =>
                <p key={props.playerScore.playerName + categoryScore.category}>
                    {categoryScore.category} | {categoryScore.score}
                </p>
            )}
        </Paper>
    );
}

export default PlayerScoreComponent;
