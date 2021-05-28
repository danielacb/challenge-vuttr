import { useState, useEffect } from 'react';

import { api } from 'services/api';
import SearchBar from 'components/SearchBar';
import ToolCard from 'components/ToolCard';

import * as S from './styles';
import Spinner from 'components/Spinner';

type ToolProps = {
  id: string;
  title: string;
  description: string;
  link: string;
  tags: Array<string>;
};

const Home: React.FC = () => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [tools, setTools] = useState<ToolProps[]>([]);

  const getTools = async () => {
    setLoading(true);
    const { data } = await api.get('tools');
    setTools(data);
    setLoading(false);
  };

  useEffect(() => {
    getTools();
  }, []);

  return (
    <S.Container>
      <h1>Vuttr</h1>
      <h3>Very Useful Tools to Remember</h3>

      <S.Actions>
        <SearchBar query={query} setQuery={setQuery} />
      </S.Actions>

      {loading ? (
        <Spinner />
      ) : (
        tools.map((tool) => {
          return <ToolCard key={tool.id} tool={tool} />;
        })
      )}
    </S.Container>
  );
};

export default Home;
