import React, {FunctionComponent, useEffect, useState} from 'react';
import MatchModel from "../../interfaces/match-model";
import matchService from "../../services/match-service";
import {Paper} from "@mui/material";
import Match from "../match/match";

const Matches: FunctionComponent = () => {

    const [matches, setMatches] = useState<MatchModel[]>([]);

    useEffect(() => {
        const appUserId: number = 1;
        matchService.getMatches(appUserId).then(matches => setMatches(matches));
    }, [setMatches])

    return (
        <>
            <h1>MATCHES</h1>
            <Paper>
                {
                    matches.map(match => <Match key={match.id} match={match}></Match>)
                }
            </Paper>
        </>
    );
};

export default Matches;
