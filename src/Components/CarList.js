import React, {Component} from 'react';
import ReservationForm from './ReservationForm';

export default class CarList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cars: this.props.carList,
            show: false
        };
        
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
        const carsList = this.state.cars;
        if (!this.state.cars)
            return (<p>Loading data</p>)
        return (
            <div className="list-container">
                <h2 className="display-4">List of Car</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <td>Registration Number</td>
                            <td>Color</td>
                            <td>Status</td>
                            <td>Customer</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
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