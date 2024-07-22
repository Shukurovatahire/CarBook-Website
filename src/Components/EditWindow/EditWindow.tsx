import { useState } from "react";
import "./EditWindow.scss";

interface IWindow {
    car: {
      make: string;
      model: string;
      engine: string;
      mileage: number;
      fuelType: string;
      transmission: string;
      price: number;
    };
    onSave: (updatedCar: IWindow["car"]) => void;
    onClose:()=>void
  }


const EditWindow:React.FC<IWindow> = ({car,onSave,onClose}) => {

  const [data, setData] = useState(car);

  const handleSubmit = () => {
    console.log(543);
    onSave(data)
    console.log("data",data);
  };

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {value,name}=event.target
    setData({
    ...data,
    [name]: value
    })
    console.log(value);
  };

  return (
    <>
      <div className="windowContainer">
        <h1 style={{marginRight:"26rem", borderBottom:"1px solid red"}}>Edit car</h1>
        <div className="windiwItem">
          <label className="labels">
            Make
            <input type="text" onChange={handleOnChange}  name="make"/>
          </label>
        </div>
        <div className="windiwItem">
          <label className="labels">
            Model
            <input type="text" onChange={handleOnChange}  name="model"/>
          </label>
        </div>
        <div className="windiwItem">
          <label className="labels">
            Engine
            <input type="text" onChange={handleOnChange} name="engine" />
          </label>
        </div>
        <div className="windiwItem">
          <label className="labels">
            Mileage
            <input type="text" onChange={handleOnChange} name="mileage" />
          </label>
        </div>
        <div className="windiwItem">
          <label className="labels">
            Fuel Type
            <input type="text" onChange={handleOnChange} name="fuelType"/>
          </label>
        </div>
        <div className="windiwItem">
          <label className="labels">
            Transmission
            <input type="text" onChange={handleOnChange} name="transmission" />
          </label>
        </div>
        <div className="windiwItem">
          <label className="labels">
            Price
            <input type="text" onChange={handleOnChange} name="price" />
          </label>
        </div>
        <button onClick={handleSubmit} className="sbmtBtn">Submit</button>
        <button className="closeModal" onClick={onClose}>X</button>
      </div>
    </>
  );
};

export default EditWindow;

 