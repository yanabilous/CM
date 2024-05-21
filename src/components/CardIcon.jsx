import Icons from "../assets/sprite.svg";

// function CardIcon({iconName, className, color}) {
function CardIcon({iconName, color}) {
  return (
    <div className="header">
      {/*<svg className={`${className} img`} style={{fill: color}}>*/}
      <svg className={`img`} style={{fill: color}}>
        <use href={Icons + iconName}></use>
      </svg>
    </div>
  );
}

export default CardIcon;
