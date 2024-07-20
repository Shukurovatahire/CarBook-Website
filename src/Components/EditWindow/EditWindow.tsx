// import { useState } from "react";
// import "./EditWindow.scss";

// interface IWindow {
//     car: {
//       make: string;
//       model: string;
//       engine: string;
//       mileage: number;
//       fuelType: string;
//       transmission: string;
//       price: number;
//     };
//     onSave: (updatedCar: IWindow["car"]) => void;
//   }
  


// const EditWindow:React.FC<IWindow> = ({car,onSave}) => {

//   const [data, setData] = useState(car);

//   const handleSubmit = () => {
//     console.log(543);
//     onSave(data)
//     console.log("data",data);
//   };

//   const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const {value,name}=event.target
//     setData({
//     ...data,
//     [name]: value
//     })
//     console.log(value);
//   };

//   return (
//     <>
//       <div className="windowContainer">
//         <h4>Edit cars</h4>
//         <div className="windiwItem">
//           <label className="labels">
//             Make
//             <input type="text" onChange={handleOnChange}  name="make"/>
//           </label>
//         </div>
//         <div className="windiwItem">
//           <label className="labels">
//             Model
//             <input type="text" onChange={handleOnChange}  name="model"/>
//           </label>
//         </div>
//         <div className="windiwItem">
//           <label className="labels">
//             Engine
//             <input type="text" onChange={handleOnChange} name="engine" />
//           </label>
//         </div>
//         <div className="windiwItem">
//           <label className="labels">
//             Mileage
//             <input type="text" onChange={handleOnChange} name="mileage" />
//           </label>
//         </div>
//         <div className="windiwItem">
//           <label className="labels">
//             Fuel Type
//             <input type="text" onChange={handleOnChange} name="fuelType"/>
//           </label>
//         </div>
//         <div className="windiwItem">
//           <label className="labels">
//             Transmission
//             <input type="text" onChange={handleOnChange} name="transmission" />
//           </label>
//         </div>
//         <div className="windiwItem">
//           <label className="labels">
//             Price
//             <input type="text" onChange={handleOnChange} name="price" />
//           </label>
//         </div>
//         <button onClick={handleSubmit}>Submit</button>
//       </div>
//     </>
//   );
// };

// export default EditWindow;


import { useState, useEffect } from "react";  
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
}  

const EditWindow: React.FC<IWindow> = ({ car, onSave }) => {  
  const [data, setData] = useState(car);  

  // Prop değiştiğinde durumu güncelle  
  useEffect(() => {  
    setData(car);  
  }, [car]);  

  const handleSubmit = (event: React.FormEvent) => {  
    event.preventDefault();  
    onSave(data);  
    console.log("data", data);  
  };  

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {  
    const { value, name } = event.target;  

    setData((prevData) => ({  
      ...prevData,  
      [name]: name === "mileage" || name === "price" ? Number(value) : value,  
    }));  
  };  

  return (  
    <div className="windowContainer">  
      <h4>Edit Cars</h4>  
      <form onSubmit={handleSubmit}>  
        <div className="windowItem">  
          <label className="labels">  
            Make  
            <input type="text" value={data.make} onChange={handleOnChange} name="make" />  
          </label>  
        </div>  
        <div className="windowItem">  
          <label className="labels">  
            Model  
            <input type="text" value={data.model} onChange={handleOnChange} name="model" />  
          </label>  
        </div>  
        <div className="windowItem">  
          <label className="labels">  
            Engine  
            <input type="text" value={data.engine} onChange={handleOnChange} name="engine" />  
          </label>  
        </div>  
        <div className="windowItem">  
          <label className="labels">  
            Mileage  
            <input type="number" value={data.mileage} onChange={handleOnChange} name="mileage" />  
          </label>  
        </div>  
        <div className="windowItem">  
          <label className="labels">  
            Fuel Type  
            <input type="text" value={data.fuelType} onChange={handleOnChange} name="fuelType" />  
          </label>  
        </div>  
        <div className="windowItem">  
          <label className="labels">  
            Transmission  
            <input type="text" value={data.transmission} onChange={handleOnChange} name="transmission" />  
          </label>  
        </div>  
        <div className="windowItem">  
          <label className="labels">  
            Price  
            <input type="number" value={data.price} onChange={handleOnChange} name="price" />  
          </label>  
        </div>  
        <button type="submit">Submit</button>  
      </form>  
    </div>  
  );  
};  

export default EditWindow;