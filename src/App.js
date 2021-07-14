// import { render } from 'react-dom';
import './App.css';
import Header from './components/Header'
import Login from './components/Login'
import Signup from './components/Signup'
import HouseholdContainer from './components/HouseholdContainer'
import AppointmentScheduleContainer from './components/AppointmentScheduleContainer'
import AppointmentForm from './components/NewAppointmentForm'
import NewPetForm from './components/NewPetForm'
import React from 'react'
import {Switch, Route, withRouter, Redirect} from 'react-router-dom'

// https://groomsmart.herokuapp.com/


// function App() {
//   return (
//     <div className="body">
//       <Header />
//       {/* <Login />
//       <Signup /> */}
//       <HouseholdContainer />
//       {/* <NewPetForm /> */}
//       {/* <AppointmentScheduleContainer /> */}
//       {/* <NewAppointmentForm /> */}
//     </div>
//   );
// }

class App extends React.Component {


  state = {
    id: 0,
    username: "",
    pets: [],
    appointments: [],
    token: "",
  }

  logOut = () => {
    console.log("this was pressed")
    this.setState({
      username: "",
      pets: [],
      appointments: [],
      token: "",
      id: 0
    })
    localStorage.clear()
    this.props.history.push("/login")

  }


  componentDidMount(){
    if(localStorage.token){

      fetch("http://127.0.0.1:3000/me", {
        headers: {
          "authorization": localStorage.token
        }
      })
        .then(res => res.json())
        .then(this.handleResponse)

    }
  }

  handleResponse = (resp) => {
    console.log("this is coming from handleResponse: ", resp)
    if(resp.token){
      this.setState({
        id: resp.user.id,
        username: resp.user.username,
        pets: resp.user.pets,
        appointments: resp.user.appointments,
        token: resp.token
      })
      localStorage.token = resp.token

      this.props.history.push("/household")
    } else {
      alert(resp.errors)
    }
  }

  renderForms = () =>{
    return <>
      <Login handleLoginSubmit={this.handleLoginSubmit}/>
      <Signup handleRegisterSubmit={this.handleRegisterSubmit}/>
    </>
  }

  handleRegisterSubmit = (userInfo) => {
    console.log("Register form has been submitted")

    fetch("http://127.0.0.1:3000/users", {
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

  handleLoginSubmit = (userInfo) => {
    console.log("Login form has been submitted")

    fetch("http://127.0.0.1:3000/login", {
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


  renderHousehold = (routerProps) => {
    if(this.state.token){
      return <HouseholdContainer 
        user = {this.state}
        logOut={this.logOut}
        deletePet={this.deletePet}
      />
    } else {
      return <Redirect to="/login" />
    }
  }

  deletePet = (deletedPet) =>{
    let petCopy = [...this.state.pets]
    let newPetsArr = petCopy.filter(pet => pet.id !== deletedPet.id)
    this.setState({
      pets: newPetsArr
    })
  }

  renderNewPetForm = (routerProps) =>{
    if(this.state.token){
      return <NewPetForm
        user = {this.state}
        addPet = {this.addPet}
      />
    } else {
      return <Redirect to="/login" />
    }
  }

  addPet = (pet) => {
    this.setState({
      pets: [...this.state.pets, pet]
    })
  }

  renderNewAppointmentForm = (routerProps) =>{
    if(this.state.token){
      return <AppointmentForm
        user = {this.state}

      />
    } else {
      return <Redirect to="/login" />
    }
  }

  render(){
    console.log("This is the state: ", this.state)
    return (
      <div className="App">
        <Header/>
        {/* <AppointmentForm /> */}
        <Switch>
          {/* <Route path="/appointment" component={ <AppointmentForm />} /> */}
          <Route path="/household" render={this.renderHousehold } />
          <Route path="/login" render={ this.renderForms } />
          <Route path="/newAppointment" render={this.renderNewAppointmentForm } />
          <Route path="/newPet" render={this.renderNewPetForm } />
          <Route path="/" exact component={this.renderForms} />
          <Route render={ () => <p>Page not Found</p> } />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App)
