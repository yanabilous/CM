import Icons from "../assets/sprite.svg";

function CardIcon({iconName, className, color}) {
  return (
    <div className="header">
      <svg className={`${className} img`} style={{fill: color}}>
        <use href={Icons + iconName}></use>
      </svg>
    </div>
  );
}

export default CardIcon;
