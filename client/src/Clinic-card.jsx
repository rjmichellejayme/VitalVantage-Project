import { Link } from 'react-router-dom';
import './scss/style.css';

function ClinicCard({ title, image, services, link, id }) {
  return (
    <div className='clinic-card-wrap'>
      <img className='clinic-img' src={image} alt={`${title} image`} />
      <div className="clinicTitle">
        <h1 className='clinic-title'>{title}</h1>
      </div>
      <div className='clinic-services'>
        <h1>SERVICES</h1>
        {services.map((service, index) => (
          <h5 key={index}>{service}</h5>
        ))}
      </div>
      {/* Use Link for navigation */}
      <Link to={link} className="book-btn-link">
        <button type="button" className='book-btn'>BOOK NOW</button>
      </Link>
    </div>
  );
}

export default ClinicCard;
