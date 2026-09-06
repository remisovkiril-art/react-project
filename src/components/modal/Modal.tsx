import type { ReactNode } from "react";
import { createPortal } from "react-dom";
import "./Modal.css";

interface ModalProps {
    open: boolean;
    onClose: () => void;
    children: ReactNode;
}

const Modal = ({ open, onClose, children }: ModalProps): React.JSX.Element | null => {
    const modalNode = document.getElementById("modal");

    if (!open || !modalNode) {
        return null;
    }

    return createPortal(
        <div>
            <div className="background" onClick={onClose} />
            <div className="modal">
                <button
                    type="button"
                    className="modal__close"
                    onClick={onClose}
                >
                    &times;
                </button>
                {children}
            </div>
        </div>,
        modalNode
    );
};

export default Modal;
