import React from "react";
import {
    Card,
    CardContent,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup, FormHelperText,
    FormLabel
} from "@mui/material";
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
    pos: {
        marginBottom: 12,
    },
    text: {
        width: 350,
        margin: "10px",
    },
});

export default function PaymentMode() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        card: true,
        cod: false,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    const { card, cod } = state;
    const error = [card, cod].filter((v) => v).length !== 2;
    return (
        <Card className={classes.root}>
            <CardContent>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend">Chế độ thanh toán</FormLabel>
                    <FormGroup>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={card}
                                    onChange={handleChange}
                                    name="card"
                                    color="primary"
                                />
                            }
                            label="Thẻ tín dụng / Thẻ ghi nợ"
                        />
                        <FormControlLabel
                            disabled
                            control={
                                <Checkbox checked={cod} onChange={handleChange} name="cod" />
                            }
                            label="COD (Thu tiền khi nhận hàng) *"
                        />
                    </FormGroup>
                    <FormHelperText>* Không hợp lệ </FormHelperText>
                </FormControl>
            </CardContent>
        </Card>
    );
}