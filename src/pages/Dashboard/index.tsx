import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logo from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logo} alt="Github logo"/>
      <Title>Explore repositorioes no Github</Title>

       <Form>
          <input placeholder="Digite o nome do repositório"/>
          <button type="submit">Pesquisar</button>
       </Form>

       <Repositories>
         <a href="teste">
            <img src="https://avatars1.githubusercontent.com/u/62625309?s=460&u=ff8bc1eacb90d3135b28a5bf8e72f4a5d2966b51&v=4" alt="Wanderson Oliveira"/>
            <div>
              <strong>rocketseat/unform</strong>
              <p>Easy peasy highly scalable ReactJs & React Native forms</p>
            </div>

            <FiChevronRight size={20} />
         </a>

         <a href="teste">
            <img src="https://avatars1.githubusercontent.com/u/62625309?s=460&u=ff8bc1eacb90d3135b28a5bf8e72f4a5d2966b51&v=4" alt="Wanderson Oliveira"/>
            <div>
              <strong>rocketseat/unform</strong>
              <p>Easy peasy highly scalable ReactJs & React Native forms</p>
            </div>

            <FiChevronRight size={20} />
         </a>

         <a href="teste">
            <img src="https://avatars1.githubusercontent.com/u/62625309?s=460&u=ff8bc1eacb90d3135b28a5bf8e72f4a5d2966b51&v=4" alt="Wanderson Oliveira"/>
            <div>
              <strong>rocketseat/unform</strong>
              <p>Easy peasy highly scalable ReactJs & React Native forms</p>
            </div>

            <FiChevronRight size={20} />
         </a>
       </Repositories>
    </>
  )
}

export default Dashboard;
