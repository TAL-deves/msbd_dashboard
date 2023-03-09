import { TextField, Button, Typography, CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

const SearchPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleChange = (event) => {
    setIsVisible(false);
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsVisible(true);
    setIsLoading(true);
    // You can make API calls here to search for users
    // For this example, we will just simulate a loading state for 2 seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const validate = () => {
    let formErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      formErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.phone.trim()) {
      formErrors.phone = "Phone number is required";
      isValid = false;
    } else if (!/^(?:\+?88)?01\d{9,10}$/.test(formData.phone.trim())) {
      formErrors.phone = "Please enter a valid 10-digit phone number";
      isValid = false;
    }

    if (!formData.email.trim()) {
      formErrors.email = "Email is required";
      isValid = false;
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
        formData.email.trim()
      )
    ) {
      formErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  return (
    <Box
      mt={2}
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box>
        <Typography align="center" variant="h4">
          Search an user
        </Typography>
      </Box>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          error={!!errors.name}
          helperText={errors.name}
          sx={{
            m: "1rem",
          }}
        />
        <TextField
          fullWidth
          label="Phone Number"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          error={!!errors.phone}
          helperText={errors.phone}
          sx={{
            m: "1rem",
          }}
        />
        <TextField
          fullWidth
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={!!errors.email}
          helperText={errors.email}
          sx={{
            m: "1rem",
          }}
        />
        <Box display="flex" justifyContent="center">
          <Button
            variant="contained"
            color="primary"
            type="submit"
            onClick={validate}
            disabled={isLoading}
          >
            {isLoading ? (
              <CircularProgress size={24} />
            ) : (
              <Typography>Search</Typography>
            )}
          </Button>
        </Box>
      </form>
      <Box sx={!isVisible && { display: "none" }}>
        <Typography>Showing search result: </Typography>
        <Box>
          <Typography>{formData?.name}</Typography>
          <Typography>{formData?.email}</Typography>
          <Typography>{formData?.phone}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default SearchPage;
