import React, {Component} from 'react';

export default class CarList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cars: this.props.carList
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
                                </tr>;
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
        
  }

}