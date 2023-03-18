import React, { Component } from 'react';
import pageNotFound from '../img/undraw_page_not_found_re_e9o6.svg';
import Nomatch from '../css/NoMatch.css'
import VideoService from '../services/VideoService';
import { Navigate } from 'react-router-dom';
import {Link, useNavigate} from "react-router-dom";


const NoMatch  = (props) => {

    const goBack = (e) => {
        e.preventDefault();

    VideoService.goBack = () => {
        Navigate('/')
    };
    }

        return (
            <div style={{backgroundColor: '#FFFF00'}} className='wrapper'>
      
      
                <h2 style={{paddingTop: '7%'}}> Opps! 404 Page Not Found </h2>

                <div>
     
                  <img src={pageNotFound}  alt="404"/>

            </div>

            <h4>  We can't find the page you looking for. </h4>
            {/* <button type='button' className='main-btn' onClick={(e) => goBack(e)} > GO Back </button> */}
          <button style={{margin: '50px'}}> <Link className='main-btn tt' to={'/'} onClick= {(e) => goBack(e)}>   Go Back </Link> </button> 

            </div>
        );

}

export default NoMatch;