import React, { Component } from "react";
import ArticleList from "./ArticleList";
import Modal from "./Modal";
import AddNewArticleForm from "./AddNewArticleForm";
//styles
import "../styles/Main.css";
import "../styles/scrollbar.css";
import shortid from "shortid";
import posterService from "../services/posters";

class Main extends Component {
  componentDidUpdate(prevProps) {
    posterService.getAll().then((resp) => {
      this.setState(({ articles }) => ({
        articles: resp.data,
      }));
    });
  }
  state = {
    login: false,
    showModal: false,
    articles: this.props.data,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  addNewArticle = (data) => {
    const { name, tel, text, cat, img, omistaja } = data;
    const article = {
      id: shortid.generate(),
      nimi: name,
      tel,
      text,
      cat,
      src: img,
      omistaja,
    };

    this.setState(({ articles }) => ({
      articles: [...articles, this.props.data],
    }));

    posterService.create(article);
  };

  deleteArticle = (articleId) => {
    if (window.confirm("Do you really want to delete this article?")) {
      this.setState(() => ({
        articles: this.props.data.filter((article) => article.id !== articleId),
      }));

      posterService.remove(articleId);
    } else {
      return;
    }

    // posters.deleteById(articleId);
    // console.log(article);
  };
  render() {
    const { showModal, articles } = this.state;

    // console.log(posters);
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
        <ArticleList
          items={this.state.articles}
          deleteArticle={this.deleteArticle}
        />
      </div>
    );
  }
}

export default Main;
