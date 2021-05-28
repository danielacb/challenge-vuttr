import * as S from './styles';

type CheckboxProps = {
  label: string;
  name: string;
  id?: string;
  value?: string;
  checked?: boolean;
  onChange: () => void;
};

const Checkbox: React.FC<CheckboxProps> = ({ label, name, id, value, checked, onChange }) => {
  return (
    <S.Container>
      <S.Input
        type="checkbox"
        name={name}
        value={value ? 'value' : name}
        id={id ? id : name}
        checked={checked}
        onChange={onChange}
      />
      <S.Checkmark />
      <S.Label htmlFor={name}>{label}</S.Label>
    </S.Container>
  );
};

export default Checkbox;
