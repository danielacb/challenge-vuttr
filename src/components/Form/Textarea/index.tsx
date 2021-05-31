import { useForm } from 'react-hook-form';

import * as S from './styles';

type TextareaProps = {
  name: string;
  id?: string;
  placeholder: string;
  label?: string;
  rows?: number;
  required?: boolean;
  error?: boolean;
  errorMessage: string | undefined;
  register: ReturnType<typeof useForm>['register'];
};

const Textarea: React.FC<TextareaProps> = ({
  name,
  id,
  placeholder,
  label,
  rows,
  required,
  error,
  errorMessage,
  register,
}) => {
  return (
    <S.Container>
      {label && (
        <S.Label>
          {label}
          {required && <span className={error ? 'error' : 'default'}>*</span>}
        </S.Label>
      )}
      <S.Textarea
        id={id ? id : name}
        placeholder={placeholder}
        {...register(name, { required: required })}
        className={error ? 'error' : 'default'}
        rows={rows ? rows : 4}
      />
      {error && error && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
    </S.Container>
  );
};

export default Textarea;
