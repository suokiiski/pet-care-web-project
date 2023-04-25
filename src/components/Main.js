import React, { Component } from "react";
import ArticleList from "./ArticleList";
import Modal from "./Modal";
import AddNewArticle from "./AddNewArticle";
//styles
import "../styles/Main.css";
import "../styles/scrollbar.css";

class Main extends Component {
  state = {
    login: false,
    showModal: false,
  };
  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };
  render() {
    const { showModal } = this.state;
    return (
      <div className="main_container">
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <button onClick={this.toggleModal} className="close-btn">
              X
            </button>
            <AddNewArticle
              onSubmit={this.handleSubmit}
              onClose={this.toggleModal}
            />
          </Modal>
        )}

        <button className="add-new-article-btn" onClick={this.toggleModal}>
          AddNewArticle
        </button>
        <ArticleList items={this.props.data} />
      </div>
    );
  }
}

export default Main;
