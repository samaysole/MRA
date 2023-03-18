
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";


function RegistrationView() {
    const [inputValues, setInputValue] = useState({
        firstName: "",
        lastName: "",
        userName: "",
        phoneNumber: "",
        address: "",
        email: "",
    });
  
    const [validation, setValidation] = useState({
        firstName: "",
        lastName: "",
        userName: "",
        phoneNumber: "",
        address: "",
        email: "",
    });
  
    //handle submit updates
    function handleChange(event) {
      const { name, value } = event.target;
      setInputValue({ ...inputValues, [name]: value });
    }
  
    const checkValidation = () => {
      let errors = validation;
  
      //first Name validation
      if (!inputValues.fName) {
        errors.fName = "First name is required";
      } else {
        errors.fName = "";
      }
      //last Name validation
      if (!inputValues.lastName) {
        errors.lastName = "Last name is required";
      } else {
        errors.lastName = "";
      }
     //first Name validation
     if (!inputValues.userName) {
        errors.userName = "First name is required";
     } else {
        errors.userName = "";
          }
          //last Name validation
     if (!inputValues.phoneNumber) {
            errors.phoneNumber = "Last name is required";
    } else {
            errors.phoneNumber = "";
          }
        
          if (!inputValues.address) {
            errors.address = "Last name is required";
    } else {
            errors.address = "";
          }
  
      // email validation
      const emailCond =
        "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/";
      if (!inputValues.email) {
        errors.email = "Email is required";
      } else if (!inputValues.email.match(emailCond)) {
        errors.email = "Please ingress a valid email address";
      } else {
        errors.email = "";
      }
  
  
      //matchPassword validation
      if (!inputValues.confirmPassword) {
        errors.confirmPassword = "Password confirmation is required";
      } else if (inputValues.confirmPassword !== inputValues.Password) {
        errors.confirmPassword = "Password does not match confirmation password";
      } else {
        errors.password = "";
      }
  
      setValidation(errors);
    };
  
    useEffect(() => {
      checkValidation();
    }, [inputValues]);
  
    const handleSubmit = (e) => {
      e.preventDefault();
    };
  
    document.getElementById('submit-button').addEventListener('click', function(){
        Swal.fire("TEst")
    })

    return (
      <div>
        <div className="sign-up-form">
          <form
            id="registrationForm"
            action="/"
            method="POST"
            onSubmit={handleSubmit}
          >
            <div className="form-control">
              <input
                placeholder="First Name"
                type="string"
                name="fName"
                id="fName"
                className="input-field"
                onChange={(e) => handleChange(e)}
                value={inputValues.fName}
              />
              {validation.fName && <p>{validation.fName}</p>}
              {validation.fName && console.log(validation)}
            </div>
            <div className="form-control">
              <input
                placeholder="Last Name"
                type="string"
                id="lName"
                name="lName"
                className="input-field"
                onChange={(e) => handleChange(e)}
                value={inputValues.lName}
              />
              {validation.lName && <p>{validation.lName}</p>}
            </div>
            <div className="form-control">
              <input
                placeholder="email"
                type="email"
                name="email"
                className="input-field"
                onChange={(e) => handleChange(e)}
                value={inputValues.email}
              />
            </div>
            {validation.email && <p>{validation.email}</p>}
  
            <div className="form-control">
              <input
                placeholder="password"
                type="password"
                name="password"
                className="input-field"
                onChange={(e) => handleChange(e)}
                value={inputValues.password}
                required
              />
              {validation.password && <p>{validation.password}</p>}
            </div>
            <div className="form-control">
              <input
                placeholder="confirm password"
                type="password"
                name="confirmPassword"
                className="input-field"
                onChange={(e) => handleChange(e)}
                value={inputValues.confirmPassword}
                required
              />
            
            </div>



            <button type="submit" id="submit-button">
              submit
            </button>
            <span className="form-input-login">
              Already have an account? Login <a href="#">here</a>
            </span>
          </form>
        </div>
      </div>
    );
  }
  
  export default RegistrationView;