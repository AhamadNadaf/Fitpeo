import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { BiSearchAlt2 } from 'react-icons/bi';
import { RiSettingsLine } from 'react-icons/ri';
import { AiOutlineDown } from 'react-icons/ai';
import { BsShieldLock, BsFillBoxFill, BsPersonCircle } from 'react-icons/bs';
import { MdOutlineAccountBalanceWallet, MdLiveHelp } from 'react-icons/md';
import { TbDiscount2 } from 'react-icons/tb';
import img1 from '../assets/avtar.jpg'
import useMediaQuery from '@mui/material/useMediaQuery';


import './style.css'
import Cards from './cards';
import Cards2 from './cards2.js';
import DataTable from './dataTable';



const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

export default function Sidebar() {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
    const [open, setOpen] = React.useState(!isSmallScreen);
    // const [open, setOpen] = React.useState(true);


    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open} sx={{ backgroundColor: "#F5F6F8", color: "black" }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            marginRight: 5,
                            ...(open && { display: 'none' }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <div className='top-title'>

                        <Typography variant="h6" noWrap component="div">
                            Hello Ahamad &#128075;&#127995;,
                        </Typography>
                        <Typography variant="h5" color='black' sx={{ fontWeight: 'bold', marginRight: 5 }}>
                            <Typography sx={{backgroundColor:'#FFFFFF', borderRadius:10, display:'flex',paddingLeft:2, alignItems:"center"}}>
                            <BiSearchAlt2 size={15}  /><input className='search' placeholder='search'></input>

                            </Typography>
                        </Typography>
                        {/* <TextField
                            // label="With normal TextField"
                            // id="outlined-start-adornment"
                            placeholder='Search'
                            className='searchBar'
                            sx={{ m: 1, width: '15ch' }}
                            InputProps={{
                                startAdornment: <InputAdornment position="start"><BiSearchAlt2 /></InputAdornment>,
                            }}
                        /> */}
                    </div>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}  >
                <DrawerHeader sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginLeft: '10px', }}>
                    <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                        <sapn style={{ marginRight: 2, marginTop: 2 }}>
                            <RiSettingsLine />
                        </sapn>
                        &nbsp;&nbsp;&nbsp;&nbsp;Dashboard
                    </Typography>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <ListItem disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                        sx={{
                            minHeight: 48,
                            justifyContent: open ? 'initial' : 'center',
                            px: 2.5,
                            backgroundColor: '#F5F5F5'
                        }}

                    >
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                            }}
                        >
                            <BsShieldLock />
                        </ListItemIcon>
                        <ListItemText primary={'Dashboard'} sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>


                    <ListItemButton
                        sx={{
                            minHeight: 48,
                            justifyContent: open ? 'initial' : 'center',
                            px: 2.5,
                        }}

                    >
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                            }}
                        >
                            <BsFillBoxFill />
                        </ListItemIcon>
                        <ListItemText primary={'Product'} sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>

                    <ListItemButton
                        sx={{
                            minHeight: 48,
                            justifyContent: open ? 'initial' : 'center',
                            px: 2.5,
                        }}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                            }}
                        >
                            <BsPersonCircle />
                        </ListItemIcon>
                        <ListItemText primary={'Customers'} sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>

                    <ListItemButton
                        sx={{
                            minHeight: 48,
                            justifyContent: open ? 'initial' : 'center',
                            px: 2.5,
                        }}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                            }}
                        >
                            <MdOutlineAccountBalanceWallet />
                        </ListItemIcon>
                        <ListItemText primary={'Income'} sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>

                    <ListItemButton
                        sx={{
                            minHeight: 48,
                            justifyContent: open ? 'initial' : 'center',
                            px: 2.5,
                        }}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                            }}
                        >
                            <TbDiscount2 />
                        </ListItemIcon>
                        <ListItemText primary={'Promote'} sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>

                    <ListItemButton
                        sx={{
                            minHeight: 48,
                            justifyContent: open ? 'initial' : 'center',
                            px: 2.5,
                        }}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                            }}
                        >
                            <MdLiveHelp />
                        </ListItemIcon>
                        <ListItemText primary={'Help'} sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>



                    <ListItemButton
                        sx={{
                            minHeight: 48,
                            justifyContent: open ? 'initial' : 'center',
                            px: 2.5,
                            position: 'fixed',
                            bottom: 10,
                            // backgroundColor:"#2D2D69",
                            
                            borderRadius: '5px',
                            overflow: 'hidden'
                        }}
                    >
                        <Typography sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                <img src={img1} className='avtar-img' alt='img'></img>
                            </ListItemIcon>
                            <Typography sx={{marginLeft:-2}}>
                                <ListItemText primary={'Ahamad'} sx={{ visibility: open ? 'none' : 'hidden' }} />
                                <Typography variant="body2"  sx={{ visibility: open ? 'none' : 'hidden' }} >Product Manager</Typography>
                            </Typography>

                        </Typography>
                        <Typography sx={{display:'grid', justifyContent:"end"}}>
                            <Typography sx={{ visibility: open ? 'none' : 'hidden', marginLeft:2 }}><AiOutlineDown/></Typography>

                        </Typography>

                        {/* <h1>Product</h1> */}
                    </ListItemButton>
                </ListItem>
                {/* <Divider /> */}

            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />

                <Cards />
                <br></br>
                <Cards2 />
                <br></br>
                <DataTable />

            </Box>
        </Box>
    );
}