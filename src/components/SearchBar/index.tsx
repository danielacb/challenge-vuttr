import { ChangeEvent } from 'react';

import { IconClose, IconSearch } from 'components/Icons';
import * as S from './styles';

type SearchBarProps = {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
};

const SearchBar: React.FC<SearchBarProps> = ({ query, setQuery }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const resetQuery = () => {
    setQuery('');
  };

  return (
    <S.Container>
      <IconSearch />
      <S.Input
        type="text"
        name="searchBar"
        id="searchBar"
        value={query}
        placeholder="Digite o que está procurando…"
        onChange={handleChange}
      />

      <S.ResetSearch type="reset" onClick={resetQuery}>
        <IconClose />
      </S.ResetSearch>
    </S.Container>
  );
};

export default SearchBar;
