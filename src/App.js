import CategoryCard from "./components/category_card/CategoryCard";
import {Container, CssBaseline} from "@mui/material";
import {Navigation, Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";

import './App.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {isBrowser} from "react-device-detect";

function App() {

    const swiperPadding = (isBrowser) ? "5% 5%" : "2% 2% 15%";

    return (<Container style={{backgroundColor: "lightgray", padding: "25px"}}>
            <h1>TrackSuit</h1>
            <CssBaseline/>
            <Swiper
                style={{backgroundColor: "gray", padding: swiperPadding}}
                modules={[Pagination, Navigation]}
                pagination={{clickable: true}}
                slidesPerView={(isBrowser) ? 3 : 1}
                spaceBetween={20}
            >
                <SwiperSlide><CategoryCard title={"Terraforming Rate"} /></SwiperSlide>
                <SwiperSlide><CategoryCard title={"Milestone Points"} /></SwiperSlide>
                <SwiperSlide><CategoryCard title={"Award Points"} /></SwiperSlide>
                <SwiperSlide><CategoryCard title={"Greeneries"} /></SwiperSlide>
                <SwiperSlide><CategoryCard title={"Greeneries around Cities"} /></SwiperSlide>
                <SwiperSlide><CategoryCard title={"Victory Points on Cards"} /></SwiperSlide>
                <SwiperSlide><CategoryCard title={"Money"} /></SwiperSlide>
            </Swiper>
        </Container>
    );
}

export default App;
