import axios from "axios";

export default class CarService{
    getCars(){
        return axios.get("http://localhost:8080/api/cars/allCars")

    }
    getCarsById(id){
        return axios.get("http://localhost:8080/api/cars/id?id="+id)

    }

}