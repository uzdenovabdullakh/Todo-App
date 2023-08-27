import React, { useRef } from 'react';

function Modal(props) {
    const categoryRef = useRef();
    const nameRef = useRef();
    const captionRef = useRef();

    const {closeModal} = props;

    function handleClickClose(){
        closeModal();
    }

    function handleClickAdd(){
        if (nameRef.current.value!==''){
            let todo = {
                name: nameRef.current.value,
                category: categoryRef.current.value
            };
            localStorage.setItem('newTodos', JSON.stringify(todo))
            closeModal();
            captionRef.current.innerHTML = ""
            window.location.reload();
        }
        else {
            captionRef.current.innerHTML = 'Input task name!';
        }
    }

  return (
    <div className="modal">
        <div className="modal-content">
            <div className="close-modal-btn" type="button" onClick={handleClickClose}>&times;</div>
            <div className="modal-container">
                <h3 className="modal-title">Add new task</h3>
                <div className="modal-body">
                    <input type="text" className="modal-body__task-name-input" ref={nameRef}/>
                    <select className="modal-body__task-category-input" ref={categoryRef}>
                        <option>💰 Finance</option>
                        <option>💞 Wedding</option>
                        <option>🖥️ Freelance</option>
                        <option>🛒 Shopping List</option>
                    </select>
                    <p ref={captionRef}></p>
                </div>
                <button className="modal-add-task-btn" onClick={handleClickAdd}>Add</button>
            </div>
        </div>
    </div>
  );
}

export default Modal;