import React, {Component} from 'react';
import ReservationForm from './ReservationForm';

export default class CarList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cars: this.props.carList,
            show: false,
            searchRegistrationNumber: '',
            searchColor: '',
            searchDate: '',
        };
        
    }

    handleChange = (field) => {
        return evt => this.setState({ [field]: evt.target.value.substr(0,20) });
    }

    //function which is called the first time the component loads
    componentDidMount() {
        this.setState({
            cars: this.props.carList,
        });
  
    }

    //Function which is called whenver the component is updated
    componentDidUpdate(prevProps) {

        if (this.props.carList !== prevProps.carList) {
            this.setState({
                cars: this.props.carList,
            });
        }
    }

    showModal = (index) => {
        this.setState({index: index});
        this.setState({ show: true });
    };

    hideModal = () => {
        this.setState({ show: false });
    };

    getReservationValue = (e, customer, date) => {
        e.preventDefault();
        if(!customer || !date){
            alert("Please check your customer name and reservation date");
        } else {
            this.props.updateList(this.state.index, customer, date);
            this.hideModal();
        }
    };
  
    
    render() {      
        let carsList = this.state.cars;
            carsList = carsList.filter((cars) => {
                return cars.reqistrationNumber.toLowerCase().indexOf(this.state.searchRegistrationNumber.toLowerCase()) !== -1;
            });
            carsList = carsList.filter((cars) => {
                return cars.color.toLowerCase().indexOf(this.state.searchColor.toLowerCase()) !== -1;
            });
            carsList = carsList.filter((cars) => {
                return cars.date.indexOf(this.state.searchDate) !== -1;
            });
        if (!this.state.cars)
            return (<p>Loading data</p>)
        return (
            <div className="mt-3 table-responsive-sm list-container">
                <h2 className="display-4">List of Car</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Registration Number</th>
                            <th>Color</th>
                            <th>Status</th>
                            <th>Customer</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <input className="form-control" type="text" value={this.state.searchRegistrationNumber}
                                    onChange={this.handleChange("searchRegistrationNumber")}
                                    placeholder="Search..."></input>
                            </td>
                            <td>
                                <input className="form-control" type="text" value={this.state.searchColor}
                                    onChange={this.handleChange("searchColor")}
                                    placeholder="Search..."></input>
                            </td>
                            <td>
                                <input className="form-control" type="date" value={this.state.searchDate}
                                    onChange={this.handleChange("searchDate")}
                                    placeholder="Search..."></input>
                            </td>
                            <td></td>
                            <td></td>
                        </tr>
                        {
                            carsList.map((car, index) => {
                            return <tr key= {index}>
                                    <td>{car.reqistrationNumber}</td>
                                    <td>{car.color}</td>
                                    <td>{car.status}</td>
                                    <td>{car.customer}</td>
                                    <td>
                                        <button type="button" 
                                            className={["btn btn-info", car.status].join(' ')} 
                                            onClick={() => this.showModal(index)}>
                                            Reserve
                                        </button>
                                    </td>
                                </tr>;
                            })
                        }
                    </tbody>
                </table>
                <ReservationForm show={this.state.show} handleClose={this.hideModal}
                    getReservationValue={this.getReservationValue}></ReservationForm>
            </div>
        )
        
  }

}