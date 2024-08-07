import Card from "./Card";
import { useContext } from "react";
import { ContextItems } from "../Store/Context";
import styles from "./Cards.module.css";
function Cards() {
    const {provideItems}=useContext(ContextItems);
    return <div className= {styles.cards} >
   {provideItems.map((item)=> <Card item={item} ></Card>)}
    </div>
}
export default Cards;