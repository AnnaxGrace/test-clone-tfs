import React, { useState, useEffect } from 'react';

import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { HashRouter, Route, Switch } from "react-router-dom";

import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";

import lightTheme from "./theme/muiTheme"
import darkTheme from "./theme/darkTheme"

import Login from "./pages/Login"
import LeaderLandingPage from "./pages/leader/LeaderLandingPage"
import EmployeeLandingPage from "./pages/employee/EmployeeLandingPage"
import CRUDWrapper from './pages/leader/CRUDWrapper';
import ResourceAllocation from "./pages/leader/ResourceAllocation"
import CareerJourney from "./pages/leader/CareerJourney"
// import Footer from "./components/Footer"
import NavBarWrapper from './components/NavBarWrapper';
import Badges from "./pages/employee/Badges"
import Pods from "./pages/employee/Pods"
import PersonalizedJourneyMap from './pages/employee/PersonalizedCareerJourney';


function App() {
  const [checked, setChecked] = useState(false);
  const [theme, setTheme] = useState(lightTheme)

  useEffect(() => {
    if (localStorage.getItem("theme") !== null) {
      let localTheme = localStorage.getItem("theme");
      if (localTheme === 'light') {
        setTheme({ ...lightTheme })
        setChecked(false)
      } else if (localTheme === 'dark') {
        setTheme({ ...darkTheme })
        setChecked(true)
      }
    } else {
      setTheme({ ...lightTheme })
    }
  }, []);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    if (theme.palette.type === 'light') {
      setTheme({ ...darkTheme })
      localStorage.setItem("theme", "dark")
    } else if (theme.palette.type === 'dark') {
      setTheme({ ...lightTheme })
      localStorage.setItem("theme", "light")
    }
  };


  //New change

  // const DefaultContainer = () => (
  //   <div>
  //     <NavBarWrapper
  //       checked={checked}
  //       handleChange={handleChange}
  //     />
  //     <Route path="/auth/leader/homepage/" component={EmployeeLandingPage} />
  //     <Route path="/auth/databaseManagement/roles" component={CRUDWrapper} />
  //     <Route path="/auth/databaseManagement/member" component={CRUDWrapper} />
  //     <Route path="/auth/databaseManagement/user" component={CRUDWrapper} />
  //     <Route path="/auth/databaseManagement/customerEngagement" component={CRUDWrapper} />
  //     <Route path="/auth/resourceAllocation" component={ResourceAllocation} />
  //     <Route path="/auth/careerJourney/" component={CareerJourney} />
  //     <Route path="/auth/employee/homepage/" component={EmployeeLandingPage} />
  //     <Route path="/auth/employee/badges" component={Badges} />
  //     <Route path="/auth/employee/pods" component={Pods} />
  //     <Route path="/auth/employee/personalizedCareerJourney" component={PersonalizedJourneyMap} />
  //   </div>
  // );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <NavBarWrapper
          checked={checked}
          handleChange={handleChange}
        />
        <Switch>
          <div>
            <Route exact path="/auth/employee/homepage/" component={EmployeeLandingPage} />
            <Route exact path="/auth/leader/ResourceAllocation/" component={ResourceAllocation} />
            <Route exact path="/auth/employee/badges/" component={Badges} />
            <Route exact path="/auth/employee/pods/" component={Pods} />
            <Route exact path="/auth/employee/personalizedCareerJourney/" component={PersonalizedJourneyMap} />
            <Route exact path="/" component={PersonalizedJourneyMap} />
          </div>
        </Switch>
      </Router>
      {/* <Footer /> */}
    </ThemeProvider>
  );
}

export default App;
