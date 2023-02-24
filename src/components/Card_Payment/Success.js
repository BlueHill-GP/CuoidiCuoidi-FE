import React from "react";
import SuccessLogin from "../../assets/animat-checkmark.gif";
import {Card, CardContent, Typography} from "@mui/material";
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
        textAlign: "center",
    },
    pos: {
        marginBottom: 12,
    },
    text: {
        width: 350,
        margin: "10px",
    },
    img: {width: "200px"},
    con: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
});

export default function Success() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Card className={classes.root}>
            <CardContent>
                <div className={classes.con}>
                    <img src={SuccessLogin} alt="loading..." className={classes.img}/>
                </div>
                <Typography
                    className={classes.title}
                    variant="h2"
                    color="success"
                    gutterBottom
                >
                    <b> Order Confirmed </b>
                </Typography>
            </CardContent>
        </Card>
    );
}