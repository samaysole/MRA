import React, { Component } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";

import Creat from "../css/Creat.css";
import { Button } from "react-bootstrap/Button";
import RentalService from "../services/RentalService";
import "bootstrap/dist/css/bootstrap.min.css";
import swal from "sweetalert2";
import { useState } from "react";
import VideoService from "../services/VideoService";
import { useEffect } from "react";

const ReturnRentalComponent = (props) => {
  const location = useLocation();
  const { rental } = location.state;
  let navigate = useNavigate();
  const [rentalId, setRentalId] = useState(rental.rentalId);
  const [customerId, setCustomerId] = useState(rental.customerId);
  const [movieId, setMovieId] = useState(rental.movieId);
  const [movieTitle, setMovieTitle] = useState(rental.movieTitle);
  const [totalCost, setTotalCost] = useState(rental.totalCost);
  const [rentalExpiry, setRentalExpiry] = useState(rental.rentalExpiry);
  const [isReturned, setIsReturned] = useState(rental.false);

  useEffect(() => {
    getVideo(movieId);
  }, [movieId]);

  const updateRental = (e) => {
    e.preventDefault();
    let r = {
      rentalId: rentalId,
      customerId: customerId,
      movieId: movieId,
      movieTitle: movieTitle,
      totalCost: parseFloat(totalCost),
      rentalExpiry: rentalExpiry,
      isReturned: isReturned,
    };

    RentalService.updateRental(r, rental.rental_Id).then((res) => {
      navigate("/rentals");
      swal.fire({
        title: "Movie Returnd successfully !",
        text: res.data.message,
        icon: "success",
        link: "Okay",
      });
    });
  };

  const getVideo = (e) => {
    VideoService.getVideosById(e)
      .then((res) => {
        setMovieTitle(res.data.title);
        setMovieId(res.data.movie_Id);
      })
      .catch(() => {
        setMovieId(e.target.value);
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
                marginTop: "3%",
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
                    disabled={true}
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
                    disabled={true}
                    onChange={(e) => setMovieId(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label> Movie Title </label>
                  <input
                    placeholder="Movie Title"
                    name="movieTitle"
                    className="form-control"
                    value={movieTitle}
                    onChange={(e) => setMovieTitle(e.target.value)}
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
                    disabled={true}
                    onChange={(e) => setRentalExpiry(e.target.value)}
                  />
                </div>
                <div>
                  <label> Is Returnd </label>

                  <select
                    class="form-select form-select-lg mb-3"
                    aria-label=".form-select-lg example"
                    placeholder=" Total Cost"
                    name=" is return"
                    value={isReturned}
                    onChange={(e) => setIsReturned(e.target.value)}
                  >
                    <option selected> Select Returned Status </option>
                    <option value="true"> Yes </option>
                    <option value="false"> No </option>
                  </select>
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
                      Return Rental{" "}
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
export default ReturnRentalComponent;
