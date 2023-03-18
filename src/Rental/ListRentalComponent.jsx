import React, { Component } from "react";
import RentalService from "../services/RentalService";
import VideosComponent from "../css/VideoComponent.css";
import { Link } from "react-router-dom";
import { Border, Upload } from "react-bootstrap-icons";
import { Trash } from "react-bootstrap-icons";

import { BookmarkPlusFill } from "react-bootstrap-icons";

class ListRentalComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rentals: [],
    };

    this.addRental = this.addRental.bind(this);
    this.returnRental = this.returnRental.bind(this);
    this.editRental = this.editRental.bind(this);
    this.deleteRental = this.deleteRental.bind(this);
  }

  deleteRental(id) {
    //rest api

    RentalService.deleteRental(id).then((res) => {
      this.setState({
        rentals: this.state.rentals.filter((rental) => rental.rental_Id !== id),
      });
    });
    // RentalService.getRental().then((res) => {
    //   this.setState({ rentals: res.data });
    // });
  }

  viewRentals(id) {
    this.props.history.push(`/view-rentals/${id}`);
  }

  returnRental(id) {
    this.props.history.push(`/return-rental/`);
  }

  editRental(id) {
    this.props.history.push(`/update-rental/${id}`);
  }

  componentDidMount() {
    RentalService.getRental().then((res) => {
      this.setState({ rentals: res.data });

    });
  }

  componentDidUpdate() {
    RentalService.getRental().then((res) => {
      this.setState({ rentals: res.data });
    });
  }

  addRental() {
    this.props.history.push(`/add-rental`);
  }

  deleteRental = (e, ren, id) => {
    e.preventDefault();
    RentalService.deleteRental(ren, id);
  };

 

  render() {
    return (
      <div style={{ padding: "0 5%" }}>
        <div className="row">
          <div className="col-12">
            <button className="btn-mov"
                
            >
              {" "}
              <Link
                style={{ textDecoration: "none", letterSpacing: "4px",cursor: "pointer",}}
                to={"/add-rental"}
              >
                {" "}
                <BookmarkPlusFill /> Rent Movie{" "}
              </Link>{" "}
            </button>
          </div>
          <div className="col-12" style={{ marginBottom: "5%" }}>
            <table className="table table-striped table-bordered">
              <thead>
                <tr style={{ backgroundColor: "black", color: "white" }}>
                  <th> Rental ID </th>
                  <th> Customer ID </th>
                  <th> Movie ID </th>
                  <th> Movie Title </th>
                  <th> Customer First Name </th>
                  <th> Customer Last Name </th>
                  <th> Total Cost </th>
                  <th> Rent Date </th>
                  <th> Rental Expiry </th>
                  <th> Is Returned </th>
                  <th> Status </th>
                </tr>
              </thead>

              <tbody>
                {[...this.state.rentals]
                  .sort((a, b) => a.rental_Id - b.rental_Id)
                  .map((rental, i) => (
                    <tr key={i}>
                      <td> {rental.rentalId} </td>
                      <td> {rental.customerId} </td>
                      <td> {rental.movieId} </td>
                      <td> {rental.movieTitle} </td>
                      <td> {rental.customerFirstName} </td>
                      <td> {rental.customerLastName} </td>
                      <td> {rental.totalCost} </td>
                      <td> {rental.rentDate} </td>
                      <td> {rental.rentalExpiry} </td>
                      {/* <td> {rental.isReturned}</td> */}
                      <td> {rental.isReturned ? 'Yes' : 'No'} </td>                     

                      <td>
                        <div className="function-buttons">
                          {/* <button onClick={() => this.editRental(video.id)} className= "btn btn-info" style={{marginLeft: "30px"}}> Update </button> */}
                          <div
                            className="mov-update"
                          >
                            <Link
                              className="update"
                              to={"/update-rental/" + rental.rentalId}
                              state={{ rental: rental }}
                            >
                              {" "}
                              <Upload /> Update{" "}
                            </Link>{" "}
                          </div>

                          <button
                            className="delete"
                            onClick={(e) =>
                              this.deleteRental(e, rental, rental.rentalId)
                            }
                          >
                            {" "}
                            <Trash /> Delete{" "}
                          </button>

                          <div className="mov-update"
                
                          >
                            <Link
                              className="update"
                              to={"/return-rental/" + rental.rentalId}
                              state={{ rental: rental }}
                            >
                              {" "}
                              <Upload /> Return{" "}
                            </Link>{" "}
                          </div>

                          {/* <button style={{margin:'10px', borderRadius: '10px'}}> <Link className='delete' to={'deleteRental'}>  Delete </Link> </button> */}

                          {/* <button style={{marginLeft: "30px"}} onClick={ () => this.viewVideos(video.id)} className="btn btn-info"> View </button> */}
                          {/* <button> <Link className='view' to={'viewRental'}>  View </Link> </button> */}
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default ListRentalComponent;
