import {Container, CssBaseline} from "@mui/material";

import './App.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import CardsByCategory from "./components/cards_by_category/CardsByCategory";
import PlayerService from "./services/PlayerService";
import CategoryService from "./services/CategoryService";

function App() {

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
