const Card = ({ imageUrl, location, locationDescription, link, startDate, endDate }) => {
  return (
    <div className="card">
    <div className="card-image-container">
      <img src={imageUrl} alt={location} className="card-image" />
    </div>
    <div className="card-body">
      <div className="card-header">
        <h5 className="card-title">{location}</h5>
        <p className="card-date">From: {startDate} to {endDate}</p>
      </div>
      <a href={link} target="_blank" rel="noopener noreferrer" className="btn btn-primary card-link">Visit on Google Maps</a>
      <p className="card-text">{locationDescription}</p>
    </div>
  </div>
  );
};


export default  Card;

