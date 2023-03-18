import React, { Component } from "react";
import CustomerService from "../services/CustomerService";
import { Link } from "react-router-dom";
// import ListCustomerComponent from '../css/ListVideoComponent.css';
import Swal from "sweetalert2";

import { PersonPlusFill } from "react-bootstrap-icons";


const test = {
  margin: "10px 0px",
  width: "150px",
  height: "50px",
  textAlign: "center",
  padding: "10px",
  color: "white",
  backgroundColor: "#FFFF00",
};


class ListCustomerComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      customers: [],
    };

    this.addCustomer = this.addCustomer.bind(this);
    this.editCustomer = this.editCustomer.bind(this);
    this.deleteCustomer = this.deleteCustomer.bind(this);
  }

  deleteCustomer(id) {
    //rest api
    CustomerService.deleteCustomer(id).then((res) => {
      this.setState({
        customers: this.state.customers.filter(
          (customer) => customer.customer_Id !== id
        ),
      });
      // CustomerService.getCustomers().then((res) => {
      //   this.setState({ customers: res.data });
      // });
    });
  }

  viewCustomers(id) {
    this.props.history.push(`/view-customers/${id}`);
  }

  editCustomer(id) {
    this.props.history.push(`/update-customer/${id}`);
  }

  componentDidMount() {
    CustomerService.getCustomers().then((res) => {
      this.setState({ customers: res.data });
    });
  }

  componentDidUpdate() {
    CustomerService.getCustomers().then((res) => {
      this.setState({ customers: res.data });
    });
  }

  addCustomer() {
    this.props.history.push(`/add-customer`);
  }

  deleteCustomer = (e, cust, id) => {
    e.preventDefault();
    CustomerService.deleteCustomer(cust, id);
    Swal.fire({
      title: "Customer Deleted successfully !",
      text: e.data.message,
      icon: "success",
      button: "Okay",
    });
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
                style={{textDecoration: "none", letterSpacing: '3px' }}
                to={"/add-customer"}
              >
                {" "}
                <PersonPlusFill />  Add Customers{" "}
              </Link>{" "}
            </button>
          </div>

          <div className="container" style={{ marginBottom: "3%" }}>
            <table className="table table-striped table-bordered">
              <thead>
                <tr style={{ backgroundColor: "black", color: "white" }}>
                  <th> Customer ID </th>
                  <th> Customer First Name </th>
                  <th> Customer Last Name </th>
                  <th> Customer User Name </th>
                  <th> Customer Phone Number </th>
                  <th> Customer Address </th>
                  <th> Customer Email </th>
                  <th> Action </th>
                </tr>
              </thead>

              <tbody>
                {[...this.state.customers]
                  .sort((a, b) => a.customer_Id - b.customer_Id)
                  .map((customer, i) => (
                    <tr key={i}>
                      <td> {customer.customer_id}</td>
                      <td> {customer.firstName} </td>
                      <td> {customer.lastName} </td>
                      <td> {customer.userName} </td>
                      <td> {customer.phoneNumber} </td>
                      <td> {customer.address} </td>
                      <td> {customer.email} </td>

                      <td>
                        <div>
                          {/* <button onClick={() => this.editCustomer(Customer.id)} className= "btn btn-info" style={{marginLeft: "30px"}}> Update </button> */}
                          <div 
                          className="mov-update"
                          >
                            {" "}
                            <Link
                              className="update"
                              to={"/update-customer/" + customer.customer_id}
                              state={{ customer: customer }}
                            >
                              {" "}
                              Update{" "}
                            </Link>{" "}
                          </div>

                          <button
                          className="delete"
                            onClick={(e) =>
                              this.deleteCustomer(
                                e,
                                customer,
                                customer.customer_id
                              )
                            }
                          >
                            {" "}
                            Delete{" "}
                          </button>
                          {/* <button style={{margin:'10px', borderRadius: '10px'}}> <Link className='delete' to={'deleteCustomers'}>  Delete </Link> </button> */}

                          {/* <button style={{marginLeft: "30px"}} onClick={ () => this.viewCustomers(Customer.id)} className="btn btn-info"> View </button> */}
                          {/* <button> <Link className='view' to={'viewCustomers'}>  View </Link> </button> */}
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

export default ListCustomerComponent;
