import { useForm } from 'react-hook-form';

import * as S from './styles';

type InputTextProps = {
  name: string;
  id?: string;
  placeholder: string;
  label?: string;
  required?: boolean;
  error?: boolean;
  errorMessage: string | undefined;
  register: ReturnType<typeof useForm>['register'];
};

const InputText: React.FC<InputTextProps> = ({
  name,
  id,
  placeholder,
  label,
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
      <S.InputText
        type={'text'}
        id={id ? id : name}
        placeholder={placeholder}
        {...register(name, { required: required })}
        className={error ? 'error' : 'default'}
      />
      {error && error && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
    </S.Container>
  );
};

export default InputText;
