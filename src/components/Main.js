import React, { Component } from "react";
import ArticleList from "./ArticleList";
import Modal from "./Modal";
import AddNewArticleForm from "./AddNewArticleForm";
//styles
import "../styles/Main.css";
import "../styles/scrollbar.css";
import posters from "../services/posters";
import shortid from "shortid";
import { useState, useEffect } from "react";

class Main extends Component {
  state = {
    login: false,
    showModal: false,
    articles: [],
  };
  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  //poista username jos ei toimi
  addNewArticle = (data) => {
    console.log(data);
    const { articles } = this.state;
    const { name, tel, text, cat, img, omistaja, username } = data;
    const article = {
      id: shortid.generate(),
      nimi: name,
      tel,
      text,
      cat,
      img,
      omistaja,
      username
    };

    if (this.props.data.some(({ nimi }) => nimi === article.nimi)) {
      alert(`Sorry, ${name} already exists`);
      return;
    }

    this.setState(({ articles }) => ({
      articles: [...articles, this.props.data],
    }));

    // console.log(this.state.articles);
    posters.create(article);
    // this.state.articles.unshift(article);
  };

  render() {
    const { showModal } = this.state;
    // console.log(posters);
    if(localStorage.getItem('status') === null) {
      return (
          <div className="main_container">
            {showModal && (
                <Modal onClose={this.toggleModal}>
                  <button onClick={this.toggleModal} className="close-btn">
                    X
                  </button>
                  <AddNewArticleForm
                      onClose={this.toggleModal}
                      onSubmit={this.addNewArticle}
                  />
                </Modal>
            )}
            <ArticleList items={this.props.data} />
          </div>
      )
    }

    return (
      <div className="main_container">
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <button onClick={this.toggleModal} className="close-btn">
              X
            </button>
            <AddNewArticleForm
              onClose={this.toggleModal}
              onSubmit={this.addNewArticle}
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
