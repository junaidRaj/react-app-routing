import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AllCards() {
  let navigate = useNavigate();
  const [data, setdata] = useState([]);

  let getData = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setdata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  
  return (
    <div className="row justify-content-center">
      {data.map((item, index) => {
        return (
          <div
            key={index}
            onClick={() =>
              navigate("card", {
                state: item,
              })
            }
            className="col-11 col-md-6 col-lg-3 mx-0 mb-4 mt-4"
          >
            <div className="card p-0 overflow-hidden h-100 shadow">
              <img
                src={item.image}
                className="card-img-top img-fluid w-100 h-100"
              />
              <h5 className="card_title text-center">{item.category}</h5>
              <p className="card_text text-center">{item.title}</p>
              <h5 className="card_title text-center">${item.price}</h5>
            </div>
          </div>
        );
      })}
    </div>
  );
}
