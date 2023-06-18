
import TickIcon from './TickIcon.js';
import ProgressBar from './ProgressBar.js';
import { useState } from 'react';
import Modal from './Modal.js';
import { response } from 'express'

const ListItems = ({ task, getData }) => {
  const [showModal, setShowModal] = useState(false);

  const deleteItem = async () => {
    try {
      await fetch(`http://localhost:8000/todos/${task.id}`, {
        method: 'DELETE'
      });

      if (response.status === 200) {
        getData();
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <li className="list-item">
      <div className="info-container">
        <TickIcon />
        <p className="task-title">{task.title}</p>
        <ProgressBar progress={task.progress} />
      </div>

      <div className="button-container">
        <button className="edit" onClick={() => setShowModal(true)}>
          EDIT
        </button>
        <button className="delete" onClick={deleteItem}>
          DELETE
          </button>
      </div>
      {showModal && <Modal mode={'edit'} setShowModal={setShowModal} getData={getData} task={task} />}
    </li>
  );
};

export default ListItems;
