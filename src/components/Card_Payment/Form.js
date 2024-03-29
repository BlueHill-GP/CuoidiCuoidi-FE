import React from "react";
import Details from "../Card_Payment/Details";
import PaymentMode from "./PaymentMode";
import Success from "./Success";
import PayCard from "./PayCard";
import {AppBar, Button, Card, CardContent, Grid, Step, StepLabel, Stepper, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        justifyContent: "center",
        height: "50vw",
    },
    actions: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        marginRight: theme.spacing,
    },
    instructions: {
        marginTop: theme.spacing,
        marginBottom: theme.spacing,
    },
    stepper: {
        iconColor: "#2E3B55",
    },
}));

function getSteps() {
    return ["Enter Details", "Payment Mode", "Payment", "Order Confirmed"];
}

function getStepContent(step) {
    switch (step) {
        case 0:
            return <Details/>;
        case 1:
            return <PaymentMode/>;
        case 2:
            return <PayCard/>;
        case 3:
            return <Success/>;
        default:
            return "Unknown step";
    }
}

export default function Form() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());
    const steps = getSteps();

    const isStepOptional = (step) => {
        return step === 1;
    };

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            // You probably want to guard against something like this,
            // it should never occur unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <div className={classes.root}>
            <Grid container direction="row" justify="center" alignItems="center">
                <div style={{display: "grid", placeItems: "center"}} >
                    <Grid item xs={6}>
                        <Card variant="outlined" style={{marginTop: "5%"}}>
                            <CardContent>
                                <Grid
                                    container
                                    direction="row"
                                    alignItems="center"
                                >
                                    <Grid item xs={12}>
                                        <AppBar
                                            position="static"
                                            style={{background: "lightpink", alignItems: "center"}}
                                        >
                                        </AppBar>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Stepper activeStep={activeStep} className={classes.stepper}>
                                            {steps.map((label, index) => {
                                                const stepProps = {};
                                                const labelProps = {};
                                                if (isStepOptional(index)) {
                                                    labelProps.optional = (
                                                        <Typography variant="caption"></Typography>
                                                    );
                                                }
                                                if (isStepSkipped(index)) {
                                                    stepProps.completed = false;
                                                }
                                                return (
                                                    <Step key={label} {...stepProps}>
                                                        <StepLabel {...labelProps}>{label}</StepLabel>
                                                    </Step>
                                                );
                                            })}
                                        </Stepper>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div className={classes.actions}>
                                            {activeStep === steps.length ? (
                                                <div>
                                                    <Typography
                                                        className={classes.instructions}
                                                    ></Typography>
                                                    <Button
                                                        onClick={handleReset}
                                                        className={classes.button}
                                                    >
                                                        Reset
                                                    </Button>
                                                </div>
                                            ) : (
                                                <div>
                                                    <Typography
                                                        className={classes.instructions}
                                                        style={{height: "350px"}}
                                                    >
                                                        {getStepContent(activeStep)}
                                                        <br/>
                                                    </Typography>
                                                    <div className={classes.actions}>
                                                        <Button
                                                            disabled={activeStep === 0}
                                                            onClick={handleBack}
                                                            className={classes.button}
                                                        >
                                                            Back
                                                        </Button>

                                                        <Button
                                                            variant="contained"
                                                            style={{background: "#2E3B55", color: "#ffffff"}}
                                                            onClick={handleNext}
                                                            className={classes.button}
                                                        >
                                                            {activeStep === steps.length - 1
                                                                ? "Finish"
                                                                : "Next"}
                                                        </Button>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                </div>
            </Grid>
        </div>
    );
}