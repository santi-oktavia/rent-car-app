import React, {Component} from 'react';
import CarList from './CarList';

export default class CarForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reqNum: "",
            color: "",
            cars: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (field) => {
        return evt => this.setState({ [field]: evt.target.value });
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        let data = {};
        data.reqistrationNumber = this.state.reqNum;
        data.color = this.state.color;
        data.status = "free";
        data.customer = "";
        data.date = this.getDate();
        if(!this.state.reqNum || !this.state.color) {
            alert("Please Check your Registration Number or Color");
        } else {
            let isExist = this.checkExistingCar(this.state.reqNum);
            // console.log(isExist);
            if(isExist == true) {
                alert("Your Registration Number is already exist");
            } else {
                this.setState({ data, cars:[...this.state.cars, data]});
                this.setState({reqNum: '', color: ''});
            }
        }

    }

    checkExistingCar = (val) => {
        let cars = this.state.cars;
        let status;
        if(cars.length != 0){
            for(let i = 0; i < cars.length; i++) {
                
                if(cars[i].reqistrationNumber == val){
                    status = true;
                    break;
                } else {
                    status = false;
                }
            }
        }
        else {
            status= false;
        }
        return status;
    };


    getDate = () => {
        let today = new Date(),
            year = today.getFullYear(),
            month = today.getMonth() + 1,
            day = today.getDate();

        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;

        let date=day+'-'+month+'-'+year;

        return date;
    };

    updateList = (index,customer, date) => {
        console.log(index);
        const cars = Object.assign(this.state.cars); 
        cars[index].status = 'reserved'; 
        cars[index].customer = customer;
        cars[index].date = date;
        this.setState({ cars }); 
    };
  
    
    render() {        
        return (
            <div>
                <div className="form-container">
                    <h2>Form Car Registration</h2>
                    <form className="car-form" onSubmit={(e) => {this.handleSubmit(e)}}>
                        <div className="form-group">
                            <label htmlFor="registrationNumber">Registration Number</label>
                            <input 
                                type="text" 
                                value={this.state.reqNum} 
                                onChange={this.handleChange("reqNum")}
                                className="form-control" 
                                id="registrationNumber" 
                                placeholder="Registration Number..." required>
                            </input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="color">Color</label>
                            <input 
                                type="text" 
                                value={this.state.color} 
                                onChange={this.handleChange("color")}
                                className="form-control" 
                                id="color" 
                                placeholder="Color...">
                            </input>
                        </div>
                        <button type="submit" className="btn btn-primary">Create</button>
                    </form>
                </div>
                <CarList carList={this.state.cars} updateList={this.updateList}/>
            </div>
            
        )
        
  }

}
