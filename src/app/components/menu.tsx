"use client";
import * as React from 'react';
/**
 * Material UI Components
 */
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {IconButton, Tooltip} from "@mui/material";
import RestartAltIcon from '@mui/icons-material/RestartAlt';

/**
 * Title Bar Component
 * @param props
 * @constructor
 */
function MenuBar(props:{title: string}) {
    /**
     * Reset the app by clearing local storage and reloading the page
     */
    const reset = () => {
        localStorage.clear();
        location.reload();
    }

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex' },
                            flexGrow: 1,
                            justifyContent: 'center',
                            fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
                            fontWeight: 700,
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        {props.title}
                    </Typography>
                    <Tooltip title="Reset App Data">
                        <IconButton
                            size="small"
                            aria-label="Reset"
                            aria-controls="menu-appbar"
                            aria-haspopup="false"
                            color="inherit"
                            onClick={reset}
                        >
                            <RestartAltIcon />
                        </IconButton>
                    </Tooltip>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default MenuBar;