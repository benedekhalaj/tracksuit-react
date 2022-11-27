import {Container, CssBaseline} from "@mui/material";

import './App.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {FunctionComponent, useEffect, useState} from "react";
import Scores from "./components/scores/Scores";
import CardsByCategory from "./components/cards_by_category/CardsByCategory";
import CategoryService from "./services/category-service";
import PlayerService from "./services/player-service";
import Players from "./components/players/Players";
import PlayerModel from "./interfaces/player-model";
import Matches from "./components/matches/matches";

const App: FunctionComponent = () => {

    const [categories, setCategories] = useState<string[]>([]);
    const [players, setPlayers] = useState<PlayerModel[]>([]);

    useEffect(() => {
        setCategories(CategoryService.getCategories());
        PlayerService.getPlayers().then(players => setPlayers(players));
    }, [setCategories, setPlayers])

    return (
        <Container style={{backgroundColor: "whitesmoke", padding: "25px"}}>
            <h1>TrackSuit</h1>
            <CssBaseline/>
            <Matches></Matches>
            <Players></Players>
            <CardsByCategory categories={categories} players={players}></CardsByCategory>
            <Scores></Scores>
        </Container>
    );
}

export default App;
