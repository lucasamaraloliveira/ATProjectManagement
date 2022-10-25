import { useEffect, useState } from "react";

import styles from "./Contacts.module.css";
import Input from "../../form/Input";
import SubmitButton from "../../form/SubmitButton";

const Contact = ({ handleSubmit, btnText, projectData }) => {
  const [project, setProject] = useState(projectData || {});
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);

  const submit = (e) => {
    e.preventDefault();
    handleSubmit(project);
  };

  function handleChange(e) {
    setProject({ ...project, [e.target.name]: e.target.value });
  }

  return (
    <form onSubmit={submit} className={styles.form}>
      <div>
        <h1>Contato</h1>
        <p>Entre em contato conosco através do formulário abaixo</p>
      </div>
      <Input
        type="text"
        text="Nome"
        name="name"
        placeholder="Insira o seu nome"
        handleOnChange={handleChange}
        value={project.name}
      />
      <Input
        type="email"
        text="Email"
        name="email"
        placeholder="Insira o seu email"
        handleOnChange={handleChange}
        value={project.name}
      />
      <Input
        type="phone"
        text="Celular"
        name="Celular"
        placeholder="Insira o seu telefone"
        handleOnChange={handleChange}
        value={project.name}
      />
      <label htmlFor="">Mensagem</label>
      <textarea
        text="Celular"
        name="Celular"
        id="Mensagem"
        placeholder="Insira sua mensagem"
        cols="30"
        rows="10"
      ></textarea>
      <div className={styles.form_submit}>
        <SubmitButton text="Enviar" />
      </div>
    </form>
  );
};

export default Contact;
