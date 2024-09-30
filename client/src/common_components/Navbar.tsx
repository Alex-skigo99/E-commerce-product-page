import React, { useContext } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import logo from '/images/logo.svg';
import ProductPage from '../product_page/ProductPage';
import Badge from '@mui/material/Badge';
import { CartContext } from '../App';
import BasketCard from '../product_page/BasketCard';
import Drawer from '@mui/material/Drawer';
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../App';

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
  const [showCart, setShowCart] = React.useState(false); 
  const valueContext = useContext(CartContext);
  if (!valueContext) {
      throw new Error('ChildComponent must be used within a MyProvider');
  }
  const {cart} = valueContext;
  let quantity = 0;
  if (cart.length !== 0) {
    quantity = cart.reduce((acc, item) => acc + item.quantity, 0);
  } 
  const [openMenu, setOpenMenu] = React.useState(false); // for mobile menu control
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpenMenu(newOpen);
  };

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  function mobileManuItemProp(index: number) {
    const colorItem = (index === value) ? PRIMARY_COLOR : SECONDARY_COLOR;
    return {
      id: `menu-${index}`,
      style: {color: colorItem, cursor: 'pointer'},
      onClick: () => {setValue(index); setOpenMenu(false); }
    }
  };

  const DrawerList = (
    <Box
      sx={{ width: 200 }}
      role="presentation"
      // onClick={toggleDrawer(false)}
    >
      <img className='mobile-close-btn' src='/images/icon-close.svg'  alt='close' onClick={toggleDrawer(false)} />
      <div style={{
            marginTop: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}
      >
          <h3 {...mobileManuItemProp(0)}>Collections</h3>
          <h3{...mobileManuItemProp(1)}>Men</h3>
          <h3{...mobileManuItemProp(2)}>Women</h3>
          <h3{...mobileManuItemProp(3)}>About</h3>
          <h3{...mobileManuItemProp(4)}>Contact</h3>
      </div>
    </Box>
  );

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
        <Box className='mobile' >
            <img className='pointer' src='/images/icon-menu.svg'  alt='menu' onClick={toggleDrawer(true)} />
            <Logo />
        </Box>
        <Box className='desktop' >
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
          <Badge badgeContent={quantity} color="primary">
            <img className='pointer' src='/images/icon-cart.svg'  alt='cart' onClick={() => setShowCart(true)} />
          </Badge>
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

      {showCart && <BasketCard action={() => setShowCart(false)}/>}

      <Drawer open={openMenu} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </>
  );
}
