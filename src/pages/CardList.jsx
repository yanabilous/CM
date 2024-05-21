

import {cardsData} from "../utils/data";
import Card from "../components/Card.jsx";


function CardList() {
  const content = cardsData.map(item => (
    <Card key={item.id} item={item}/>
  ));


  return (
    <ul className="list">
      {content}
    </ul>
  );
}

export default CardList;
