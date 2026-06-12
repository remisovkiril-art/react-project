import type {CardType} from "../types/CardType.ts";

function Card(prop:{card:CardType}){
    const{title, description, views, is_show} = prop.card;
    return (<p>Text {title} Views: {views+5}
        <b> {description}</b>
        <p>{is_show?"Active":"Non Active"}</p>
    </p>)
}

/*function Card(card:CardType){
    if(card.is_show)
    {
        return (<p>Text {card.title} Views: {card.views+5}
            {card.description}
            {<p>{card.is_show?"Active":"No Active"}</p>}
        </p>)
    }
}*/
export default Card;
//JSX (TSX) JavaScript XML - мова розмітки