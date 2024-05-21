
import {Link} from "react-router-dom";

import CardIcon from "./CardIcon.jsx";


function Card({item}) {
  const {id, title, list, icon, color} = item;
  return (
    <div
      id={id}
      className={`card`}
      style={{border: `${color} 1px solid`}}
    >
      <header>
        <CardIcon
          iconName={icon}
          color={color}
        />
      </header>

      <div className="main-text">
        <p className="title-card">
          {title}
        </p>
        <ul>
          {list.map((el, i) => (
            <li className="text-content" key={i}>{el}</li>
          ))}
        </ul>
      </div>
      <Link
        className="link"
        to={`/${id}`}
      >
        View more
      </Link>
    </div>
  );

}

export default Card;