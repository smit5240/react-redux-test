import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { allactioncreaters } from "../Store/All";
// import axios from "axios";

function Select() {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state);
  // console.log(cart.singlelength);
  const { removecart } = bindActionCreators(allactioncreaters, dispatch);

  return (
    <div>
      <div>
        <Link className="rdb " to="/">
          <i className="fa-solid fa-cart-shopping "></i>
          <p className="no">{cart.cartlength}</p>
        </Link>
      </div>
      <div className="top mb-5">
        <h1 className="d-flex justify-content-center">
          --- You Select Item ---
        </h1>
      </div>
      <div className="container">
        <div className="row set">
          <div className="col-7 my-3">
            {cart.cart.map((item, index) => {
              return (
                <div className="row   itemcenter my-3 bd " key={item._id}>
                  <div className="col-3 my-2">
                    <img className="smallimg" src={item.img} alt="" />
                  </div>
                  <div className="col-4 my-2">
                    <p className="m-0">Name : {item.name}</p>
                  </div>
                  <div className="col-3 my-2">
                    <p className="m-0">
                      price : <strong>$ {item.price}.00</strong>
                    </p>
                  </div>
                  <div className="col-2 d-flex ">
                    <span
                      className=""
                      onClick={() => {
                        removecart({ ...item, index });
                      }}
                    >
                      <i className="fa-solid fa-xmark text-danger pointer"></i>
                    </span>
                    <p className="setno">{item.cart}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="col-5 my-3 tpay ">
            <div className="paytitle bd">
              <h2 className="d-flex justify-content-center text-success itemcenter">
                {" "}
                Payment
              </h2>
              <p className="d-flex justify-content-center  mb-1 tItem ">
                Product : <span>{cart.cartlength}</span>
              </p>
              <p className="d-flex justify-content-center  mb-1 tItem">
                {" "}
                Total Item :{cart.items}
              </p>
              <p className="d-flex justify-content-center   tItem ">
                Total Amount : <span>{cart.subTotal}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Select;
