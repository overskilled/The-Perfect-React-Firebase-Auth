import React, { Fragment } from "react";
import Signup from "./components/Signup/Signup";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import PrivateRoute from "./PrivateRoute";
import ForgetPassword from "./components/ForgetPassword/ForgetPassword";
import UpdateProfile from "./components/UpdateProfile/UpdateProfile";
import { Container } from "react-bootstrap";


function App() {
  return (
    <Container
      className='d-flex justify-content-center align-items-center'
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
          <Fragment>
            <AuthProvider>
              <Routes>
                <Route exact path='/' element={<PrivateRoute />}>
                  <Route exact path='/' element={<Home />} />
                  <Route exact path='/update-profile' element={<UpdateProfile />} />
                </Route>
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/forget-password" element={<ForgetPassword />} />
              </Routes>
            </AuthProvider>
          </Fragment>
        </Router>
      </div>
    </Container>

  );
}

export default App;
