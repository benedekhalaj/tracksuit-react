import {Container, CssBaseline} from "@mui/material";

import './App.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import CardsByCategory from "./components/cards_by_category/CardsByCategory";
import PlayerService from "./services/player-service";
import CategoryService from "./services/category-service";
import {FunctionComponent} from "react";

const App: FunctionComponent = () => {

    const categories = CategoryService.getCategories();
    const players = PlayerService.getPlayers();

    return (
        <Container style={{backgroundColor: "whitesmoke", padding: "25px"}}>
            <h1>TrackSuit</h1>
            <CssBaseline/>
            <CardsByCategory categories={categories} players={players} />
        </Container>
    );
}

export default App;
