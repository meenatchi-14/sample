import { Box, Tab,Tabs,Typography } from "@mui/material";
import PropTypes from 'prop-types';
import { Main } from '../MainBar/main'
import React from "react";
import Form from "../Component/Form";
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
const Register=()=> {
  const [value, setValue] = React.useState(0);
  const handleChange = (event,newValue) => {
    setValue(newValue);
  };
return( 
 <>
 <Main title={"Register Page"}>
  <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Login" {...a11yProps(0)} />
          <Tab label="Signup" {...a11yProps(1)} />
         
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Form btnName={"Login"} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
       <Form btnName={"Signup"}/>
      </CustomTabPanel>  
    </Box>
        </Main>
        </>
    );
};
 
export default Register;