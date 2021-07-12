// import { render } from 'react-dom';
import './App.css';
import Header from './components/Header'
import Login from './components/Login'
import Signup from './components/Signup'
import React from 'react'

import {Switch, Route, withRouter, Redirect} from 'react-router-dom'

class App extends React.Component {

  // const [user, setUser] = useState({
  //   id: 0, 
  //   username: "",
  //   pets: [],
  //   appointments:[],
  //   token: ""
  // });

  state = {
    id: 0, 
    username: "",
    pets: [],
    appointments: [],
    token: ""
  }

  componentDidMount() {
    if(localStorage.token){

      fetch("http://localhost:3000/me", {
        headers: {
          "authorization": localStorage.token
        }
      })
        .then(res => res.json())
        .then(this.handleResponse)

    }
  };

  // useEffect(() => {
  //   if(localStorage.token){
  //     fetch("http://localhost:3000/me", {
  //       headers: {
  //         "Authorization": localStorage.token
  //       }
  //     })
  //       .then(res => res.json())
  //       .then(handleResponse)
  //   }
  // })

  handleResponse = (resp) => {
    console.log(resp)
    if(resp.token){
      this.setState({
        username: resp.user.username,
        pets: resp.user.pets,
        token: resp.token
      })
      localStorage.token = resp.token

      // this.props.history.push("/profile")
    } else {
      alert("Messed up")
    }
  }

  handleRegisterSubmit = (userInfo) => {
    console.log("Register form has been submitted")

    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        username: userInfo.username,
        password: userInfo.password
      })
    })
      .then(res => res.json())
      .then(this.handleResponse)

  }

  addPet = (pet) => {
    this.setState({
      pets: [...this.state.pets, pet],
    })
  }

  render(){
    return (
      <div className="body">
        <Header />
        <Login />
        <Signup handleRegisterSubmit={this.handleRegisterSubmit}/>
      </div>
    );
  }
}

export default App;
