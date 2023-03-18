import React, { useState } from "react";
import RentalService from "../services/RentalService";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import CustomerService from "../services/CustomerService";
import VideoService from "../services/VideoService";

import Creat from "../css/Creat.css";
import { Button } from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import swal from "sweetalert";

const UpdateRentalComponent = (props) => {
  const location = useLocation();
  const { rental } = location.state;
  let navigate = useNavigate();
  const [rentalId, setRentalId] = useState(rental.rentalId);
  const [customerId, setCustomerId] = useState(rental.customerId);
  const [videosTitle, setVideoTitle] = useState("");
  const [movieId, setMovieId] = useState(rental.movieId);
  const [customerFirstName, setCustomerFirstName] = useState(
    rental.customerFirstName
  );
  const [customerLastName, setCustomerLastName] = useState(
    rental.customerLastName
  );
  const [totalCost, setTotalCost] = useState(rental.totalCost);
  const [rentalExpiry, setRentalExpiry] = useState(rental.rentalExpiry);

  useEffect(() => {
    getCustomer(customerId);
  }, [customerId]);

  useEffect(() => {
    getVideo(movieId);
  }, [movieId]);

  const getCustomer = (e) => {
    CustomerService.getCustomersById(e)
      .then((res) => {
        setCustomerId(res.data.customer_id);
        setCustomerFirstName(res.data.firstName);
        setCustomerLastName(res.data.lastName);
      })
      .catch((res) => {
        console.log();
        if (res.response.status) {
          setCustomerId(null);
          setCustomerId(e.target.value);
        }
      });
  };
  const getVideo = (e) => {
    VideoService.getVideosById(e)
      .then((res) => {
        setVideoTitle(res.data.title);
        setMovieId(res.data.movie_Id);
      })
      .catch(() => {
        setMovieId(e.target.value);
      });
  };

  const updateRental = (e) => {
    e.preventDefault();
    let r = {
      rentalId: rentalId,
      customerId: customerId,
      movieId: movieId,
      customerFirstName: customerFirstName,
      customerLastName: customerLastName,
      movieTitle: videosTitle,
      totalCost: parseFloat(totalCost),
      rentalExpiry: rentalExpiry,
    };
    RentalService.updateRental(r, rental.rentalId).then((res) => {
      navigate("/rentals");
      swal.fire({
        title: "Rente Updated successfully !",
        text: res.data.message,
        icon: "success",
        button: "Okay",
      });
    });
  };

  const cancel = (e) => {
    e.preventDefault();
    navigate("/rentals");
  };

  return (
    <div>
      <div
        className="container"
        style={{ marginTop: "0%", marginBottom: "2%" }}
      >
        <div className="row">
          <div
            className="card col-md-6 offset-md-3 offset-md-3"
            style={{ marginTop: "15%" }}
          >
            <h4
              className="text-center"
              style={{
                padding: "15px",
                backgroundColor: "black",
                width: "100%",
                height: "70px",
                color: "white",
                fontSize: "26px",
              }}
            >
              {" "}
              Update Rental{" "}
            </h4>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label> Rental ID </label>
                  <input
                    placeholder=" Rental ID"
                    name=" rentalId"
                    className="form-control"
                    value={rentalId}
                    onChange={(e) => setRentalId(e.target.value)}
                    disabled={true}
                  />
                </div>

                <div className="form-group">
                  <label> Customer ID </label>
                  <input
                    placeholder=" Customer ID"
                    name=" customerId"
                    className="form-control"
                    value={customerId}
                    onChange={(e) => setCustomerId(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label> Movie ID </label>
                  <input
                    placeholder=" Movie ID "
                    name="MovieId"
                    className="form-control"
                    value={movieId}
                    onChange={(e) => setMovieId(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label> customer First Name </label>
                  <input
                    placeholder=" Customer Last Name"
                    name="customerFirstName "
                    className="form-control"
                    value={customerFirstName}
                    onChange={(e) => setCustomerFirstName(e.target.value)}
                    disabled={true}
                  />
                </div>

                <div className="form-group">
                  <label> Customer Last Name </label>
                  <input
                    placeholder=" Customer Last Name "
                    name="CustomerLastName"
                    className="form-control"
                    value={customerLastName}
                    onChange={(e) => setCustomerLastName(e.target.value)}
                    disabled={true}
                  />
                </div>

                <div className="form-group">
                  <label> Movie Title </label>
                  <input
                    placeholder="Movie Title"
                    name="movieTitle"
                    className="form-control"
                    value={videosTitle}
                    onChange={(e) => setVideoTitle(e.target.value)}
                    disabled={true}
                  />
                </div>

                <div className="form-group">
                  <label> Total Cost </label>
                  <input
                    placeholder=" Total Cost"
                    name=" totalCost"
                    className="form-control"
                    type={"number"}
                    value={totalCost}
                    onChange={(e) => setTotalCost(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label> Rental Expiry </label>
                  <input
                    placeholder=" Rental Expiry"
                    name="Rental Expiry"
                    type={"date"}
                    className="form-control"
                    value={rentalExpiry}
                    onChange={(e) => setRentalExpiry(e.target.value)}
                  />
                </div>
                <div
                  className="text-center"
                  style={{
                    marginTop: "40px",
                    marginBottom: "40px",
                    margin: "10px",
                    marginLeft: "0%",
                  }}
                >
                  <div
                    style={{
                      textAlign: "center",
                      padding: "20px",
                      margin: "20px",
                      height: "70px",
                      width: "100%",
                      borderRadius: "10px",
                      backgroundColor: "black",
                    }}
                  >
                    <Link onClick={(e) => updateRental(e)}>
                      {" "}
                      Update Rental{" "}
                    </Link>
                  </div>

                  <div
                    className="cancel"
                    style={{
                      textAlign: "center",
                      margin: "20px",
                      padding: "20px",
                      height: "70px",
                      width: "100%",
                      borderRadius: "10px",
                      backgroundColor: "red",
                    }}
                  >
                    <Link onClick={(e) => cancel(e)}>Cancel </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateRentalComponent;
