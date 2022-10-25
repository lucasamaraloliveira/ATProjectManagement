import styles from "./Home.module.css";
import savings from "../../../img/savings.png";
import LinkButton from "../../layout/LinkButton";

const Home = () => {
  return (
    <section className={styles.home_container}>
      <h1>Bem vindo ao ATProjects</h1>
      <p>Comece a gerenciar os seus projetos agora mesmo!</p>
      <LinkButton to="/newproject" text="Criar Projeto" />
      <img src={savings} alt="Costs" />
    </section>
  );
};

export default Home;
