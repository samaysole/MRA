import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomerService from '../services/CustomerService';


// const ViewVideoComponent = (props) => {
//     let navigate = useNavigate();
    
// }


class ViewCustomerComponent extends Component {

        constructor (props) {
            super(props)
    
            this.state = {
    
                id: this.props.match.params.id,
                video: {}
    
        
            } 
        }
    
        componentDidMount () {  
    
            CustomerService.getCustomerByID(this.state.id).then(res => {
    
                this.setState({customer:res.data});
            }
                
                )
    
        }
    
        render() {
            return (
                <div>
                    
                  <div className='card col-md-6 offset-md-3'>  
                         <h3 className='text-center'> View Customer Details  </h3>
                        <div className='card-body'>
                            <div className='row'>
                                <label> Customer First Name:  </label>
                                <div> { this.state.customer.customerfirst_name } </div> 
                            </div>
    
                            <div className='row'>
                                <label> Customer Last Name:  </label>
                                <div> { this.state.customer.customerlast_name } </div> 
                            </div>
    
                            <div className='row'>
                                <label> Customer User Name:  </label>
                                <div> { this.state.customer.customeruser_name } </div> 
                            </div>
    
                            <div className='row'>
                                <label> Customer Phone Number:  </label>
                                <div> { this.state.customer.customerphone_number } </div> 
                            </div>
    
                            <div className='row'>
                                <label> Customer Address:  </label>
                                <div> { this.state.customer.customeraddress } </div> 
                            </div>
    
                            <div className='row'>
                                <label> Customer Email:  </label>
                                <div> { this.state.customer.customeremail } </div> 
                            </div>

                        </div>
    
                  </div>
    
                </div>
            );
        }
    }

export default ViewCustomerComponent;
