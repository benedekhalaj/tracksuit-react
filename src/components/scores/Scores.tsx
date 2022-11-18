import {FunctionComponent, useEffect, useState} from "react";
import {Paper} from "@mui/material";
import PlayerScore from "../player_score/PlayerScore";
import MatchScore from "../../interfaces/match-score";

const Scores: FunctionComponent = () => {

    const [matchScore, setMatchScore] = useState<MatchScore>({matchName: "", playerScores: []});

    useEffect(() => {
        fetch("http://localhost:8080/api/v0/scores")
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setMatchScore(data);
            });
    }, [setMatchScore]);



    return (
        <Paper>
            <h1>Scores</h1>
            {matchScore.playerScores.map(playerScore => <PlayerScore key={playerScore.playerName} playerScore={playerScore} />)}
        </Paper>
    );
}

export default Scores;
