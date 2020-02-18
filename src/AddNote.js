import React, { useState } from "react";
import styled from "styled-components";
import firebase from "./firebase";
const AddNoteDiv = styled.div`
  display: flex;
  width: 40%;
  flex-direction: column;
  margin: 30px auto;
  padding: 5px;
`;

const InputTitle = styled.input`
  padding: 0.5em;
  border: none;
  background: #f4f4;
  margin-bottom: 10px;
  border-radius: 3px;
`;

const BodyTextArea = styled.textarea`
  padding: 0.5em;
  border: none;
  height: 80px;
  background: #f4f4;
  margin-bottom: 10px;
  border-radius: 3px;
`;

const Button = styled.div`
  background: blue;
  color: white;
  font-size: 1em;
  padding: 10px;
  cursor: pointer;
  border-radius: 3px;
`;

const AddNote = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addNote = () => {
    firebase
      .firestore()
      .collection("notes")
      .add({
        title,
        body
      });

    setTitle("");
    setBody("");
  };

  return (
    <AddNoteDiv>
      <InputTitle value={title} onChange={e => setTitle(e.target.value)} />
      <BodyTextArea value={body} onChange={e => setBody(e.target.value)} />
      <Button onClick={addNote}>Add Note</Button>
    </AddNoteDiv>
  );
};

export default AddNote;
