import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import VideoService from '../services/VideoService';


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
    
            VideoService.getVideoByID(this.state.id).then(res => {
    
                this.setState({video:res.data});
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
                                <label> Videos Language:  </label>
                                <div> { this.state.video.videoLanguage } </div> 
                            </div>
    
                            <div className='row'>
                                <label> Video Price:  </label>
                                <div> { this.state.video.videoprice } </div> 
                            </div>
    
                            <div className='row'>
                                <label> Video Title:  </label>
                                <div> { this.state.video.videotitle } </div> 
                            </div>
    
                            <div className='row'>
                                <label> Video Gener:  </label>
                                <div> { this.state.video.videogener } </div> 
                            </div>
    
                            <div className='row'>
                                <label> Video Year:  </label>
                                <div> { this.state.video.videoyear } </div> 
                            </div>
    
                        </div>
    
                  </div>
    
    
    
                </div>
            );
        }
    }

export default ViewVideoComponent;
