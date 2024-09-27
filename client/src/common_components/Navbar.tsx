import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import logo from '/images/logo.svg';
import ProductPage from '../product_page/ProductPage';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

// Logo is imported from the images folder
const Logo = () => (
    <div>
      <img style={{margin: '0 15px'}} src={logo} alt="Logo" /> 
    </div>
  );

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Navbar() {
  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        height: '80px',
        justifyContent: "space-between",
        borderBottom: 1,
        borderColor: 'divider' 
        }}>
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            }}>
            <Logo />
            <Tabs value={value} 
                onChange={handleChange}
                textColor="primary"
                indicatorColor="primary" 
                aria-label="basic tabs example">
                <Tab className='color-primary' label="Collections" {...a11yProps(0)} />
                <Tab label="Men" {...a11yProps(1)} />
                <Tab label="Women" {...a11yProps(2)} />
                <Tab label="About" {...a11yProps(3)} />
                <Tab label="Contact" {...a11yProps(4)} />
            </Tabs>
        </Box>
        <Box sx={
            {
                display: 'flex',
                alignItems: 'center',
                margin: '0 15px'
            }
        }>
            <img className='pointer' src='/images/icon-cart.svg'  alt='cart' />
            <img className='round pointer border-hover' style={{scale: '0.5'}} src='/images/image-avatar.png'  alt='avatar' />
        </Box>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <ProductPage />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
    </>
  );
}
