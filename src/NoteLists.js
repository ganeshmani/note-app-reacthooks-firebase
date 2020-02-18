import React, { useState, useEffect } from "react";
import styled from "styled-components";
import firebase from "./firebase";

const ListsDiv = styled.div`
  width: 40%;
  height: 100%;
  background: #dedede;
  margin: 30px auto;
  padding: 20px;
`;

const ListItemDiv = styled.div`
  background: #b2c4db;
  border-radius: 5px;
  position: relative;
`;

const ListTitleDiv = styled.div`
  font-size: 24px;
  color: black;
  font-weight: bold;
  margin: 3px;
`;

const ListItemDetailDiv = styled.p`
  font-size: 18px;
  color: black;
  margin: 3px;
  max-height: 80px;
  overflow: auto;
`;

const ListItemDeleteButton = styled.button`
  border-radius: 5px;
  background: #c26c61;
  color: white;
  position: absolute;
  width: 15px;
  height: 15px;
  top: 5px;
  right: 10px;
  outline: none;
`;

function useLists() {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection("notes")
      .onSnapshot(snapshot => {
        const lists = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        setLists(lists);
      });
  }, []);

  return lists;
}

const NoteLists = () => {
  const lists = useLists();

  const handleOnDelete = id => {
    firebase
      .firestore()
      .collection("notes")
      .doc(id)
      .delete();
  };

  return (
    <ListsDiv>
      {lists.map(list => {
        return (
          <ListItemDiv>
            <ListTitleDiv>{list.title}</ListTitleDiv>
            <ListItemDetailDiv>{list.body}</ListItemDetailDiv>
            <ListItemDeleteButton onClick={() => handleOnDelete(list.id)} />
          </ListItemDiv>
        );
      })}
    </ListsDiv>
  );
};

export default NoteLists;
