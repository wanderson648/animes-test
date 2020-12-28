import React, { useState, FormEvent } from 'react';
import api from '../../services/api';

import { Title, Form, Repository, Rodape } from './styles';

import logo from '../../assets/anime.png';
interface Repository {
  mal_id: number;
  image_url: string;
  title: string;
  episodes: number;
  synopsis: string;
  score: number;
  type: string;
}


const Dashboard: React.FC = () => {
  // const [isLoading, setIsLoading] = useState(false);
  const [newRepo, setNewRepo] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>([]);

  // function handleSearchChange(event: FormEvent<HTMLFormElement>) {
  //   const { value } = event.target;
  //   setNewRepo(value.trimLeft());
  // }

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>
    ): Promise<void> {
      event.preventDefault();
      // setIsLoading(true);

      const response = await api.get(`search/anime?q=${newRepo}&limit=10`);

      const repository = response.data.results;
      console.log(repository);

      setRepositories(repository);

      setNewRepo('');

      // setIsLoading(false);
  }

  return (
    <>
      <Title>
        <img src={logo} alt=""/>
      </Title>

      <Form onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
          autoFocus={true}
          placeholder="Digite o nome do anime" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repository>
        {repositories.map((repository) => (
          <a key={repository.mal_id}
            href={`https://nowanimes.com/?s=${repository.title.toLocaleLowerCase()}&tipo=video`}
             target="_blank" rel="noreferrer">
            <img src={repository.image_url} alt={repository.title} />

            <div>
              <strong>{repository.title}</strong>
              <p>{repository.synopsis}</p>
              <p>Type: {repository.type}</p>
              <p>Ep: {repository.episodes}</p>
              <p>Score: {repository.score}</p>
            </div>

            {/* <FiChevronRight size={20} /> */}
          </a>
        ))}
      </Repository>

      <Rodape>
          <div>
            <p>Wanderson Oliveira &copy; 2020</p>
          </div>
      </Rodape>
    </>
  )
};

export default Dashboard;

