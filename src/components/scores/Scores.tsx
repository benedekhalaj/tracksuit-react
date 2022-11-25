import {FunctionComponent, useEffect, useState} from "react";
import {Paper} from "@mui/material";
import PlayerScoreComponent from "../player_score/PlayerScoreComponent";
import MatchScore from "../../interfaces/match-score";
import scoreService from "../../services/score-service";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper";
import {isBrowser} from "react-device-detect";

const Scores: FunctionComponent = () => {

    const [matchScore, setMatchScore] = useState<MatchScore>({matchName: "", playerScores: []});

    useEffect(() => {
        scoreService.getScores().then(scores => setMatchScore(scores));
    }, [setMatchScore]);

    return (
        <Paper>
            <h2>Scores</h2>
            <Swiper
                style={{backgroundColor: "lightblue", userSelect: "none", borderRadius: "8px"}}
                modules={[Pagination, Navigation]}
                pagination={{clickable: true}}
                navigation
                slidesPerView={(isBrowser) ? 3 : 1}
                spaceBetween={20}
            >
                {matchScore.playerScores.map((playerScore, index) =>
                    <SwiperSlide key={"SwiperSlide-" + index}>
                        <PlayerScoreComponent key={playerScore.playerName} playerScore={playerScore}/>
                    </SwiperSlide>
                )}
            </Swiper>

        </Paper>
    );
}

export default Scores;
