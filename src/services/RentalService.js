import axios from 'axios'; 

const Rental_API_BASE_URL = "http://localhost:8080/rentals/";

// const Return_API_BASE_URL = "http://localhost:8080/rentals/return/";

class RentalService {

    getRental() {
        return axios.get(Rental_API_BASE_URL)
    }

    createRental(rental) {
        return axios.post(Rental_API_BASE_URL, rental)
    }


    getRentalsById(rentalId){
        return axios.get(Rental_API_BASE_URL + '+' + rentalId);
    }
    
    updateRental(rental, rentalId) {
        return axios.put(Rental_API_BASE_URL  + rentalId, rental);
    }

    // returnRental(rental, rentalId){
    //     return axios.put(Return_API_BASE_URL + rentalId, rental);
    // }

    deleteRental(rental, rentalId) {
        return axios.delete(Rental_API_BASE_URL  + rentalId, rental)
    }
}


export default new RentalService(); 