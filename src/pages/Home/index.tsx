import { useState } from 'react';

import SearchBar from 'components/SearchBar';
import * as S from './styles';

const Home: React.FC = () => {
  const [query, setQuery] = useState('');

  return (
    <S.Container>
      <h1>Vuttr</h1>
      <h3>Very Useful Tools to Remember</h3>

      <S.Actions>
        <SearchBar query={query} setQuery={setQuery} />
      </S.Actions>

      <p>{query}</p>
    </S.Container>
  );
};

export default Home;
