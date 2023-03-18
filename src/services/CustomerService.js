import axios from 'axios'; 

const CUSTOMERS_API_BASE_URL = "http://localhost:8080/customers/";

class CustomerService {

    getCustomers() {
        return axios.get(CUSTOMERS_API_BASE_URL)
    }

    creatCustomer(customer) {
        return axios.post(CUSTOMERS_API_BASE_URL, customer)
    }


    getCustomersById(customerId){
        return axios.get(CUSTOMERS_API_BASE_URL + '+' + customerId);
    }
    
    updateCustomer(customer, customerId) {
        return axios.put(CUSTOMERS_API_BASE_URL + customerId, customer)
    }

    deleteCustomer(customer, customerId) {
        return axios.delete(CUSTOMERS_API_BASE_URL  + customerId, customer)
    }
}


export default new CustomerService(); 