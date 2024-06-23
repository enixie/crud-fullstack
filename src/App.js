import GlobalStyle from "./styles/global";
import styled from "styled-components";
import Form from "./Form.js";
import Grid from "./components/Grid.js";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Title = styled.h2``;

function App() {
  const [users, setUsers] = useState([]);
  const [onEdit, setOnEdit] = useState([null]);

  const getUsers = async () => {
    try {
      const res = await axios.get("http://localhost:8800");
      setUsers(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, [setUsers]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8800/${id}`);
      toast.success("Usuário deletado com sucesso");
      getUsers();
    } catch (error) {
      toast.error("Erro ao deletar o usuário");
    }
  };
  
  return (
    <>
      <Container>
        <Title>USUÁRIOS</Title>
        <Form />
        <Grid users={users} handleDelete={handleDelete} />
      </Container>
      <ToastContainer autoClose={3000} position="bottom-left" />
      <GlobalStyle />
    </>
  );
}

export default App;