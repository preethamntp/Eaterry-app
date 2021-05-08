import React, { useState } from "react";
import { Box } from "@material-ui/core";
import clsx from "clsx";
import HttpsIcon from "@material-ui/icons/Https";

import useStyles from "./style";
// import { FormControl, InputLabel, Input, FormHelperText } from '@material-ui/core';
import {
  Paper,
  withStyles,
  Grid,
  TextField,
  Button,
  FormControlLabel,
  Checkbox
} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
// import VisibilityOff from '@material-ui/icons/Delete';
import { Formik } from "formik";

// import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

import Icon from "@material-ui/core/Icon";

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit * 2
  },
  padding: {
    padding: theme.spacing.unit,
    border: "2px solid black",
    boxSizing: "content-box"
  }
});

function compareLargeStrings(a, b) {
  if (a.length !== b.length) {
    return false;
  }
  return a.localeCompare(b) === 0;
}

export default function ResetPassword() {
  const classes = useStyles();

  const [toShowPassword, setToShowPassword] = useState(false);

  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  };

  const showPassword = e => {
    setToShowPassword(!toShowPassword);
  };

  const validate = values => {
    let errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.username) {
      errors.username = "Username is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "Invalid Email";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password too short";
    }
    if (!values.confirmPassword) {
      errors.confirmPassword = "Confirm password is required";
    } else if (
      compareLargeStrings(values.confirmPassword, values.password) !== true
    ) {
      errors.confirmPassword = "Password didn't matched";
    }
    return errors;
  };

  const submitForm = values => {
    console.log(values);
  };

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <div>
          <img className={classes.brand} src="/foodpanda.jpeg" />
        </div>
        <Box className={classes.right}>
          <HttpsIcon /> <Box>Secure</Box>
        </Box>
      </div>
      <div className={clsx(classes.logo, { logo: true })}>
        <img
          className={classes.wallpaper}
          src="https://via.placeholder.com/770x721"
          alt="Trellance"
        />
      </div>
      <div className={classes.widget}>
        <div className={classes.singIn} id="sign-in-widget">
          <div className={classes.auth_content}>
            <h3>Welcome to Eatery</h3>
            <p>Please Sign In</p>

            <Paper
              variant="outlined"
              style={{ boxSizing: "content-box", padding: "2em" }}
            >
              <div className={classes.margin}>
                <div style={{ width: "100%" }}>
                  <Formik
                    initialValues={initialValues}
                    validate={validate}
                    onSubmit={submitForm}
                  >
                    {formik => {
                      const {
                        values,
                        handleChange,
                        handleSubmit,
                        errors,
                        touched,
                        handleBlur,
                        isValid,
                        dirty
                      } = formik;
                      return (
                        <Grid>
                          <Grid container spacing={5}>
                            <Grid item md={true} sm={true} xs={true}>
                              <TextField
                                type="username"
                                name="username"
                                id="username"
                                value={values.username}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                label="Username"
                                type="text"
                                variant="outlined"
                                autoFocus
                                fullWidth
                                required
                                className={
                                  errors.username && touched.username
                                    ? "input-error"
                                    : null
                                }
                                error={errors.username && touched.username}
                                helperText={
                                  errors.username && touched.username
                                    ? errors.username
                                    : null
                                }
                              />
                              {/* {errors.username && touched.username && (
                                <div className={classes.error}>{errors.username}</div>
                              )} */}
                            </Grid>
                          </Grid>
                          <Grid container spacing={5}>
                            <Grid item md={true} sm={true} xs={true}>
                              <TextField
                                type="email"
                                name="email"
                                id="email"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                label="Email"
                                type="text"
                                variant="outlined"
                                fullWidth
                                required
                                className={
                                  errors.email && touched.email
                                    ? "input-error"
                                    : null
                                }
                                error={errors.email && touched.email}
                                helperText={
                                  errors.email && touched.email
                                    ? errors.email
                                    : null
                                }
                              />
                              {/* {errors.email && touched.email && (
                                <div className={classes.error}>{errors.email}</div>
                              )} */}
                            </Grid>
                          </Grid>
                          <Grid container spacing={5}>
                            <Grid item md={true} sm={true} xs={true}>
                              <TextField
                                type="password"
                                name="password"
                                id="password"
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                label="Password"
                                type={toShowPassword ? "text" : "password"}
                                variant="outlined"
                                fullWidth
                                required
                                className={
                                  errors.password && touched.password
                                    ? "input-error"
                                    : null
                                }
                                error={errors.password && touched.password}
                                helperText={
                                  errors.password && touched.password
                                    ? errors.password
                                    : null
                                }
                                InputProps={{
                                  endAdornment: (
                                    <InputAdornment>
                                      <IconButton onClick={showPassword}>
                                        {toShowPassword ? (
                                          <Visibility />
                                        ) : (
                                          <VisibilityOff />
                                        )}
                                      </IconButton>
                                    </InputAdornment>
                                  )
                                }}
                              />
                              {/* {errors.password && touched.password && (
                                <div className={classes.error}>{errors.password}</div>
                              )} */}
                            </Grid>
                          </Grid>
                          <Grid container spacing={5}>
                            <Grid item md={true} sm={true} xs={true}>
                              <TextField
                                type="confirmPassword"
                                name="confirmPassword"
                                id="confirmPassword"
                                value={values.confirmPassword}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                label="Confirm Password"
                                type={toShowPassword ? "text" : "password"}
                                variant="outlined"
                                fullWidth
                                required
                                className={
                                  errors.confirmPassword &&
                                  touched.confirmPassword
                                    ? "input-error"
                                    : null
                                }
                                error={
                                  errors.confirmPassword &&
                                  touched.confirmPassword
                                }
                                helperText={
                                  errors.confirmPassword &&
                                  touched.confirmPassword
                                    ? errors.confirmPassword
                                    : null
                                }
                                InputProps={{
                                  endAdornment: (
                                    <InputAdornment>
                                      <IconButton onClick={showPassword}>
                                        {toShowPassword ? (
                                          <Visibility />
                                        ) : (
                                          <VisibilityOff />
                                        )}
                                      </IconButton>
                                    </InputAdornment>
                                  )
                                }}
                              />
                              {/* {errors.confirmPassword && touched.confirmPassword && (
                                <div className={classes.error}>{errors.confirmPassword}</div>
                              )} */}
                            </Grid>
                          </Grid>
                          <Grid container spacing={10} justify="center">
                            <Grid item md={true} sm={true} xs={true}>
                              <Button
                                type="submit"
                                className={
                                  dirty && isValid ? "" : "disabled-btn"
                                }
                                disabled={!(dirty && isValid)}
                                variant="contained"
                                color="primary"
                                fullWidth
                                style={{ textTransform: "none" }}
                              >
                                Next
                              </Button>
                            </Grid>
                          </Grid>
                        </Grid>
                      );
                    }}
                  </Formik>
                </div>
              </div>
            </Paper>
          </div>
        </div>
      </div>
      <div className={classes.footer}>
        <a href="#" className={classes.link}>
          About
        </a>
        <a href="#" className={classes.link}>
          Contact Support
        </a>
      </div>
    </div>
  );
}
