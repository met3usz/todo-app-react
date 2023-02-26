import Input from '../Input';
import searchQueryParamName from '../searchQueryParamName';
import { SearchWrapper } from './styled';
import {
  useQueryParameters,
  useReplaceQueryParameters,
} from '../queryParameters';

const Search = () => {
  const query = useQueryParameters(searchQueryParamName);
  const replaceQueryParameters = useReplaceQueryParameters();

  const onInputChange = ({ target }) => {
    replaceQueryParameters({
      key: searchQueryParamName,
      value: target.value.trim() !== '' ? target.value : undefined,
    });
  };

  return (
    <SearchWrapper>
      <Input
        placeholder="Filtruj zadania"
        value={query || ''}
        onChange={onInputChange}
      />
    </SearchWrapper>
  );
};

export default Search;
