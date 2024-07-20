import { useGetCarsQuery } from "../../Services/CarApi/CarApi";
import CarCards from "../CarCards/CarCards";
import Marquee from "../Marquee/Marquee";
import { GiSettingsKnobs } from "react-icons/gi";
import "./Home.scss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import { addCar, deleteCar, updateCar } from "../../Redux/CarSlice/CarSlice";
import store from "../../Redux/store";
import EditWindow from "../EditWindow/EditWindow";

const Home = () => {

  const dispatch = useAppDispatch();

  const cars = useAppSelector((state) => state.car.cars);
  const { data: fetchedCars, isSuccess } = useGetCarsQuery();

  useEffect(() => {
    if (isSuccess && fetchedCars) {
        dispatch(addCar(fetchedCars));
    }
  }, [fetchedCars, isSuccess, dispatch]);

  console.log("Redux State:", store.getState());
  const [selectedCar, setSelectedCar] = useState<any>(null);
  
  const [openFilters, setOenFilters] = useState(false);
  const [openModal,setOpenModal]=useState(false)
  const [selectedMakes, setSelectedMakes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedYear, setSelectedYear] = useState<string[]>([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState<string[]>([]);

  const handleChecked: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const { name } = event.target;
    if (selectedMakes.includes(name)) {
      setSelectedMakes(selectedMakes.filter((m) => m !== name));
    } else {
      setSelectedMakes([...selectedMakes, name]);
    }
  };

  const handleColorChecked: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    const { name } = event.target;
    if (selectedColors.includes(name)) {
      setSelectedColors(selectedColors.filter((color) => color !== name));
    } else {
      setSelectedColors([...selectedColors, name]);
    }
  };

  const handleYearChecked: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    const { name } = event.target;
    if (selectedYear.includes(name)) {
      setSelectedYear(selectedYear.filter((year) => year !== name));
    } else {
      setSelectedYear([...selectedYear, name]);
    }
  };

  // Price ranges
  const handlePriceRanges: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    const { name } = event.target;
    console.log(name);
    if (selectedPriceRanges.includes(name)) {
      setSelectedPriceRanges(
        selectedPriceRanges.filter((price) => price !== name)
      );
    } else {
      setSelectedPriceRanges([...selectedPriceRanges, name]);
    }
  };

  const parsePriceRange = (range: string) => {
    const [min, max] = range.split("-").map((price) => parseInt(price));
    return { min, max };
  };
  // Price ranges

  const handleClick = () => {
    setOenFilters(!openFilters);
  };
// Delete
  const handleDelete=(id:number)=>{
    dispatch(deleteCar(id))
    console.log(id);
  }
// Edit
const handleEdit=(car:any)=>{
  setOpenModal(!openModal)
  setSelectedCar(car)
}
const handleSave=(updatedCar:any)=>{
  dispatch(updateCar(updatedCar))
console.log(updatedCar,"up");
console.log(selectedCar);

}

  if (!cars) {
    return <div>Loading...</div>;
  }

  const filteredCars = cars.filter((car: any) => {
    const makeMatch =
      selectedMakes.length === 0 || selectedMakes.includes(car.make);
    const colorMatch =
      selectedColors.length === 0 || selectedColors.includes(car.color);
    const yearMatch =
      selectedYear.length === 0 || selectedYear.includes(car.year.toString());
    const priceMatch =
      selectedPriceRanges.length === 0 ||
      selectedPriceRanges.some((range) => {
        const { min, max } = parsePriceRange(range);
        return car.price >= min && car.price <= max;
      });

    return makeMatch && colorMatch && yearMatch && priceMatch;
  });

  console.log("cars", cars);
  console.log("filtcars", filteredCars);

  return (
    <>
      <section className="homeSection">
        <header className="header">
          <img
            src="https://wgl-dsites.net/genesisauto/wp-content/uploads/2024/05/logo-w1.png"
            alt=""
          />
          <div></div>
        </header>
        <main className="main">
          <div className="title">
            <Marquee />
          </div>
        </main>
      </section>

      <section className="cars">
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h2 style={{ padding: "1rem", color: "white" }}>
              The Most Searched Cars
            </h2>
            <div className="filterIcons" onClick={handleClick}>
              <p>Filters</p>
              <GiSettingsKnobs />
            </div>
          </div>
          <hr style={{ padding: "0 1rem 0 1rem", marginBottom: "1rem" }} />
          {openFilters && (
            <div className="filterPanel">
              <div className="flexsBox">
                <h4>Brands:</h4>
                <div className="brandBox">
                  <label>
                    Mercedes-Benz
                    <input
                      type="checkbox"
                      name="Mercedes-Benz"
                      id=""
                      onChange={handleChecked}
                    />
                  </label>
                  <label>
                    BMW
                    <input
                      type="checkbox"
                      name="BMW"
                      id=""
                      onChange={handleChecked}
                    />
                  </label>
                  <label>
                    Toyota
                    <input
                      type="checkbox"
                      name="Toyota"
                      id=""
                      onChange={handleChecked}
                    />
                  </label>
                  <label>
                    Honda
                    <input
                      type="checkbox"
                      name="Honda"
                      id=""
                      onChange={handleChecked}
                    />
                  </label>
                  <label>
                    Ford
                    <input
                      type="checkbox"
                      name="Ford"
                      id=""
                      onChange={handleChecked}
                    />
                  </label>
                  <label>
                    Chevrolet
                    <input
                      type="checkbox"
                      name="Chevrolet"
                      id=""
                      onChange={handleChecked}
                    />
                  </label>
                  <label>
                    Nissan
                    <input
                      type="checkbox"
                      name="Nissan"
                      id=""
                      onChange={handleChecked}
                    />
                  </label>
                  <label>
                    Tesla
                    <input
                      type="checkbox"
                      name="Tesla"
                      id=""
                      onChange={handleChecked}
                    />
                  </label>
                  <label>
                    Audi
                    <input
                      type="checkbox"
                      name="Audi"
                      id=""
                      onChange={handleChecked}
                    />
                  </label>
                  <label>
                    Subaru
                    <input
                      type="checkbox"
                      name="Subaru"
                      id=""
                      onChange={handleChecked}
                    />
                  </label>
                  <label>
                    Lexus
                    <input
                      type="checkbox"
                      name="Lexus"
                      id=""
                      onChange={handleChecked}
                    />
                  </label>
                  <label>
                    Jeep
                    <input
                      type="checkbox"
                      name="Jeep"
                      id=""
                      onChange={handleChecked}
                    />
                  </label>
                  <label>
                    Kia
                    <input
                      type="checkbox"
                      name="Kia"
                      id=""
                      onChange={handleChecked}
                    />
                  </label>
                </div>
                <hr style={{ marginTop: "5px", marginBottom: "5px" }} />

                <h4>Colors:</h4>
                <div className="colorBox">
                  <label>
                    Silver
                    <input
                      type="checkbox"
                      name="Silver"
                      id=""
                      onChange={handleColorChecked}
                    />
                  </label>
                  <label>
                    White
                    <input
                      type="checkbox"
                      name="White"
                      id=""
                      onChange={handleColorChecked}
                    />
                  </label>
                  <label>
                    Red
                    <input
                      type="checkbox"
                      name="Red"
                      id=""
                      onChange={handleColorChecked}
                    />
                  </label>
                  <label>
                    Blue
                    <input
                      type="checkbox"
                      name="Blue"
                      id=""
                      onChange={handleColorChecked}
                    />
                  </label>
                  <label>
                    Green
                    <input
                      type="checkbox"
                      name="Green"
                      id=""
                      onChange={handleColorChecked}
                    />
                  </label>
                  <label>
                    Black
                    <input
                      type="checkbox"
                      name="Black"
                      id=""
                      onChange={handleColorChecked}
                    />
                  </label>
                </div>
                <hr style={{ marginTop: "5px", marginBottom: "5px" }} />

                <h4>Year:</h4>
                <div className="yearBox">
                  <label>
                    2022
                    <input
                      type="checkbox"
                      name="2022"
                      id=""
                      onChange={handleYearChecked}
                    />
                  </label>
                  <label>
                    2021
                    <input
                      type="checkbox"
                      name="2021"
                      id=""
                      onChange={handleYearChecked}
                    />
                  </label>
                  <label>
                    2020
                    <input
                      type="checkbox"
                      name="2020"
                      id=""
                      onChange={handleYearChecked}
                    />
                  </label>
                  <label>
                    2019
                    <input
                      type="checkbox"
                      name="2019"
                      id=""
                      onChange={handleYearChecked}
                    />
                  </label>
                </div>
                <hr style={{ marginTop: "5px", marginBottom: "5px" }} />
                <h4>Price range:</h4>
                <div className="priceBox">
                  <label>
                    <input
                      type="checkbox"
                      name="20000-30000"
                      id=""
                      onChange={handlePriceRanges}
                    />
                    $20.000 - $30.000
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="30000-40000"
                      id=""
                      onChange={handlePriceRanges}
                    />
                    $30.000 - $40.000
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="40000-50000"
                      id=""
                      onChange={handlePriceRanges}
                    />
                    $40.000 - $50.000
                  </label>
                </div>
              </div>
            </div>
          )}

          <div className="carlist">
            {filteredCars?.map((car: any) => (
             
                <CarCards
                  key={car.id}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                  car={{
                    id: car.id,
                    make: car.make,
                    model: car.model,
                    year: car.year,
                    color: car.color,
                    mileage: car.mileage,
                    price: car.price,
                    fuelType: car.fuelType,
                    transmission: car.transmission,
                    engine: car.engine,
                    horsepower: car.horsepower,
                    features: car.features,
                    owners: car.owners,
                    image: car.image,
                  }}
                />
              
            ))}
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to={"addcar"}
            >
              <div className="addCar">
                <div className="cardIcon">+</div>Add car
              </div>
            </Link>
          </div>
       <div>
        {openModal && selectedCar && (
          <EditWindow 
          car={selectedCar}
          onSave={handleSave}
          />
        )}
       </div>
        </div>
      </section>
    </>
  );
};
export default Home;
