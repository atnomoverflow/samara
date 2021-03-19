import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { Button } from '@material-ui/core';
import Popover from '@material-ui/core/Popover';
import TelegramIcon from '@material-ui/icons/Telegram';
import Box from '@material-ui/core/Box';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
const useStyles = makeStyles((theme) => ({
    search: {
      display:'flex',
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: theme.palette.common.white,
      width:'100%',
      height:'68px',
      border: '1px solid #d5d9dc',
      '&:hover': {
        border: '1px solid #38ccff',
      },
      marginLeft: 0,
      [theme.breakpoints.up('sm')]: {
        //marginLeft: theme.spacing(3),
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
      width: '100%',
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
    divider: {
        flexGrow: 1,
    },
    searchButton:{
        width: '150px',
        height: '100%',
        padding: '8px 15px 6px',
        fontWeight: '600',
        fontSize: '20px',
        lineHeight: '19px',
        borderRadius: '0 5px 5px 0',
        textTransform: 'none',
        background: '#2e64e2',
        [theme.breakpoints.down('sm')]: {
            display:'none',
            
          },
    },
    popoverStyle: {
  },
  }));
const HeroSearchBar = (props) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    const handleClose = () => {
      setAnchorEl(null);
    };
    return (
        <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          aria-describedby={id}
          onClick={handleClick}
          inputProps={{ 'aria-label': 'search' }}
        ></InputBase>
       
        <div className={classes.divider}></div>
        <Button size='large' className={classes.searchButton} variant="contained" color="primary">Searsch</Button>
        
        <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'center',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'center',
                    }}
                    >
                      <Box className={classes.popoverStyle}>
                        <ListItem button>
                        <ListItemIcon><TelegramIcon style={{ height:'36px',width:'36px',marginRight: '24px'}}/></ListItemIcon>
                                      
                                      <ListItemText 
                                                    primary='Use my current location'
                                      />
                        </ListItem>
                      </Box>
                    </Popover>
        </div>
    )
}

export default HeroSearchBar
