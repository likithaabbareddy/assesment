import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

Modal.setAppElement("#root");


// class ModalData extends Component {
//   state = {  }
//   render() { 
//     return (  <h1>Test</h1>);
//   }
// }
 
// export default ModalData;

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  // console.log(props.value)
  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="App">
      <button onClick={toggleModal}>View User</button>

      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
      >
        <div>test</div>
        <button onClick={toggleModal}>Close</button>
      </Modal>
    </div>
  );
}