import {Container, CssBaseline} from "@mui/material";

import './App.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {FunctionComponent} from "react";
import Scores from "./components/scores/Scores";

const App: FunctionComponent = () => {

    return (
        <Container style={{backgroundColor: "whitesmoke", padding: "25px"}}>
            <h1>TrackSuit</h1>
            <CssBaseline/>
            <Scores />
        </Container>
    );
}

export default App;
