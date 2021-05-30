import { ReactNode } from 'react';
import * as S from './styles';

export type ButtonProps = {
  children: ReactNode;
  to?: string;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'tertiary' | 'quaternary';
  color?: 'neutral' | 'success' | 'danger';
  disabled?: boolean;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  children,
  to,
  type,
  variant,
  color,
  disabled,
  onClick,
}) => {
  return to ? (
    <S.Button
      href={to}
      tag={to ? 'a' : 'button'}
      variant={variant ? variant : 'primary'}
      color={color ? color : 'neutral'}
      aria-disabled={disabled}
    >
      {children}
    </S.Button>
  ) : (
    <S.Button
      tag="button"
      type={type ? type : 'button'}
      variant={variant ? variant : 'primary'}
      color={color ? color : 'neutral'}
      aria-disabled={disabled}
      onClick={onClick}
    >
      {children}
    </S.Button>
  );
};

export default Button;
