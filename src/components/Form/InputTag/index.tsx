import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import ReactTagInput from '@pathofdev/react-tag-input';

import * as S from './styles';

type InputTagProps = {
  name: string;
  placeholder: string;
  label?: string;
  required?: boolean;
  error?: boolean;
  errorMessage: string | undefined;
  setValue: ReturnType<typeof useForm>['setValue'];
  register: ReturnType<typeof useForm>['register'];
};

const InputTag: React.FC<InputTagProps> = ({
  name,
  placeholder,
  label,
  required,
  error,
  errorMessage,
  setValue,
  register,
}) => {
  const [tags, setTags] = useState<Array<string>>([]);

  useEffect(() => {
    setValue(name, tags);
  }, [tags, name, setValue]);

  return (
    <S.Container className={error ? 'error' : 'default'}>
      <S.Label>
        {label}
        {required && <span className={error ? 'error' : 'default'}>*</span>}
      </S.Label>
      <ReactTagInput
        removeOnBackspace={true}
        placeholder={placeholder}
        tags={tags}
        onChange={(newTags: Array<string>) => setTags(newTags)}
      />
      {error && error && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
      <input
        type="text"
        {...register(name, { required: required })}
        value={tags}
        className="fakeInput"
      />
    </S.Container>
  );
};

export default InputTag;
