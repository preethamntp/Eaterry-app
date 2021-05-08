import React, { useState, useEffect } from "react";
import AppRouter from "./routes/app-router";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/Theme/GlobalStyles";
import { lightTheme, darkTheme } from "./components/Theme/Theme";
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
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";

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

function App() {
  const classes = useStyles();

  const [videos, setVideos] = useState([]);
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <Provider store={store}>
      <AppRouter />
      {/* <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <>
          <GlobalStyles />
          <div className="App">

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

                {theme === "light" ? (
                  <WbSunny onClick={themeToggler} />
                ) : (
                  <NightsStay onClick={themeToggler} />
                )}
              </Toolbar>
            </AppBar>
            <AppRouter />
          </div>
        </>
      </ThemeProvider> */}
    </Provider>
  );
}

export default App;
