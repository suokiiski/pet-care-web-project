import React, { PureComponent } from "react";
import { createPortal } from "react-dom";
import styles from "../styles/Modal.css";

const modalRoot = document.querySelector("#modal-root");

class Modal extends PureComponent {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    if (e.code === "Escape") {
      this.props.onClose();
    }
  };
  handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div
        className={styles.ModalBackdrop}
        class="ModalBackdrop"
        onClick={this.handleBackdropClick}
      >
        <div className={styles.ModalContent} class="ModalContent">
          {this.props.children}
        </div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;
