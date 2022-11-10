import {Card, Stack, TextField} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import TextNumberBlock from "../text_number_block/TextNumberBlock";
import PropTypes from "prop-types";


function CategoryCard(props) {
    return (
        <Card style={{
            padding: "2%",
            lineHeight: "10px"
        }}>
            <h2 style={{textAlign: "center"}}>{props.title}</h2>
            <TextNumberBlock text={"Juhász Zsuzsanna Ilona"}/><br/>
            <TextNumberBlock text={"Pozsonyi Gábor János"}/><br/>
            <TextNumberBlock text={"Halaj Léna Frida"}/><br/>
            <TextNumberBlock text={"Sági Viktor Ferenc"}/><br/>
            <TextNumberBlock text={"Dudaskó Bendegúz Attila"}/><br/>
            <TextNumberBlock text={"Turcsányi Vivien Erzsébet"}/><br/>
            <TextNumberBlock text={"Halaj Benedek Herbert"}/><br/>
            <TextNumberBlock text={"Körmendi Zsófia Izolda"}/><br/>
        </Card>
    );
}

CategoryCard.propTypes = {
    title: PropTypes.string.isRequired
}

export default CategoryCard;
