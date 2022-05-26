
const InfoCard = (props) => {

    const item = props.Activity.map((act, index) => {
        return (<div key={index}>
            <img src={act.imgSrc} alt={act.title}/>
            <p className="brand-color">{act.title}</p>
        </div>);
    });
    return (
      <div className="activity-parent">
          <h3 className="brand-color">{props.Title}</h3>
          <div className="activity">
              {item}
          </div>
      </div>
    );
}

export default InfoCard;