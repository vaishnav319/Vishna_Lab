import React from "react";
import {
  Grid,
  Box,
  TextField,
  Button,
  Typography,
  Alert,
  CircularProgress,
} from "@mui/material";
import { GreyDotsRight } from "../../Commons/GreyDots";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useContactMutation } from "../../../../Application/Api/BaseQuery";
const DemoForm = () => {
  const digitsOnly = (value) => /^\d+$/.test(value);
  const [addContact, { isError, isSuccess, isLoading }] = useContactMutation();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      phoneNumber: Yup.string()
        .required("Number is required")
        .max(10, "Please enter a valid number")
        .min(10, "Please enter a valid number")
        .matches(/[3-9]\d\d/, "Must be a valid number"),
      email: Yup.string().email("Invalid email address").required("Required"),

      message: Yup.string(),
    }),

    onSubmit: (values, { resetForm }) => {
      // alert(JSON.stringify(values, null, 2));
      addContact(values);
      resetForm({});
    },
  });
  return (
    <div>
      <Box
        className="container"
        sx={{ margin: { md: "100px auto", xs: "50px auto" } }}
      >
        <Grid
          container
          spacing={5}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          alignContent="stretch"
          flexWrap="wrap-reverse"
        >
          <Grid item xl="5" md="5" xs="12">
            <Box
              sx={{
                background: "black",
                borderRadius: "20px",
                padding: "30px",
              }}
            >
              <form onSubmit={formik.handleSubmit}>
                <Box display="flex" gap="10px">
                  <TextField
                    type="text"
                    placeholder="First Name"
                    sx={{
                      width: "100%",
                      background: "#fff",
                      borderRadius: "5px",
                    }}
                    name="firstName"
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.firstName &&
                      Boolean(formik.errors.firstName)
                    }
                    helperText={
                      formik.touched.firstName && formik.errors.firstName
                    }
                  />
                  <TextField
                    type="text"
                    placeholder="Last Name"
                    sx={{
                      width: "100%",
                      background: "#fff",
                      borderRadius: "5px",
                    }}
                    name="lastName"
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.lastName && Boolean(formik.errors.lastName)
                    }
                    helperText={
                      formik.touched.lastName && formik.errors.lastName
                    }
                  />
                </Box>
                <br />

                <TextField
                  type="text"
                  placeholder="Please Enter your Phone Number here"
                  sx={{
                    width: "100%",
                    background: "#fff",
                    borderRadius: "5px",
                    mb: "15px",
                  }}
                  name="phoneNumber"
                  onChange={formik.handleChange}
                  value={formik.values.phoneNumber}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.phoneNumber &&
                    Boolean(formik.errors.phoneNumber)
                  }
                  helperText={
                    formik.touched.phoneNumber && formik.errors.phoneNumber
                  }
                />
                <TextField
                  type="email"
                  placeholder="Please enter your Email here"
                  sx={{
                    width: "100%",
                    background: "#fff",
                    borderRadius: "5px",
                    my: "5px",
                  }}
                  name="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  onBlur={formik.handleBlur}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />

                <br />

                <br />
                <TextField
                  id=""
                  type="text"
                  placeholder="Why do you want to contact us ?"
                  multiline
                  rows={8}
                  sx={{
                    width: "100%",
                    background: "#fff",
                    borderRadius: "5px",
                  }}
                  name="message"
                  onChange={formik.handleChange}
                  value={formik.values.message}
                />
                <br />
                <br />
                {isError && (
                  <Alert severity="error">
                    Something went wrong please try again later
                  </Alert>
                )}
                {isSuccess && (
                  <Alert severity="success">
                    Thank you for contacting us, our team will get back to you
                    soon.
                  </Alert>
                )}
                <br />
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  color="primary"
                  sx={{ padding: "12px 50px", width: "100%" }}
                >
                  {isLoading ? (
                    <CircularProgress sx={{ color: "#fff" }} />
                  ) : (
                    "Submit"
                  )}
                </Button>
              </form>
            </Box>
          </Grid>
          <Grid item xl="6" md="6" xs="12">
            <GreyDotsRight />
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: { md: "68px", xs: "31px" },
                lineHeight: { md: "70px", xs: "48px" },
              }}
              color="primary"
            >
              {" "}
              Contact us
            </Typography>
            <br />
            <Typography
              sx={{
                fontWeight: "500",
                fontSize: "20px",
                lineHeight: "28px",
                color: "#1b1b1b",
              }}
            >
              You can reach us here by filling this form
            </Typography>
            <br />
            <div>
              <Typography
                gutterBottom
                sx={{
                  fontWeight: "500",
                  fontSize: "20px",
                  lineHeight: "28px",
                  color: "#1b1b1b",
                }}
              >
                1. Fill in your details
              </Typography>
              <Typography
                gutterBottom
                sx={{
                  fontWeight: "500",
                  fontSize: "20px",
                  lineHeight: "28px",
                  color: "#1b1b1b",
                }}
              >
                2. Click on Submit
              </Typography>
              <Typography
                gutterBottom
                sx={{
                  fontWeight: "500",
                  fontSize: "20px",
                  lineHeight: "28px",
                  color: "#1b1b1b",
                }}
              >
                3. Our team will connect with you shortly
              </Typography>
            </div>
            <br />
            <br />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default DemoForm;
