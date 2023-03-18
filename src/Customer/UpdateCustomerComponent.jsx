import React, { useState } from "react";
import CustomerService from "../services/CustomerService";
import { useLocation, useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";

// import Creat from '../css/Creat.css';
// import { Button } from 'react-bootstrap/Button';
// // import 'bootstrap/dist/css/bootstrap.min.css'

const UpdateCustomerComponent = (props) => {
  const location = useLocation();
  const { customer } = location.state;
  let navigate = useNavigate();
  const [customerFirstName, setCustomerFirstName] = useState(
    customer.firstName
  );
  const [customerLastName, setCustomerLastName] = useState(customer.lastName);
  const [customerUserName, setCustomerUserName] = useState(customer.userName);
  const [customerPhoneNumber, setCustomerPhoneNumber] = useState(
    customer.phoneNumber
  );
  const [customerAddress, setCustomerAddress] = useState(customer.address);
  const [customerEmail, setCustomerEmail] = useState(customer.email);

  const updateCustomer = (e) => {
    e.preventDefault();
    let c = {
      firstName: customerFirstName,
      lastName: customerLastName,
      userName: customerUserName,
      phoneNumber: customerPhoneNumber,
      address: customerAddress,
      email: customerEmail,
    };
    CustomerService.updateCustomer(c, customer.customer_id).then((res) => {
      navigate("/customers");
      Swal.fire({
        title: "Customer Updated successfully !",
        text: res.data.message,
        icon: "success",
        button: "Okay",
      });
    });
  };

  const cancel = (e) => {
    e.preventDefault();
    navigate("/customers");
  };

  return (
    <div>
      <div
        className="container"
        style={{ marginTop: "0%", marginBottom: "40px" }}
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
                marginBottom: "3%",
                padding: "15px",
                backgroundColor: "black",
                width: "100%",
                height: "70px",
                color: "white",
                fontSize: "26px",
              }}
            >
              {" "}
              Update Customer{" "}
            </h4>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label> Customer First Name </label>
                  <input
                    placeholder=" Customer First Name"
                    name=" customerFirstName"
                    className="form-control"
                    required
                    value={customerFirstName}
                    onChange={(e) => setCustomerFirstName(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label> Customer Last Name </label>
                  <input
                    placeholder="Customer Last Name"
                    name=" CustomerLastName"
                    className="form-control"
                    required
                    value={customerLastName}
                    onChange={(e) => setCustomerLastName(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label> Customer User Name </label>
                  <input
                    placeholder=" Custmer User Name"
                    name=" userName"
                    className="form-control"
                    required
                    value={customerUserName}
                    onChange={(e) => setCustomerUserName(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label> Customer Phone Number </label>
                  <input
                    placeholder="Customer Phone Number"
                    name="phoneNumber"
                    className="form-control"
                    type={"tel"}
                    required
                    value={customerPhoneNumber}
                    onChange={(e) => setCustomerPhoneNumber(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label> Customer Address </label>
                  <input
                    placeholder=" Customer Address"
                    name="address"
                    className="form-control"
                    required
                    value={customerAddress}
                    onChange={(e) => setCustomerAddress(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label> Customer Email </label>
                  <input
                    placeholder=" Customer Email"
                    name="address"
                    className="form-control"
                    required
                    value={customerEmail}
                    onChange={(e) => setCustomerEmail(e.target.value)}
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
                    <Link onClick={(e) => updateCustomer(e)}>
                      {" "}
                      Update Customer{" "}
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

export default UpdateCustomerComponent;
