import React, { Component } from "react";
import ArticleList from "./ArticleList";
import Modal from "./Modal";
import AddNewArticle from "./AddNewArticle";

class Main extends Component {
  state = {
    login: false,
    showModal: false,
  };
  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };
  render() {
    const { showModal, login } = this.state;
    return (
      <div className="main_container">
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <button onClick={this.toggleModal}>X</button>
            <AddNewArticle
              onSubmit={this.handleSubmit}
              onClose={this.toggleModal}
            />

            {!login && (
              <button className="button" onClick={this.toggleModal}>
                {!showModal ? "Open registration form" : ""}
              </button>
            )}
          </Modal>
        )}

        <button className="button" onClick={this.toggleModal}>
          AddNewArticle
        </button>
        <ArticleList items={this.props.data} />
      </div>
    );
  }
}

export default Main;
