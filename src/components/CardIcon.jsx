import Icons from "../assets/sprite.svg";

function CardIcon({iconName, className, color}) {

  return (
    <div className="header">
      <svg className={`${className} img`} style={{fill: color}} width={100} height={100}>
        <use xlinkHref={Icons +`${iconName}`}></use>
      </svg>
    </div>
  );
}

export default CardIcon;

