import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import RentalService from '../services/RentalService';


// const ViewVideoComponent = (props) => {
//     let navigate = useNavigate();
    
// }


class ViewVideoComponent extends Component {

        constructor (props) {
            super(props)
    
            this.state = {
    
                id: this.props.match.params.id,
                video: {}
    
        
            }
        }
    
        componentDidMount () {  
    
            RentalService.getVideoByID(this.state.id).then(res => {
    
                this.setState({rental:res.data});
            }
                
                )
    
        }
    
        render() {
            return (
                <div>
                    
                  <div className='card col-md-6 offset-md-3'>  
                         <h3 className='text-center'> view Videos Details  </h3>
                        <div className='card-body'>
                            <div className='row'>
                                <label> Rental ID:  </label>
                                <div> { this.state.video.rentalId } </div> 
                            </div>
    
                            <div className='row'>
                                <label> Customer ID:  </label>
                                <div> { this.state.video.customerId } </div> 
                            </div>
    
                            <div className='row'>
                                <label> Movie ID:  </label>
                                <div> { this.state.video.movieId } </div> 
                            </div>
    
                            <div className='row'>
                                <label> Customer First Name:  </label>
                                <div> { this.state.video.customerFirstName } </div> 
                            </div>
    
                            <div className='row'>
                                <label> Customer Last Name:  </label>
                                <div> { this.state.video.customerLastName } </div> 
                            </div>

                            <div className='row'>
                                <label> Rental Expiry:  </label>
                                <div> { this.state.video.rentalExpiry} </div> 
                            </div>
    

                            <div className='row'>
                                <label> Is Returned:  </label>
                                <div> { this.state.video.isReturned } </div> 
                            </div>
    
                            </div>
    
                  </div>
    
    
    
                </div>
            );
        }
    }

export default ViewVideoComponent;
