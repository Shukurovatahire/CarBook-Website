import { Link, useParams } from "react-router-dom";
import { useGetCarsQuery } from "../../Services/CarApi/CarApi";
import "./Details.scss";
import { useEffect, useState } from "react";
import { BiCalendar } from "react-icons/bi";
import { SlSpeedometer } from "react-icons/sl";
import { GiGasPump } from "react-icons/gi";
import { TbManualGearbox } from "react-icons/tb";
import { FaCar } from "react-icons/fa";
import { GiSteeringWheel } from "react-icons/gi";
import { CiUser } from "react-icons/ci";
import { BiColorFill } from "react-icons/bi";
import { TbEngine } from "react-icons/tb";
import { GiCarDoor } from "react-icons/gi";
import { FaScrewdriver } from "react-icons/fa";
import { HiOutlineDocumentReport } from "react-icons/hi";

interface ICar {
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
}

const Details = () => {
  const { data: cars } = useGetCarsQuery();
  const { id } = useParams<{ id: string }>();
  const [car, setCar] = useState<ICar | null>(null);
  useEffect(() => {
    if (id && cars) {
      const foundCar = cars.find((car: any) => car.id === parseInt(id));
      setCar(foundCar);
    }
  }, [id, cars]);

  if (!car) {
    return <p>Car not found</p>;
  }
  console.log(car);

  return (
    <>
      <section className="detailSection">
        <header className="header">
          <img
            src="https://wgl-dsites.net/genesisauto/wp-content/uploads/2024/05/logo-w1.png"
            alt=""
          />
        </header>

        <div className="detailsBox">
          <div className="links">
            <Link
              style={{
                textDecoration: "none",
                color: "blue",
                cursor: "pointer",
              }}
              to={"/"}
            >
              Home /
            </Link>
            <Link
              style={{
                textDecoration: "none",
                color: "blue",
                cursor: "pointer",
              }}
              to={`/cardetails/${car.id}`}
            >
              Details /
            </Link>
            <span>
              {car.make} {car.model}
            </span>
          </div>

          <div className="carTitle">
            <h1>
              {car.make} {car.model} New
            </h1>
            <div className="titleIcons">
              <div className="icon">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "1px",
                  }}
                >
                  <BiCalendar />
                  {car.year}
                </div>
              </div>
              <div className="icon">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "1px",
                  }}
                >
                  <SlSpeedometer />
                  {car.mileage}
                </div>
              </div>
              <div className="icon">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "1px",
                  }}
                >
                  <TbManualGearbox />
                  {car.transmission}
                </div>
              </div>
              <div className="icon">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "1px",
                  }}
                >
                  <GiGasPump />
                  {car.fuelType}
                </div>
              </div>
            </div>
          </div>

          <div className="photoBox">
            <div className="img1">
              <img
                src="https://demoapus1.com/boxcar/wp-content/uploads/elementor/thumbs/car8-qgcqjcne9diluefjkeisezftm5aptwpff8w6kr9wn0.jpg"
                alt=""
              />
            </div>
            <div className="gridImgs">
              <img
                src="https://demoapus1.com/boxcar/wp-content/uploads/elementor/thumbs/car3-qgcqjcn7ttjna35nt7h40iewaj7qgu8kef3ibw4wi4.jpg"
                alt=""
              />
              <img
                src="https://demoapus1.com/boxcar/wp-content/uploads/elementor/thumbs/car11-qgcqjcn7ttjna35nt7h40iewaj7qgu8kef3ibw4wi4.jpg"
                alt=""
              />
              <img
                src="https://demoapus1.com/boxcar/wp-content/uploads/elementor/thumbs/car10-qgcqjcn7ttjna35nt7h40iewaj7qgu8kef3ibw4wi4.jpg"
                alt=""
              />
              <img
                src="https://demoapus1.com/boxcar/wp-content/uploads/elementor/thumbs/car1-qgcqjcn7ttjna35nt7h40iewaj7qgu8kef3ibw4wi4.jpg"
                alt=""
              />
            </div>
          </div>

          <div className="carOverview">
            <h4 style={{ fontFamily: "system-ui", fontWeight: "500", fontSize:"20px" }}>
              Car Overview / Description
            </h4>
            <div
              className="generalBox"
              style={{
                display: "flex",
                gap: "3rem",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div className="overviewBox">
                <div className="firstIcons">
                  <div className="boxItems">
                    <FaCar />
                    <p>Body</p>
                  </div>
                  <div className="boxItems">
                    <SlSpeedometer />
                    <p>Mileage</p>
                  </div>
                  <div className="boxItems">
                    <GiGasPump />
                    <p>Fuel Type</p>
                  </div>
                  <div className="boxItems">
                    <TbManualGearbox />
                    <p> Transmission</p>
                  </div>
                  <div className="boxItems">
                    <GiSteeringWheel />
                    <p> Drive Type</p>
                  </div>
                  <div className="boxItems">
                    <BiCalendar />
                    <p>Year</p>
                  </div>
                </div>
                <div className="descriptions">
                  <p>Sedan</p>
                  <p>{car.mileage}</p>
                  <p>{car.fuelType}</p>
                  <p>{car.year}</p>
                  <p>{car.transmission}</p>
                  <p>All-Wheel Drive (AWD/4WD)</p>
                </div>
                <div className="secondIcons">
                  <div className="boxItems">
                    <CiUser />
                    <p> Condition</p>
                  </div>
                  <div className="boxItems">
                    <TbEngine />
                    <p> Engine Size</p>
                  </div>
                  <div className="boxItems">
                    <GiCarDoor />
                    <p> Door</p>
                  </div>
                  <div className="boxItems">
                    <FaScrewdriver />
                    <p>Cylinder</p>
                  </div>
                  <div className="boxItems">
                    <BiColorFill />
                    <p>Color</p>
                  </div>
                  <div className="boxItems">
                    <HiOutlineDocumentReport />
                    <p>VIN</p>
                  </div>
                </div>
                <div className="descriptions2">
                  <p>New</p>
                  <p>{car.engine}</p>
                  <p>4 Doors</p>
                  <p>12</p>
                  <p>{car.color}</p>
                  <p>MCB123818</p>
                </div>
              </div>
              <hr className="hr" />
              <div className="desc" style={{ flex: "1" }}>
                <p>
                  The Mercedes-Benz GLS, formerly Mercedes-Benz GL-Class, is a
                  full-size luxury crossover SUV produced by Mercedes-Benz since
                  2006. In each of its generations it is a three-row,
                  seven-passenger vehicle positioned above the GLE (formerly
                  Mercedes-Benz M-Class before 2016). The GLS is considered the
                  flagship of the marque's SUV lineup, although the
                  body-on-frame G-Class (originally intended for military
                  off-roading but also offered in luxurious trims) is more
                  expensive and has been in production longer.The GLS shares the
                  same unibody architecture with the GLE. Most GLS vehicles are
                  assembled at the Mercedes plant in Alabama, except for a small
                  number of early 2007 production vehicles which were
                  manufactured in Germany. The first generation model (X164) was
                  manufactured between 2006 and 2012 and was replaced in 2013 by
                  the new generation GL-Class (X166).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Details;
