import React from "react";

const Note = (props) => {
  const updateTitle = (e) => {
    const updatedValue = e.target.value;
    const editedId = props.note.id;
    props.onType(editedId, "title", updatedValue);
  };
  const updateDescription = (e) => {
    const updatedValue = e.target.value;
    const editedId = props.note.id;
    props.onType(editedId, "description", updatedValue);
  };

  const clickDelete = () => props.removeNote(props.note.id);

  return (
    <li className="note">
      {/* {console.log(props)} */}
      <input
        className="note__title"
        type="text"
        placeholder="Title"
        id={props.note.id}
        value={props.note.title}
        onChange={updateTitle}
      />
      <textarea
        className="note__description"
        placeholder="Description..."
        value={props.note.description}
        onChange={updateDescription}
      />
      <span className="note__delete" onClick={clickDelete}>
        X
      </span>
    </li>
  );
};

export default Note;