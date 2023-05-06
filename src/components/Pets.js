import React, { Component } from "react";
import Modal from "./Modal";
import ArticleList from "./ArticleList";
import shortid from "shortid";
import posterService from "../services/posters";
//styles
import "../styles/Main.css";
import "../styles/scrollbar.css";
import AddNewArticleForm from "./AddNewArticleForm";


/*
const debounce = require("lodash.debounce");

window.onscroll = debounce(scrollFunction, 250);

function scrollFunction() {
    const myButton = document.getElementById("myBtn");
    if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
    ) {
        myButton.style.display = "block";
        myButton.classList.add("animate__bounceInDown");
        myButton.classList.remove("animate__bounceOutUp");
    } else {
        myButton.style.display = "none";
        myButton.classList.remove("animate__bounceInDown");
    }
}

function onScrollToTop() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
}
function onScrollToBottom() {
    window.scrollTo({
        bottom: 0,
        right: 0,
        behavior: "smooth",
    });
}
*/

class Pets extends Component {/*
    componentDidUpdate() {
        posterService.getAll().then((resp) => {
            this.setState(() => ({
                articles: resp.data,
            }));
        });
    }
    state = {
        id: "",
        login: false,
        showModal: false,
        articles: this.props.data,
        editModalOpen: false,
        favourites: [],
    };

    closeModal = () => {
        this.setState(() => ({
            showModal: false,
            editModalOpen: false,
        }));
    };
    openModal = () => {
        this.setState(() => ({
            showModal: true,
        }));
    };

    //poista username jos ei toimi
    addNewArticle = (data) => {
        const { name, tel, text, cat, img, omistaja, username } = data;
        const article = {
            id: shortid.generate(),
            nimi: name,
            tel,
            text,
            cat,
            src: img,
            omistaja,
            username,
        };

        this.setState(({ articles }) => ({
            articles: [...articles, this.props.data],
            showModal: false,
            editModalOpen: false,
        }));

        onScrollToBottom();

        posterService.create(article);
    };

    editArticle = (data) => {
        const { name, tel, text, cat, img, omistaja, username } = data;
        const id = this.state.id;
        const newArticle = {
            id,
            nimi: name,
            tel,
            text,
            cat,
            src: img,
            omistaja,
            username,
        };

        posterService.update(id, newArticle);

        this.setState(() => ({
            editModalOpen: false,
            showModal: false,
            articles: this.props.data.map((item) =>
                item.id === id ? newArticle : item
            ),
        }));
    };

    deleteArticle = (articleId) => {
        console.log(articleId);
        if (window.confirm("Do you really want to delete this article?")) {
            this.setState(() => ({
                articles: this.props.data.filter((article) => article.id !== articleId),
            }));

            posterService.remove(articleId);

            onScrollToTop();
        } else {
            return;
        }
    };

    handleOpenEditModal = (id) => {
        this.setState(() => ({
            editModalOpen: true,
            showModal: false,
            id,
        }));
    };

    saveOnFavoutires = (articleId) => {
        alert("Saved successfully!");

        this.setState(({ favourites }) => ({
            editModalOpen: false,
            showModal: false,
            favourites: [...favourites, articleId],
        }));
    };

        render() {
            const { showModal, editModalOpen } = this.state;

            if(localStorage.getItem('status') === null) {
                return (
                    <div className="main_container">
                        {showModal && (
                            <Modal onClose={this.closeModal}>
                                <button onClick={this.closeModal} className="close-btn">
                                    X
                                </button>
                                <AddNewArticleForm
                                    onClose={this.closeModal}
                                    onSubmit={this.addNewArticle}
                                />
                            </Modal>
                        )}
                        <ArticleList items={this.props.data} />
                        <span
                            className="up-button animate__animated"
                            id="myBtn"
                            rel="noopener noreferrer"
                            onClick={onScrollToTop}
                        >
              &#11165;
            </span>
                    </div>
                )
            }
            return (
                <div className="main_container">
                    {showModal && (
                        <Modal onClose={this.closeModal}>
                            <button onClick={this.closeModal} className="close-btn">
                                X
                            </button>
                            <AddNewArticleForm
                                onClose={this.closeModal}
                                onSubmit={this.addNewArticle}
                            />
                        </Modal>
                    )}

                    <ArticleList
                        items={this.state.articles}
                        deleteArticle={this.deleteArticle}
                        handleOpen={this.handleOpenEditModal}
                        saveOnFavoutires={this.saveOnFavoutires}
                    />
                    {editModalOpen && (
                        <Modal onClose={this.closeModal}>
                            <button onClick={this.closeModal} className="close-btn">
                                X
                            </button>
                            <AddNewArticleForm
                                onClose={this.closeModal}
                                onSubmit={this.editArticle}
                            />
                        </Modal>
                    )}

                    <span
                        className="up-button animate__animated"
                        id="myBtn"
                        rel="noopener noreferrer"
                        onClick={onScrollToTop}
                    >
              &#11165;
            </span>
                </div>
            );
        }*/
}

export default Pets