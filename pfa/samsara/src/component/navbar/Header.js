import React from 'react';
import { fade,makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DrawerComponent from './DrawerComponent';
import SearchBar from './SearchBar';


const useStyles = makeStyles((theme) => ({
 
  root: {
    flexGrow: 1,
  },
  
 
  logo_img: {
    height: '32px' ,
    width: '124px' ,
    
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    border: '1px solid #d5d9dc',
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sm_hidden: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  SignUp_button: {
    background: '#fff',
    textTransform: 'none'
  },
  space_button: {
    marginRight: theme.spacing(1),
    textTransform: 'none',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  Login_button: {
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
    textTransform: 'none'
  },
  free_chip: {
      position: 'relative',
      color: '#068047',
      background: '#ebf6f1',
      fontSize: '9px',
      top: '-1px',
      padding: '5px 7px 4px',
      lineHeight: '1',
      marginLeft: '5px',
      borderRadius: '5px',
      fontWeight: '600',
  },
  fontColor: {
    color: props=> props.fontColor,
  },
}));
function Header(props) {
    const classes = useStyles(props);
    const searchbar=props.mySearchBar?<SearchBar />:null

  return (
    <div className={classes.root}>
      <AppBar position="static" color={props.color}>
        <Toolbar>
        <DrawerComponent color={props.fontColor} />
          <IconButton >
              <img alt="myLogo" className={classes.logo_img}  src={props.Logo} />
          </IconButton>
         {searchbar}
          <div className={classes.root}/>
          
          <Button size="medium" className={`${classes.space_button} ${classes.fontColor}`} >Manage Rentals <div className={classes.free_chip}  >FREE</div></Button>
          <Button size="medium" className={`${classes.space_button} ${classes.fontColor}`} >Advertise</Button>
          <Button size="medium" className={`${classes.Login_button} ${classes.fontColor} ${classes.sm_hidden}`} >Log in</Button>
          <Button size="medium" variant="contained" className={`${classes.SignUp_button} ${classes.sm_hidden}`}>Sign up</Button>
        </Toolbar>
      </AppBar>
    </div>)
}

export default Header
