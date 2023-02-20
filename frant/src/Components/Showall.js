import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Showall() {
  const [product, setProduct] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:4600/allproduct")
      .then((res) => {
        console.log(res.data.message);
        setProduct(res.data.message);
      })
      .catch((error) => {
        window.alert(error);
      });
  }, []);

  const Rclick = (id) => {
    try {
      console.log(id);
      axios
        .delete(`http://localhost:4600/deleteproduct/${id}`)
        .then((res) => {
          window.alert(res.data.message);
        })
        .catch((error) => {
          window.alert(error);
        });
    } catch (error) {
      console.log(error);
      window.alert(error);
    }
  };
  return (
    <div>
      <div>
        <h2 className="d-flex justify-content-center top mb-5">
          Handling Product side
        </h2>
      </div>
      <div className="container">
        <div className="row">
          {product &&
            product.map((item) => {
              return (
                <div className="col-sm-12 col-md-4 col-lg-3 d-flex justify-content-center bg  my-2 ">
                  <div className="">
                    <div key={item.id}>
                      <img className="mt-3 bigimg" src={item.img} alt="" />
                      <p className="mb-1 d-flex justify-content-center ">
                        Name :{item.name}
                      </p>
                      <p className="d-flex justify-content-center">
                        price : <strong> $ {item.price} </strong>
                      </p>
                      <div className=" d-flex justify-content-center">
                        <button
                          className="btn btn-danger mb-3"
                          onClick={() => {
                            Rclick(item._id);
                          }}
                        >
                          Delete Product
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
