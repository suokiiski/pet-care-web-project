import React, { Component } from "react";
import { TextField, Input, Button } from "@mui/material";
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
};

class AddNewArticle extends Component {
  state = {
    ...STATE,
  };

  // * new state
  handleChange = ({ target }) => {
    const { name, value, checked, type } = target;
    console.log(target.name);
    //checked ? checked : value
    this.setState({ [name]: type === "checkbox" ? checked : value });
  };

  // * form submit
  handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(`Signed up as: ${this.state.name}`);
    console.log(this.state);

    // this.props.onSubmit({ ...this.state });
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
          onChange={this.handleChange}
        />

        <Button
          component="label"
          className="add_new_img"
          variant="contained"
          color="success"
          size="small"
          name="img"
        >
          Upload File
          <input type="file" hidden />
        </Button>

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
          onchange="function(){alert('why does this not work')}()"
        />

        <Stack direction="row" spacing={1} alignItems="center" value={cat}>
          <Typography>Dog</Typography>
          <AntSwitch inputProps={{ "aria-label": "ant design" }} />
          <Typography>Cat</Typography>
        </Stack>
        <Stack direction="row" spacing={1} alignItems="center" value={cat}>
          <Typography>Hoitaja</Typography>
          <AntSwitch inputProps={{ "aria-label": "ant design" }} />
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
