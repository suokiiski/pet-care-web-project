import React, { Component } from "react";
import "../styles/Modal.css";

const STATE = {
  login: "",
  password: "",
  tel: "",
  agreed: false,
  cat: true,
};

class AddNewArticle extends Component {
  state = {
    ...STATE,
  };

  // * Отвечает за обновление состояния
  handleChange = ({ target }) => {
    const { name, value, checked, type } = target;
    // Если тип элемента checkbox, берем значение checked,
    // в противном случае value
    this.setState({ [name]: type === "checkbox" ? checked : value });
  };

  // * Вызывается при отправке формы
  handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(`Signed up as: ${this.state.login}`);
    console.log(this.state);
    // Проп который передается форме для вызова при сабмите
    this.props.onSubmit({ ...this.state });
    this.props.onClose();
    this.setState({ ...STATE });
    localStorage.setItem("login", this.state.login);
  };

  render() {
    const { login, password, agreed, tel, cat } = this.state;

    return (
      <form id="new_article" onSubmit={this.handleSubmit}>
        <label className="label">
          Name
          <input
            type="text"
            placeholder="Enter login"
            name="login"
            value={login}
            onChange={this.handleChange}
          />
        </label>
        <label className="label">
          Tel
          <input
            type="tel"
            placeholder="Enter tel"
            name="tel"
            value={tel}
            onChange={this.handleChange}
          />
        </label>
        <label className="label">
          Password
          <input
            type="password"
            placeholder="Enter password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
        </label>

        {/* <label class="switch label">
          <input type="checkbox" />
          <p> Cat or dog</p>
          <span class="slider round"></span>
        </label> */}

        <textarea
          name="article"
          form="new_article"
          placeholder="Enter text here..."
          className="label textarea"
        ></textarea>

        <label className="label">
          Agree to terms
          <input
            name="agreed"
            type="checkbox"
            checked={agreed}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit" disabled={!agreed}>
          Sign up as <b>{login}</b>
        </button>
      </form>
    );
  }
}
export default AddNewArticle;
