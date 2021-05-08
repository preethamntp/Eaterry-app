import React from "react";
import { Router } from "@reach/router";
import Dashboard from "../components/Dashboard/index";
import Login from "../components/Login/index";
// import SignUp from "../pages/signup";

function AppRouter() {
  return (
    <Router>
      <Login path="/login" />
      {/* <SignUp path="signup" /> */}
      <Dashboard path="/*" />
    </Router>
  );
}

export default AppRouter;