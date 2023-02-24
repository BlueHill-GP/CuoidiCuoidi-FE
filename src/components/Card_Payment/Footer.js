import React from "react";
import {Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles({
    root: {
        width: "100%",
        maxWidth: 500,
    },
});

export default function Types() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant="overline" display="block" gutterBottom>
                Made by <a href="https://nikhilsahu.me/"> Nikhil Sahu</a>
            </Typography>
        </div>
    );
}