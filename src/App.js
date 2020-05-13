import React from "react";
import Header from "./components/Header";
import Table from "./components/Table";
import FilterBox from "./components/FilterBox"
import axios from "axios";
import "./components/style.css"

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            search: null,
            employees: []
        }
    }

    getEmployees() {
        axios.get("https://randomuser.me/api/?results=50&nat=us")
            .then(res => {
                console.log(res.data)
                const employees = res.data;
                this.setState({ employees: res.data.results });
                console.log(this.state.employees.length)
            }).catch(err => console.log(err));


    }

    handleSubmit = (event) => {
        event.preventDefault()
        const data = this.state.search
        console.log(data)
    }

    handleInputChange = (event) => {
        event.preventDefault()
        // console.log(event.target.value)
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    componentDidMount() {
        this.getEmployees();
    }

    render() {

        return (
            <div>
                <div className="container-fluid headerStyle">
                    <Header />
                </div>
                <br></br>
                <br></br>
                <div className="container">
                    {/* <FilterBox /> */}
                    <div>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <input type="text" className="form-control" name="search" onChange={this.handleInputChange}>
                                </input>
                            </div>
                            <button className="btn btn-outline-secondary" type="submit"
                                id="button-addon2"><i className="fas fa-user-circle"></i>
                            </button>
                        </form>
                    </div>
                    <br></br>
                    {this.state.employees.length > 0 ? <Table employees={this.state.employees} /> : <h1> Loading...</h1>}
                </div>
            </div>
        )
    }

}


export default App;