import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form action="">
        <input placeholder="Digite o nome do respositório!" />
        <button type="submit">Pesquisar</button>
      </Form>
      <Repositories>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/45233696?s=460&u=3d6e00bcaf41ebc95a6affb75f4a5f1988662df2&v=4"
            alt="Thiago"
          />
          <div>
            <strong>Thiago Fidelis</strong>
            <p>repositórios</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/45233696?s=460&u=3d6e00bcaf41ebc95a6affb75f4a5f1988662df2&v=4"
            alt="Thiago"
          />
          <div>
            <strong>Thiago Fidelis</strong>
            <p>repositórios</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/45233696?s=460&u=3d6e00bcaf41ebc95a6affb75f4a5f1988662df2&v=4"
            alt="Thiago"
          />
          <div>
            <strong>Thiago Fidelis</strong>
            <p>repositórios</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
