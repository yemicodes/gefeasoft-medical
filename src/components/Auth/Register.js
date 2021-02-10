import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import Image from '../../image/sign.jpg';
import {Link} from "react-router-dom";

function CopyRight() {
    return (
        <Typography variant="body2" color="textSecondary" align="Center">
            {'Copyright © '}
            {"Gefeasoft-Medical "}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = theme => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: `url(${Image})`,
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(2),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
});


class Register extends React.Component {
    render() {
    const { classes } = this.props;
    return (

        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                        <Typography component="h1" variant="h4">
                            Gefeasoft-Medical
                        </Typography>
                    <form className={classes.form} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="Username"
                            name="username"
                            autoComplete="username"
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                        />
                        <TextField 
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <TextField 
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Repeat Password"
                            type="password"
                            id="Repeat-password"
                            autoComplete="current-password"
                        />
                        <FormControlLabel 
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Sign Up
                        </Button>
                        <Grid container>
                            <Grid item>
                                <Link to="/login" variant="body2">
                                {"Already have account? Login"}
                                </Link>
                            </Grid>
                            </Grid>
                            <Box mt={5}>
                                <CopyRight />
                            </Box>
                    </form>
                </div>
            </Grid>
            
        </Grid>
    )
    }
}

export default withStyles(useStyles)(Register);