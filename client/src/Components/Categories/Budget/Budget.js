import React, { Component } from 'react';
import './Budget.css';

class Budget extends Component {
    constructor(props) {
        super(props);

        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('Your Budget : ' + this.state.value);
        event.preventDefault();
    }
    // state = {
    //     value: {
    //         hall: '',
    //         car: '',
    //         dj: '',
    //         zafeh: '',
    //         flower: '',
    //         beautySalon: ''

    //     },
    //     totalBudget: ''
    // }

    // handleChange = this.handleChange.bind(this);
    // handleSubmit = this.handleSubmit.bind(this);
    // handleChange(event) {
    //     this.setState({
    //         value: {
    //             hall: event.target.value * 0.4,
    //             car: event.target.value * 0.3,
    //             dj: event.target.value * 0.03,
    //             zafeh: event.target.value * 0.2,
    //             flower: event.target.value * 0.06,
    //             beautySalon: event.target.value * 0.1
    //         }
    //     })
    // }

    // handleSubmit(event) {
    //     alert('BUDGET : ' + this.state.value);
    //     event.preventDefault();
    // }

    render() {

        return (
            <div>
                <h1>Helllo From Budget</h1>
                <br />
                <div className='bugetForm'>
                    <div className='totalBudget'>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group ">
                                <label htmlFor="formGroupExampleInput"><h2><strong> Total Budget</strong></h2></label>
                                <input
                                    type="text"
                                    value={this.state.value}
                                    onChange={this.handleChange}
                                    className="form-control"
                                    id="formGroupExampleInput"
                                    placeholder="$ 0.000" />
                            </div>
                        </form>
                    </div>

                    <br />
                    <div className='planDetails'>
                        <div className='formm'>
                            <form onSubmit={this.handleSubmit}>
                                <h1>Your Plan Details </h1>
                                <div className="form-group">
                                    <label htmlFor="formGroupExampleInput2">Hall Budget</label>
                                    <input
                                        type="text"
                                        value={"$ " + this.state.value * 0.4}
                                        onChange={this.handleChange}
                                        className="form-control"
                                        id="formGroupExampleInput2"
                                        placeholder="$ 0.000" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="formGroupExampleInput">Zafeh Budget </label>
                                    <input
                                        type="text"
                                        value={"$ " + this.state.value * 0.3}
                                        onChange={this.handleChange}
                                        className="form-control"
                                        id="formGroupExampleInput"
                                        placeholder="$ 0.000" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="formGroupExampleInput2">Car Budget</label>
                                    <input
                                        type="text"
                                        value={"$ " + this.state.value * 0.2}
                                        onChange={this.handleChange}
                                        className="form-control"
                                        id="formGroupExampleInput2"
                                        placeholder="$ 0.000" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="formGroupExampleInput2">Flower Budget</label>
                                    <input
                                        type="text"
                                        value={"$ " + this.state.value * 0.04}
                                        onChange={this.handleChange}
                                        className="form-control"
                                        id="formGroupExampleInput2"
                                        placeholder="$ 0.000" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="formGroupExampleInput2">DJ Budget</label>
                                    <input
                                        type="text"
                                        value={"$ " + this.state.value * 0.02}
                                        onChange={this.handleChange}
                                        className="form-control"
                                        id="formGroupExampleInput2"
                                        placeholder="$ 0.000" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="formGroupExampleInput2">Beauty Salon Budget</label>
                                    <input
                                        type="text"
                                        value={"$ " + this.state.value * 0.04}
                                        onChange={this.handleChange}
                                        className="form-control"
                                        id="formGroupExampleInput2"
                                        placeholder="$ 0.000" />
                                </div>
                                <button type="submit" className="btn btn-primary btn-lg btn-block" >See Your Option</button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Budget;