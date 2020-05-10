import React from "react";
import Header from "./components/Header";
import Table from "./components/Table";
import FilterBox from "./components/FilterBox"
import axios from "axios";

class App extends React.Component {
    state = {
        employees: []
    }

    getEmployees(){
        axios.get("https://randomuser.me/api/?results=50&nat=us")
        .then(res => {
            console.log(res.data)
            const employees = res.data; 
            this.setState({employees: res.data.results});
            console.log(this.state.employees.length)
        })
        
    }

    componentDidMount(){
        this.getEmployees();
    }

    render(){
        return (
            <div>
                <div className="container-fluid">
                    <Header />
                </div>
                <div className= "container">
                    <FilterBox />
        {this.state.employees.length > 0 ? <Table employees = {this.state.employees}/> : <h1> Loading...</h1>}
                       </div>
                
            </div>
        )
    }
}


// function App(){
//     return (
//         <div>
//             <div className="container-fluid">
//                 <Header />
//             </div>
//             <div className= "container">
//                 <FilterBox />
//                 <Table />
//             </div>
            
//         </div>
//     )
// }

export default App;