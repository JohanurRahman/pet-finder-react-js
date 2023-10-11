import { Link } from 'react-router-dom';

interface IProps {
  name: string;
  animal: string;
  breed: string;
  images: string[];
  location: string;
  id: number;
}

const Pet = ({ name, animal, breed, images, location, id }: IProps) => {
  let hero = 'http://pets-images.dev-apis.com/pets/none.jpg';
  if (images.length) {
    hero = images[0];
  }
  return (
    <Link to={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <span className="info">
        <h1>{name}</h1>
        <h2>
          {animal} - {breed} - {location}
        </h2>
      </span>
    </Link>
  );
};

export default Pet;