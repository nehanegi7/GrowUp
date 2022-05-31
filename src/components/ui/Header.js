import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

const Header = () => {

    function ElevationScroll(props) {
        const { children, window } = props;
        const trigger = useScrollTrigger({
          disableHysteresis: true,
          threshold: 0,
          target: window ? window() : undefined,
        });
      
        return React.cloneElement(children, {
          elevation: trigger ? 4 : 0,
        });
      }
      
    return (
        <>
        <ElevationScroll>
            <AppBar position='fixed'>
                <Toolbar>
                    Grow Up
                </Toolbar>
            </AppBar>
         </ElevationScroll>
        </>
    )
}

export default Header