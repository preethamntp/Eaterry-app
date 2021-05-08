import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../Theme/GlobalStyles";
import { lightTheme, darkTheme } from "../Theme/Theme";
import { WbSunny, NightsStay } from "@material-ui/icons";
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import "../../App.css";
import { Provider } from "react-redux";
import store from "../../redux/store";

import LoginComponent from "../LoginComponent";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

function Index({ navigate }) {
  const classes = useStyles();

  const [videos, setVideos] = useState([]);
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const navToLoginPage = props => {
    // props.navigate("/login", { replace: true });
    // console.log("hihih");
    navigate("/login");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <div className="App">
          {/* <button onClick={themeToggler}>Switch Theme</button> */}

          <AppBar position="static">
            <Toolbar>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                Welcome to ToDo App
              </Typography>

              <Button
                type="button"
                color="inherit"
                onClick={() => navToLoginPage()}
              >
                Login
              </Button>

              {theme === "light" ? (
                <WbSunny onClick={themeToggler} />
              ) : (
                <NightsStay onClick={themeToggler} />
              )}
            </Toolbar>
          </AppBar>
          <div>I am a Dashboard</div>
        </div>
      </>
    </ThemeProvider>
  );
}

export default Index;
