import "./AddCar.scss";
import { addNewcar } from "../../Redux/CarSlice/CarSlice";
import { useState } from "react";
import { useAppDispatch } from "../../Redux/store";
import { Link } from "react-router-dom";


const AddCar = () => {
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
    owners: string[];
    image: string;
  }
const dispatch=useAppDispatch()


  const [formData, setFormData] = useState<ICar>({
    id:Date.now(),
    make: "",
    model: "",
    year: 0,
    color: "",
    mileage: 0,
    price: 0,
    fuelType: "",
    transmission: "",
    engine: "",
    horsepower: 0,
    features: [],
    owners: [],
    image: "",
  });

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit =(e: any) => {
    e.preventDefault();
    dispatch(addNewcar(formData));
    console.log(123);
  };

  return (
    <>
      <section className="addSection">
        <header className="header">
          <img
            src="https://wgl-dsites.net/genesisauto/wp-content/uploads/2024/05/logo-w1.png"
            alt=""
          />
          <div></div>
        </header>
        <div className="form">
          <div className="formBox">
            <div className="container">
              <h4 className="h4">Add a car</h4>
              <div>
                <form className="formItems" onSubmit={handleSubmit}>
                  <label className="flexBox">
                    <p>Make</p>
                    <input
                      placeholder="Enter make"
                      type="text"
                      name="make"
                      onChange={handleOnChange}
                    />
                  </label>
                  <label className="flexBox">
                    <p>Model</p>
                    <input
                      placeholder="Enter model"
                      type="text"
                      name="model"
                      onChange={handleOnChange}
                    />
                  </label>
                  <label className="flexBox">
                    <p>Color</p>
                    <input
                      placeholder="Enter Color"
                      type="text"
                      name="color"
                      onChange={handleOnChange}
                    />
                  </label>
                  <label className="flexBox">
                    <p>Engine</p>
                    <input
                      placeholder="Enter engine"
                      type="text"
                      name="engine"
                      onChange={handleOnChange}
                    />
                  </label>
                  <label className="flexBox">
                    <p>Image</p>
                    <input
                      placeholder="Enter image"
                      type="text"
                      name="image"
                      onChange={handleOnChange}
                    />
                  </label>
                  <label className="flexBox">
                    <p>Millage</p>
                    <input
                      placeholder="Enter millage"
                      type="text"
                      name="mileage"
                      onChange={handleOnChange}
                    />
                  </label>
                  <label className="flexBox">
                    <p>Price</p>
                    <input
                      placeholder="Enter price"
                      type="number"
                      onChange={handleOnChange}
                      name="price"
                    />
                  </label>
                  <label className="flexBox">
                    <p>Year</p>
                    <input
                      placeholder="Enter yera"
                      type="number"
                      name="year"
                      onChange={handleOnChange}
                    />
                  </label>
                  <label className="flexBox">
                    <p>Fuel type</p>
                    <input
                      placeholder="Enter fuel type"
                      type="text"
                      name="fuelType"
                      onChange={handleOnChange}
                    />
                  </label>
                  <label className="flexBox">
                    <p>Transmission</p>
                    <input
                      placeholder="Enter transmission"
                      type="text"
                      name="transmission"
                      onChange={handleOnChange}
                    />
                  </label>
                  <Link to={'/'}>home</Link>
                  <button className="btn">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default AddCar;
