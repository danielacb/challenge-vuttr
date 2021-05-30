import styled, { css } from 'styled-components';

type ContentProps = {
  size: 'small' | 'medium' | 'large' | 'huge';
};

export const Overlay = styled.div(
  ({ theme }) => css`
    background-color: ${theme.colors.ink + 'e6'};
    height: 100vh;
    left: 0;
    position: fixed;
    top: 0;
    width: 100vw;
    z-index: 999;
  `
);

export const Content = styled.div<ContentProps>(
  ({ theme, size }) => css`
    background-color: ${theme.colors.white};
    border-radius: 0.3125rem;
    left: 50%;
    padding: 1.875rem;
    position: relative;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100%;

    max-width: ${size === 'small'
      ? '25rem'
      : size === 'large'
      ? '50rem'
      : size === 'huge'
      ? '60rem'
      : '37.5rem'};

    p {
      color: ${theme.colors.lightInk};
      font-size: 1.25rem;
      letter-spacing: 0.025rem;
      line-height: 1.625rem;
      margin-bottom: 1.875rem;
      opacity: 1;
    }
  `
);

export const Title = styled.span(
  ({ theme }) => css`
    color: ${theme.colors.ink};
    display: block;
    font-size: 1.625rem;
    font-weight: 600;
    letter-spacing: 0.0325rem;
    line-height: 2rem;
    margin-bottom: 1.875rem;
  `
);

export const CloseModal = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  height: 4.5rem;
  width: 4.5rem;

  position: absolute;
  right: 0;
  top: 0;

  svg {
    fill: ${(props) => props.theme.colors.ink};
    width: 0.75rem;
  }
`;
