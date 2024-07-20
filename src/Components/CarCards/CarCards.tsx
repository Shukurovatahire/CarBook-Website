  import "./CarCards.scss";
  import { Link } from "react-router-dom";
  import { SlSpeedometer } from "react-icons/sl";
  import { GiGasPump } from "react-icons/gi";
  import { TbManualGearbox } from "react-icons/tb";
  import { GrEdit } from "react-icons/gr";
  import { GoTrash } from "react-icons/go";

  interface IProps {
    car: {
      id: number;
      make: string;
      model: string;
      year: number;
      color: string;
      mileage: number;
      price: number;
      fuelType: string;
      transmission: string;
      engine: string;
      horsepower: number;
      features: string[];
      owners: number;
      image: string;
    };
    onDelete: (id: number) => void;
    onEdit:(id:number)=>void
  }

  const CarCards: React.FC<IProps> = ({ car, onDelete, onEdit }) => {
    return (
      <div className="Card">
        <div className="img" style={{ backgroundImage: `url(${car.image})` }}>
          <div >
            <div className="edit">
              <button className="trashBtn" onClick={()=>onEdit(car.id)}><GrEdit style={{cursor:"pointer"}} /></button>
              
            </div>
            <div className="trash">
              <button onClick={() => onDelete(car.id)} className="trashBtn">
                <GoTrash style={{cursor:"pointer"}} />
              </button>
            </div>
          </div>
        </div>
        <div className="imgTitles">
          <h4 className="carName">
            {car.make} {car.model}
          </h4>
          <p className="carTitle">{car.engine}</p>
          <hr />
          <div className="icons">
            <div className="iconBox">
              <SlSpeedometer style={{ color: "gray" }} />

              <p>{car.mileage}Miles</p>
            </div>
            <div className="iconBox">
              <GiGasPump style={{ color: "gray" }} />
              <p>{car.fuelType}</p>
            </div>
            <div className="iconBox">
              <TbManualGearbox style={{ color: "gray" }} />
              <p>{car.transmission}</p>
            </div>
          </div>
          <hr />
          <div className="price">
            <h3 className="carPrice">${car.price}</h3>
            <Link
              to={`/cardetails/${car.id}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <span>View Details</span>
            </Link>
          </div>
        </div>
      </div>
    );
  };
  export default CarCards;
