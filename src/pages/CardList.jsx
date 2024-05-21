

import {cardsData} from "../utils/data";
import Card from "../components/Card.jsx";



function CardList() {
  const cards = cardsData.map(item => (
    <Card key={item.id} item={item}/>
  ));


  return (
    <ul className="list">
      {cards}
    </ul>
  );
}

export default CardList;
