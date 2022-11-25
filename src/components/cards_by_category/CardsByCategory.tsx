import CategoryCard from "../category_card/CategoryCard";
import {Navigation, Pagination} from "swiper";
import {isBrowser} from "react-device-detect";
import {Swiper, SwiperSlide} from "swiper/react";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {FunctionComponent} from "react";

interface Props {
    categories: string[],
    players: string[]
}

const CardsByCategory: FunctionComponent<Props> = (props) => {

    return (
        <Swiper
    style={{backgroundColor: "lightblue", userSelect: "none", borderRadius: "8px"}}
    modules={[Pagination, Navigation]}
    pagination={{clickable: true}}
    navigation
    slidesPerView={(isBrowser) ? 3 : 1}
    spaceBetween={20}
        >
            {props.categories.map((category, index) =>
                <SwiperSlide key={"SwiperSlide" + index}><CategoryCard title={category} players={props.players}/></SwiperSlide>)
            };

        </Swiper>
    );
}

export default CardsByCategory;
