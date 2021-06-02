import { useState, useEffect } from 'react';

import { api } from 'services/api';
import SearchBar from 'components/SearchBar';
import ToolCard from 'components/ToolCard';
import Spinner from 'components/Spinner';
import Checkbox from 'components/Checkbox';
import Toast from 'components/Toast';
import Button from 'components/Button';
import AddNewToolModal from 'components/Modal/AddNewToolModal';

import * as S from './styles';

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
  const [isTagSelected, setIsTagSelected] = useState(false);
  const [tools, setTools] = useState<ToolProps[]>([]);
  const [isNewToolModalOpen, setIsNewToolModalOpen] = useState(false);

  const getTools = async () => {
    setLoading(true);
    const { data } = await api.get('tools');
    setTools(data);
    setLoading(false);
  };

  useEffect(() => {
    getTools();
  }, []);

  useEffect(() => {
    const getQueryTools = async () => {
      setLoading(true);
      if (isTagSelected) {
        const { data } = await api.get('tools', {
          params: {
            tags_like: query,
          },
        });
        setTools(data);
      } else {
        const { data } = await api.get('tools', {
          params: {
            q: query,
          },
        });
        setTools(data);
      }
      setLoading(false);
    };

    getQueryTools();
  }, [query, isTagSelected]);

  return (
    <S.Container>
      <Toast />

      <h1>Vuttr</h1>
      <h3>Very Useful Tools to Remember</h3>

      <S.Actions>
        <SearchBar query={query} setQuery={setQuery} />
        <Checkbox
          label="Search in tags only"
          name="searchTags"
          checked={isTagSelected}
          onChange={() => setIsTagSelected(!isTagSelected)}
        />
        <Button onClick={() => setIsNewToolModalOpen(true)}>Add Tool</Button>
      </S.Actions>

      {loading ? (
        <Spinner />
      ) : tools.length === 0 ? (
        <S.EmptyState>Your search returned no results!</S.EmptyState>
      ) : (
        tools.map((tool) => {
          return <ToolCard key={tool.id} tool={tool} getTools={getTools} />;
        })
      )}

      <AddNewToolModal
        display={isNewToolModalOpen}
        close={() => setIsNewToolModalOpen(false)}
        getTools={getTools}
      />
    </S.Container>
  );
};

export default Home;
