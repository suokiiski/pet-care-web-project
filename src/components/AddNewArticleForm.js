import React, { Component } from "react";
import { Input, Button } from "@mui/material";
import Stack from "@mui/material/Stack";
import AntSwitch from "./Switch";
import Typography from "@mui/material/Typography";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import SendIcon from "@mui/icons-material/Send";
//styles
import "../styles/Modal.css";
import "../styles/AddNewArticle.css";

const STATE = {
    name: "",
    tel: "",
    text: "",
    agreed: false,
    cat: false,
    img: "",
    omistaja: false,
    username: localStorage.getItem("login"),
};

/**
 * Luokka hoitaa uusien ilmoitusten lisäämistä
 */
class AddNewArticle extends Component {
    state = {
        ...STATE,
    };

    /**
     * Käsittelee muutoksia joita käyttäjä tekee ilmoituslomakkeen kenttiin
     * @param target tehty muutos
     */
    // * new state
    handleChange = ({ target }) => {
        const { name, value, checked, type } = target;

        //checked ? checked : value
        this.setState({ [name]: type === "checkbox" ? checked : value });
    };

    /**
     * Hoitaa ilmoituksen lähettämistä
     * @param evt tapahtuma jonka yhteydessä metodia kutsutaan (lomakkeen lälhettäminen)
     */
    // * form submit
    handleSubmit = (evt) => {
        evt.preventDefault();

        this.props.onSubmit({ ...this.state });
        this.props.onClose();
        this.setState({ ...STATE });
        localStorage.setItem("name", this.state.name);
    };

    render() {
        const { name, tel, text, agreed, cat, img, omistaja } = this.state;

        return (
            <form
                id="new_article"
                onSubmit={this.handleSubmit}
                className="form_add_new_article"
            >
                <Input
                    fullWidth
                    required
                    id="outlined-required"
                    label="Please write your name"
                    placeholder="Write your name"
                    variant="standard"
                    name="name"
                    value={name}
                    pattern="[A-Za-z]"
                    onChange={this.handleChange}
                />
                <Input
                    fullWidth
                    required
                    id="outlined-required"
                    label="Please write your phone nr"
                    placeholder="Write your phone nr"
                    variant="standard"
                    name="tel"
                    value={tel}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    onChange={this.handleChange}
                />

                <Input
                    fullWidth
                    required
                    id="outlined-required"
                    label="Please input your pet img"
                    placeholder="Please input your pet image address"
                    variant="standard"
                    name="img"
                    value={img}
                    onChange={this.handleChange}
                />

                <Input
                    type="text"
                    fullWidth
                    id="standard-multiline-static"
                    multiline
                    rows={4}
                    variant="standard"
                    placeholder="Enter text here..."
                    class="label textarea"
                    name="text"
                    value={text}
                    onChange={this.handleChange}
                />

                <Stack direction="row" spacing={1} alignItems="center">
                    <Typography name={cat}>Dog</Typography>
                    <AntSwitch
                        inputProps={{ "aria-label": "ant design" }}
                        name="cat"
                        value={cat}
                        onChange={this.handleChange}
                    />
                    <Typography>Cat</Typography>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                    <Typography>Hoitaja</Typography>
                    <AntSwitch
                        inputProps={{ "aria-label": "ant design" }}
                        name="omistaja"
                        value={omistaja}
                        onChange={this.handleChange}
                    />
                    <Typography>Omistaja</Typography>
                </Stack>

                <FormControlLabel
                    required
                    control={<Checkbox color="success" />}
                    label="Agree to terms and conditions"
                    name="agreed"
                    type="checkbox"
                    checked={agreed}
                    color="success"
                    onChange={this.handleChange}
                />

                <Button
                    variant="contained"
                    color="success"
                    disabled={!agreed}
                    type="submit"
                    endIcon={<SendIcon />}
                    className="form_submit_btn"
                >
                    Send
                </Button>
            </form>
        );
    }
}
export default AddNewArticle;
