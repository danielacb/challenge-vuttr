import styled, { keyframes } from 'styled-components';

interface SpinnerCircleProps {
  color?: string;
  size?: 'medium' | 'large' | 'button';
}

const spin = keyframes`
  from {transform:rotate(0deg);}
  to {transform:rotate(360deg);}
`;

export const SpinnerCircle = styled.div<SpinnerCircleProps>`
  margin: 40px auto;
  width: ${(props) =>
    props.size === 'large' ? '8.125rem' : props.size === 'button' ? '1.5625rem' : '4.375rem'};
  height: ${(props) =>
    props.size === 'large' ? '8.125rem' : props.size === 'button' ? '1.5625rem' : '4.375rem'};
  border: solid ${(props) => (props.color ? props.color : props.theme.colors.blue)};
  border-width: ${(props) =>
    props.size === 'large' ? '0.3125rem' : props.size === 'button' ? '3px' : '4px'};
  border-radius: 50%;
  border-right-color: transparent;
  animation: 1s ${spin} infinite linear;
`;
