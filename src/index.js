
import {
    BrowserRouter,
    Routes,
    Route, 
} from "react-router-dom";


/* Customer */

import ListCustomerComponent from './Customer/ListCustomerComponent';
import UpdateCustomerComponent from "./Customer/UpdateCustomerComponent";
import ViewCustomerComponent from "./Customer/ViewCustomerComponent";
import CreatCustomerComponent from "./Customer/CreatCustomerComponent"


/* Movies */

import { createRoot } from 'react-dom/client';
import ListVideosComponent from "./movies/ListVideosComponent";
import ViewVideoComponent from "./movies/ViewVideoComponent";
import UpdateVideoComponent from "./movies/UpdateVideoComponent";
import CreatVideoComponents from "./movies/CreatVideoComponent";
import Navbar from "./components/Navbar";
import NoMatch from "./movies/NoMatch";
import Login from "./Login"


import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Detail from './pages/detail/Detail';
import reportWebVitals from "./reportWebVitals";
import Footer from "./components/footer/Footer";


/* Rental */

import ListRentalComponent from "./Rental/ListRentalComponent";
import CreatRentalComponent from "./Rental/CreatRentalComponent";
import UpdateRentalComponent from "./Rental/UpdateRentalComponent";
import ViewRentalComponent from "./Rental/ViewRentalComponent";
import ReturnRentalComponent from "./Rental/ReturnRentalComponent";
import Profile from "./Profile";
import Tabs from "./Tabs";
import Signin from "./Signin"
import DashBord from "./DashBord";
import RegistrationView from "./RegistrationView"
import Header from "./components/header/Header";
import Tab from "./tab";

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(

  

    <BrowserRouter>
 
        

        <div>
            <Header />
            
           {/* <Navbar /> */}

     
          
                <Routes>

             
            
                            {/* Movies Routing */}
                            
                    <Route path = "/movies" exact element={<ListVideosComponent />} />
                    <Route path = "/add-video/" element={<CreatVideoComponents />} />
                    <Route path = "/view-video/:id" element={<ViewVideoComponent />}/>
                    <Route path = "/update-video/:id" element={<UpdateVideoComponent />}/>
                   

                            {/* Customer Routing */}

                    <Route path = "/customers" element={<ListCustomerComponent />} />
                    <Route path = "/add-customer/" element={<CreatCustomerComponent />} />
                    <Route path = "/update-customer/:id" element={<UpdateCustomerComponent />} />
                    <Route path = "/view-customer/:id" element={<ViewCustomerComponent/>}/>
                   
                            {/* rental Routing */}

                    <Route path = "/rentals" element={<ListRentalComponent />} /> 
                    <Route path = "/add-rental/" element={<CreatRentalComponent />} />
                    <Route path = "/update-rental/:id" element={<UpdateRentalComponent />} />
                    <Route path = "/view-rental/:id" element={<ViewRentalComponent/>}/>
                    <Route path = "/return-rental/:id" element={<ReturnRentalComponent/>} />
                        
                        
                    <Route path='*' exact element={<NoMatch />}/>
                    <Route path='/:category/search/:keyword'element={<Catalog />} />
                    <Route path='/:category/:id' element={<Detail />} />
                    <Route path='/:category/' element={<Catalog />} />
                    <Route path='/' exact  element={<Home />}  />
                    <Route path="/profile" element={<Profile />} /> 
                    <Route path="/tabs" element={<Tabs />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signin" element={<Signin /> } />
                    <Route path="/dashbord" element={<DashBord/> } />
                    <Route path="RegistrationView" element={<RegistrationView />} />
                    <Route path="/tab" element={<Tab />} />


                
                </Routes>
             
            </div>
            <Footer/>

    </BrowserRouter>



);

  


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
