import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { Header, HepositoryInfo, Issues } from './styles';

import logo from '../../assets/logo.svg';


interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = ()  => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logo} alt="Github Explorer" />
        <Link to='/'>
          <FiChevronLeft />
          Voltar
        </Link>
      </Header>

      <HepositoryInfo>
        <header>
          <img src="https://avatars1.githubusercontent.com/u/62625309?s=460&u=ff8bc1eacb90d3135b28a5bf8e72f4a5d2966b51&v=4" alt=""/>
          <div>
            <strong>rocketseat/unform</strong>
            <p>descrição do repositorio</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1808</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>48</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>67</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </HepositoryInfo>

      <Issues>
          <Link to='adasdfa'>
            <div>
              <strong>asdfasdf</strong>
              <p>asdfasdf</p>
            </div>

            <FiChevronRight size={20} />
          </Link>
      </Issues>

    </>
  );
}

export default Repository;
