// import { render } from 'react-dom';
import './App.css';
import Header from './components/Header'
import Login from './components/Login'
import Signup from './components/Signup'
import HouseholdContainer from './components/HouseholdContainer'
import AppointmentScheduleContainer from './components/AppointmentScheduleContainer'
import NewAppointmentForm from './components/NewAppointmentForm'
import NewPetForm from './components/NewPetForm'

function App() {
  return (
    <div className="body">
      <Header />
      {/* <Login />
      <Signup /> */}
      <HouseholdContainer />
      {/* <NewPetForm /> */}
      {/* <AppointmentScheduleContainer /> */}
      {/* <NewAppointmentForm /> */}
    </div>
  );
}

export default App;
