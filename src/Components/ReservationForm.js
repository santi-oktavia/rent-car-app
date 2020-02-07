import React, {Component} from 'react';

export default class ReservationForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            customer: '',

        };
        
    }

    handleChange = (field) => {
        return evt => this.setState({ [field]: evt.target.value });
    }

    //function which is called the first time the component loads
    componentDidMount = () => {
        this.setState({
            show: this.props.show,
        });
    }

    //Function which is called whenver the component is updated
    componentDidUpdate = (prevProps) => {
        if (this.props.show !== prevProps.show) {
            this.setState({
                show: this.props.show,
            });
        }
    }

    render() {      
        const showHideClassname = this.state.show ? 'modal display-block' : 'modal display-none';
        // const handleToUpdate  =   this.props.getReservationValue;
        let customerName = this.state.customer,
            resDate = this.state.resDate;
        return (
            <div className={showHideClassname} tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                        <h5 className="modal-title">Reservation Form</h5>
                        <button type="button" className="close" 
                            data-dismiss="modal" aria-label="Close" onClick={this.props.handleClose}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="customer">Customer Name</label>
                                    <input 
                                        type="text" 
                                        value={this.state.custumer} 
                                        onChange={this.handleChange("customer")}
                                        className="form-control" 
                                        id="customer" 
                                        placeholder="Enter your name..." required>
                                    </input>
                                </div> 
                                <div className="form-group">
                                    <label htmlFor="resDate">Reservation Date</label>
                                    <input 
                                        type="date" 
                                        value={this.state.resDate} 
                                        onChange={this.handleChange("resDate")}
                                        className="form-control" 
                                        id="resDate" required>
                                    </input>
                                </div> 
                                <button onClick={(evt) => this.props.getReservationValue(evt, customerName, resDate)}>Reserve</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
        
  }

}