import React, { useState } from "react";
import CustomerService from "../services/CustomerService";
import { useNavigate, Link } from "react-router-dom";

import Creat from "../css/Creat.css";
// import { Button } from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Swal from "sweetalert2";
import { useEffect } from "react";

const CreatCustomerComponent = (props) => {
  let navigate = useNavigate();
  const [customerFirstName, setcustomerFirstName] = useState("");
  const [customerLastName, setCustomerLastName] = useState("");
  const [customerUserName, setCustomerUserName] = useState("");
  const [customerPhoneNumber, setCustomerPhoneNumber] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");

  const [validation, setValidation] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    phoneNumber: "",
    address: "",
    email: "",
  });

  const checkValidation = () => {
    let errors = validation;

    //first Name validation
    if (!customerFirstName.firstName) {
      errors.firstName = "";
    } else {
      errors.firstName = "First name is required";
    }
    //last Name validation
    if (!customerLastName.lastName) {
      errors.lastName = "Last name is required";
    } else {
      errors.lastName = "";
    }

    //user name validation
    if (!customerUserName.userName) {
      errors.userName = "User name is required";
    } else {
      errors.userName = "";
    }

    //Phone number validation
    if (!customerPhoneNumber.phoneNumber) {
      errors.phoneNumber = "Phone number is required";
    } else {
      errors.phoneNumber = "";
    }

    //customer addres validation
    if (!customerAddress.address) {
      errors.address = "Customer address is required";
    } else {
      errors.address = "";
    }

    const emailCond =
      "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/";
    if (!customerEmail.email) {
      errors.email = "Email is required";
    } else if (!customerEmail.email.match(emailCond)) {
      errors.email = "Please ingress a valid email address";
    } else {
      errors.email = "";
    }

    setValidation(errors);
  };

  useEffect(() => {
    checkValidation();
  }, [CreatCustomerComponent]);

  const saveCustomer = (e) => {
    e.preventDefault();
    let customer = {
      firstName: customerFirstName,
      lastName: customerLastName,
      userName: customerUserName,
      phoneNumber: customerPhoneNumber,
      address: customerAddress,
      email: customerEmail,
    };

    CustomerService.creatCustomer(customer).then((res) => {
      navigate("/customers");
      Swal.fire({
        title: "Customer add successfully !",
        text: res.data.message,
        icon: "success",
        button: "Okay",
        confirmButtonColor: "Green",
        
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
        style={{ marginTop: "0%", marginBottom: "2%" }}
      >
        <div className="row">
          <div
            className="card col-md-6 offset-md-3 offset-md-3"
            style={{ marginTop: "15%" }}
          >
            <h4
              className="text-center add-customer"
              style={{
                marginTop: "3%",
                marginBottom: "3%",
                padding: "15px",
                backgroundColor: "black",
                width: "100%",
                height: "70px",
                color: "white",
                fontSize: "30px",
              }}
            >
              {" "}
              Add Customer{" "}
            </h4>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label> Customer First Name </label>
                  <input
                    style={{ borderColor: "black" }}
                    placeholder=" Customer First Name"
                    type={"text"}
                    name="customerFirstName"
                    className="form-control"
                    value={customerFirstName}
                    required
                    onChange={(e) => setcustomerFirstName(e.target.value)}
                  />
                  {validation.firstName && <p>{validation.firstName}</p>}
                  {validation.firstName && console.log(validation)}
                </div>

                <div className="form-group">
                  <label> Customer Last Name </label>
                  <input
                    style={{ borderColor: "black" }}
                    placeholder="customer Last Name"
                    type={"text"}
                    name="CustomerLastName"
                    className="form-control"
                    value={customerLastName}
                    onChange={(e) => setCustomerLastName(e.target.value)}
                  />
                  {validation.lastName && <p>{validation.lastName}</p>}
                </div>

                <div className="form-group">
                  <label> Customer User Name </label>
                  <input
                    style={{ borderColor: "black" }}
                    placeholder=" Custmer User Name"
                    type={"text"}
                    name="userName"
                    className="form-control"
                    value={customerUserName}
                    onChange={(e) => setCustomerUserName(e.target.value)}
                  />
                  {validation.userName && <p>{validation.userName}</p>}
                </div>

                <div className="form-group">
                  <label> Customer Phone Number </label>
                  <input
                    style={{ borderColor: "black" }}
                    placeholder="Customer Phone Number"
                    name="phoneNumber"
                    className="form-control"
                    type={"tel"}
                    value={customerPhoneNumber}
                    onChange={(e) => setCustomerPhoneNumber(e.target.value)}
                  />
                  {validation.customerPhoneNumber && (
                    <p>{validation.customerPhoneNumber}</p>
                  )}
                </div>

                <div className="form-group">
                  <label> Customer Address </label>
                  <input
                    style={{ borderColor: "black" }}
                    placeholder=" Customer Address"
                    name="address"
                    type={"text"}
                    className="form-control"
                    value={customerAddress}
                    onChange={(e) => setCustomerAddress(e.target.value)}
                  />
                  {validation.customerAddress && (
                    <p>{validation.customerAddress}</p>
                  )}
                </div>

                <div className="form-group">
                  <label> Customer Email </label>
                  <input
                    style={{ borderColor: "black" }}
                    placeholder=" Customer Email"
                    name="email"
                    type={"email"}
                    className="form-control"
                    value={customerEmail}
                    onChange={(e) => setCustomerEmail(e.target.value)}
                  />
                  {validation.customerEmail && (
                    <p>{validation.customerEmail}</p>
                  )}
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
                    <Link onClick={(e) => saveCustomer(e)}>
                      {" "}
                      Creat Customer{" "}
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
                    <Link onClick={(e) => cancel(e)}> Cancel </Link>
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
// }

export default CreatCustomerComponent;
