import React, { useState } from "react";
import RentalService from "../services/RentalService";
import CustomerService from "../services/CustomerService";
import VideoService from "../services/VideoService";
import { useNavigate, Link } from "react-router-dom";
import Creat from "../css/Creat.css";
import { Button } from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import swal from "sweetalert2";
import { useEffect } from "react";

const CreatRentalComponent = (props) => {
  let navigate = useNavigate();
  const [customerId, setcustomerId] = useState("");
  const [movieId, setMovieId] = useState("");
  const [customerFirstName, setcustomerFirstName] = useState("");
  const [customerLastName, setcustomerLastName] = useState("");
  const [videosTitle, setVideoTitle] = useState("");
  const [totalCost, setTotalCost] = useState("");
  const [rentalExpiry, setRentalExpiry] = useState("");
  const [rentDate, setRentDate] = useState("");
  const [isReturned, setIsReturned] = useState(false);

  useEffect(() => {
    getCustomer(customerId);
  }, [customerId]);

  useEffect(() => {
    getVideo(movieId);
  }, [movieId]);

  const getCustomer = (e) => {
    CustomerService.getCustomersById(e)
      .then((res) => {
        setcustomerId(res.data.customer_id);
        setcustomerFirstName(res.data.firstName);
        setcustomerLastName(res.data.lastName);
      })
      .catch((res) => {
        console.log();
        if (res.response.status) {
          setcustomerId(null);
          setcustomerId(e.target.value);
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

  const saveRental = (e) => {
    e.preventDefault();
    let rental = {
      customerId: customerId,
      movieId: movieId,
      customerFirstName: customerFirstName,
      customerLastName: customerLastName,
      movieTitle: videosTitle,
      totalCost: parseFloat(totalCost),
      rentalExpiry: rentalExpiry,
      rentDate: rentDate,
      isReturned,
    };
    RentalService.createRental(rental)
      .then((res) => {
        navigate("/rentals");
        swal.fire({
          title: "Movie Rented successfully !",
          text: res.data.message,
          icon: "success",
          button: "Okay",
        });
      })
      .catch((res) => {
        console.log(rental);
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
              Add Rental{" "}
            </h4>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label> Customer ID </label>
                  <input
                    placeholder=" Customer ID"
                    name=" customerId"
                    className="form-control"
                    value={customerId}
                    onChange={(e) => setcustomerId(e.target.value)}
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
                    placeholder=" Customer First Name"
                    name="customerFirstName "
                    className="form-control"
                    value={customerFirstName}
                    onChange={(e) => setcustomerFirstName(e.target.value)}
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
                    onChange={(e) => setcustomerLastName(e.target.value)}
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
                  <label> Rental Date </label>
                  <input
                    placeholder=" Rental Date"
                    name="Rental Date"
                    className="form-control"
                    type={"date"}
                    value={rentDate}
                    onChange={(e) => setRentDate(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label> Rental Expiry </label>
                  <input
                    placeholder=" Rental Expiry"
                    name="Rental Expiry"
                    className="form-control"
                    type={"date"}
                    value={rentalExpiry}
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
                    disabled={true}
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
                    <Link onClick={(e) => saveRental(e)}> Rent Movie </Link>
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

export default CreatRentalComponent;
