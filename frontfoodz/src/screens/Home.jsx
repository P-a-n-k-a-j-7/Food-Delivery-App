import { React, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Carousel from "../components/Carousel";

const Home = () => {
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    response = await response.json();

    setFoodItem(response[0]);
    setFoodCat(response[1]);
    //console.log(response[0], response[1]);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Carousel />
      </div>
      <div className="container">
        {foodCat !== []
          ? foodCat.map((data) => (
              <div key={data._id} className="row mb-3">
                <div className="fs-3 m-3">{data.CategoryName}</div>
                <hr />
                {foodItem !== [] ? (
                  foodItem
                    .filter((item) => item.CategoryName === data.CategoryName)
                    .map((filterItems) => (
                      <div
                        key={filterItems._id}
                        className="col-12 col-md-6 col-lg-3"
                      >
                        <Card
                          foodName={filterItems.name}
                          options={filterItems.options[0]}
                          imageSrc={filterItems.img}
                        ></Card>
                      </div>
                    ))
                ) : (
                  <div>No such data found</div>
                )}
              </div>
            ))
          : ""}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
