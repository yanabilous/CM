import Icons from "../assets/sprite.svg";

function CardIcon({iconName, className, color}) {

  return (
    <div className="header">
      <svg className={`${className} img`} style={{fill: color}}>
        <use xlinkHref={Icons +`${iconName}`}></use>
        {/*<use href={`${Icons}#${iconName}`} />*/}
      </svg>
    </div>
  );
}

export default CardIcon;

