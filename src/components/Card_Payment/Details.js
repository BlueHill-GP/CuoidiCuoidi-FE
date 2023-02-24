import React from "react";
import {Card, CardContent, TextField, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles({
    root: {
        minWidth: 400,
        margin: "20px",
    },
    bullet: {
        display: "inline-block",
        margin: "0 2px",
        transform: "scale(0.8)",
    },
    title: {
        fontSize: 14,
    },

    text: {
        width: 350,
        margin: "10px",
    },
});

export default function Details() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography
                    className={classes.title}
                    color="textSecondary"
                    variant="h5"
                    gutterBottom
                >
                    Enter Your Details
                </Typography>
                <TextField
                    id="filled-basic"
                    label="User name"
                    variant="filled"
                    className={classes.text}
                />
                <br/>
                <TextField
                    label="Address"
                    variant="filled"
                    multiline
                    rows={4}
                    className={classes.text}
                />
            </CardContent>
        </Card>
    );
}