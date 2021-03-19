import React from 'react'
import Header from '../navbar/Header'
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { Button, Typography } from '@material-ui/core';
import HeroSearchBar from './HeroSearchBar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import OfflineBoltIcon from '@material-ui/icons/OfflineBolt';

const useStyles = makeStyles((theme) => ({
    root:{
        position: 'relative',
        width: '100%',
        height: '100vh',
        minHeight: '550px',
        maxHeight: '1600px',
        backgroundImage: 'linear-gradient(180deg,#605a5b,#706869,#817776,#918684,#a29591)',
        backgroundPosition: '50%',
        backgroundSize: 'cover',
    },
    prograssiveBackground: {
        minHeight: '100%',
        minWidth: '100%',
      },
      heroBackground: props=>({ 
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50%',
        backgroundSize: 'cover',
        position: 'absolute',
        backgroundImage: `url(${props.image})`
      }),
      heroContent: {
        position: 'absolute',
        top: '35%',
        left: '50%',
        zIndex: '700',
        width: '100%',
        maxWidth: '1000px',
        transform: 'translateX(-50%)',
        marginTop: '-75px',
        [theme.breakpoints.down('md')]: {
          width: 'calc(100% - 80px)',
          
        },
      },
      mainContent: {
        maxWidth: '690px',
        color:'#fff',
        fontWeight: 'bold'
      },
      HeroBanner:{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '20px 30px 25px',
        background: 'rgba(0,0,0,.3)',
        borderRadius: '8px',
        cursor: 'pointer',
        transition: 'background .3s',
        color: '#fff',
        '&:hover': {
          background: 'rgba(0, 0, 0, 0.52)',
          textDecoration: 'underline',
        },
      },
      whiteColor: {
        color:'#fff',
      },
     
  }));
 
function Hero(props){
    const classes = useStyles(props);
   
    return (
        <div >
            <div className={classes.prograssiveBackground}>
            <div className={classes.heroBackground} ></div>
            </div>
            <Header  fontColor='#fff' color='transparent' Logo={props.logo}/>
            
                <Box className={classes.heroContent}>

                    <Typography variant='h3' 
                                className={classes.mainContent} 
                                gutterBottom>
                                    Make your move.
                    </Typography>

                    <Typography variant='h5' 
                                style={{color:'#fff'}} 
                                gutterBottom>
                                    Find houses and apartments for rent.
                    </Typography>
                    <HeroSearchBar ></HeroSearchBar>
                   
                   
                    <List>
                  
                        <ListItem className={classes.HeroBanner} button>
                          <ListItemIcon><OfflineBoltIcon style={{ color:'#fff',height:'36px',width:'36px',marginRight: '24px'}}/></ListItemIcon>
                          
                          <ListItemText classes={{ primary: classes.whiteColor,
                                                    secondary: classes.whiteColor }}
                                        primary='Introducing Instarent'
                                        secondary='Discover verified properties that you can reserve on the spot and lease entirely online!'
                          />
                         <Button style={{ color:'#fff',textTransform: 'none',}}>Learn more</Button>
                        </ListItem>
                        
                    </List>
                    
                </Box>
           
        </div>
    ) 
}

export default Hero
