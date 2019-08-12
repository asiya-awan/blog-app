import React from 'react';
import Modal from 'react-modal';

const RemoveModal = (props) => (
  <Modal
    isOpen={!!props.selectedBlogToRemove}
    onRequestClose={props.handleClearSelectedBlogToRemove}
    contentLabel="Remove Blog"
    closeTimeoutMS={200}
    className="modal"
    ariaHideApp={false}
  >
    <h3 className="modal__title">Remove Blog</h3>
    {props.selectedBlogToRemove && <p className="modal__body">Do you want to remove your blog with id:{props.selectedBlogToRemove.id} and description: {props.selectedBlogToRemove.description}?</p>}
   <div className="buttons">
    <button className="button" onClick={props.handleConfirmRemove}>Yes</button>
    <button className="button button--secondary" onClick={props.handleClearSelectedBlogToRemove}>No</button>
   </div>
  </Modal>
);

export default RemoveModal;