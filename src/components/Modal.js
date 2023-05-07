import React, { PureComponent } from "react";
import { createPortal } from "react-dom";
import "../styles/Modal.css";

const modalRoot = document.querySelector("#modal-root");

/**
 * Vastaa lisäämis-/muokkauslomakkeiden renderöinnistä sekä määrittää niiden käyttäytymistä
 */
class Modal extends PureComponent {

  /**
   * Kutsutaan kun komponentti on luotu. Lisää tapahtumakyuuntelijan ikkunalle.
   * Tapahtumakuuntelija on vastuussa ESC-näppäimen painamisesta.
   */
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  /**
   * Kutsutaan kun komponentti otetaan pois käytöstä ja poistaa aiemmin lisätyn
   * tapahtumakuuntelijan näppäimistön painallukselle.
   */
  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  /**
   * Metodi, joka käsittelee näppäimistön painallukset, jotka on rekisteröity
   * tapahtumakuuntelijaan. Jos on painettu ESC-näppäintä, modaali-ikkuna sulkeutuu.
   */
  handleKeyDown = (e) => {
    if (e.code === "Escape") {
      this.props.onClose();
    }
  };

  /**
   * Metodi, joka käsittelee tapahtuman, kun modaali-ikkunan ulkopuolista
   * aluetta klikataan hiirellä. Kutsuu funktion, joka sulkee modaali-ikkunan.
   */
  handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  /**
   * Luo modaali-ikkunan rakenteen, jossa on tausta, modaali-ikkuna ja
   * modaali-ikkunan sisältö.
   * @returns {React.ReactNode} Modaali-ikkunan rakenne.
   */
  render() {
    return createPortal(
      <div className="ModalBackdrop" onClick={this.handleBackdropClick}>
        <div className="ModalContent">{this.props.children}</div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;
