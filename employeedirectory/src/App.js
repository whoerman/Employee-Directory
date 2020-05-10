import React, { Component } from 'react';
import Navbar from './components/layouts/Navbar';
import Search from './components/employees/Search';
import Employees from './components/employees/Employee';
import axios from 'axios';
import './App.css';
// import Spinner from './components/layouts/Spinner';

class App extends Component {
  state = {
    employees: [],
    loading: false,
    userinput: ""
  };

  handleUserInput = ({ target: {name, value}}) => {
      this.setState({[name]: value})
  }

   async componentDidMount() {
    this.setState({ loading: true});

    const res = await axios.get('https://api.github.com/users');

    console.log(res.data);
    
    this.setState({ employees: res.data, loading: false});
   
  };
  

  
    return (
      <div className="App">
        <Navbar />
            <h4>(Search for employee by GitHub Number, GitHub ID, or GitHub website)</h4>
          <Search userinput={this.state.userinput} handler={this.handleUserInput}/>
        <div className='container'>
          <Employees class="empCard" search={this.state.userinput} loading={this.state.loading} employees={this.state.employees}/>
        </div>
        </div>
    );
  }
}


export default App;
