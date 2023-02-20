import { Link } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { allactioncreaters } from "../Store/All";
export default function Live() {
  const [product, setProduct] = useState();
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state);
  const { addcart } = bindActionCreators(allactioncreaters, dispatch);

  useEffect(() => {
    axios
      .get("http://localhost:4600/allproduct")
      .then((res) => {
        let temp = [];
        res.data.message.map((item) => {
          temp.push({ ...item, addToCart: 1 });
        });
        // console.log("res", temp);
        setProduct(temp);
      })
      .catch((error) => {
        window.alert(error);
      });
  }, []);

  const addClick = async (id, cart) => {
    // console.log(id);
    await axios
      .get(`http://localhost:4600/singleproduct/${id}`)
      .then((res) => {
        let data = { ...res.data.message, cart };
        addcart(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const decrease = (addToCart, index) => {
    let tempDecrease = [];
    product.map((item, i) => {
      if (item.addToCart > 1) {
        if (i === index) {
          tempDecrease.push({ ...item, addToCart: item.addToCart - 1 });
        } else {
          tempDecrease.push({ ...item });
        }
      } else {
        tempDecrease.push({ ...item, addToCart: (item.addToCart = 1) });
      }
    });
    setProduct(tempDecrease);
  };

  const increase = (addToCart, index) => {
    let tempIncrease = [];
    product.map((item, i) => {
      if (i === index) {
        tempIncrease.push({ ...item, addToCart: item.addToCart + 1 });
      } else {
        tempIncrease.push({ ...item });
      }
    });
    setProduct(tempIncrease);
  };

  return (
    <div>
      <div>
        <Link className="rdb" to="/select">
          <i className="fa-solid fa-cart-shopping "></i>
          <p className="no">{cart.cartlength}</p>
        </Link>
      </div>
      <div className="d-flex justify-content-center top  ">
        <h2>Wellcom to Online Shoping</h2>
      </div>
      <div className="container">
        <div className="row mt-5">
          {product &&
            product.map((item, index) => {
              return (
                <div
                  className="col-sm-12 col-md-6 col-lg-4 col-xl-3 d-flex justify-content-center  my-2 bg"
                  key={item._id}
                >
                  <div className="my-2">
                    <img className="mt-3 bigimg mb-2 " src={item.img} alt="" />
                    <p className="mb-1 d-flex justify-content-center ">
                      Name :{item.name}
                    </p>
                    <p className="d-flex justify-content-center">
                      price : <strong> $ {item.price} </strong>
                    </p>
                    <div className=" d-flex justify-content-center mb-3">
                      <div className="row pagination ">
                        <div
                          className="col-4 sideR"
                          onClick={() => decrease(item.addToCart, index)}
                        >
                          <span>-</span>
                        </div>
                        <div className="col-4">{item.addToCart}</div>
                        <div
                          className="col-4 sideL"
                          onClick={() => increase(item.addToCart, index)}
                        >
                          <span>+</span>
                        </div>
                      </div>
                    </div>
                    <div className=" d-flex justify-content-center mb-3">
                      <button
                        className="btn btn-success"
                        type=" rese"
                        onClick={() => {
                          addClick(item._id, item.addToCart);
                        }}
                      >
                        Add To cart
                      </button>
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
