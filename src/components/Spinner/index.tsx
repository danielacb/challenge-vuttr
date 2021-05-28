import * as S from './styles';

type SpinnerProps = {
  color?: string;
  size?: 'medium' | 'large' | 'button';
};

export const Spinner: React.FC<SpinnerProps> = ({ color, size }) => {
  return <S.SpinnerCircle color={color} size={size ? size : 'medium'} />;
};

export default Spinner;
