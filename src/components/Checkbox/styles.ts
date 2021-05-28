import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const Input = styled.input(
  ({ theme }) => css`
    display: none;

    &:checked + span {
      background-color: ${theme.colors.blue};
      border-color: ${theme.colors.blue};

      &::after {
        opacity: 1;
      }
    }
  `
);

export const Checkmark = styled.span(
  ({ theme }) => css`
    background-color: ${theme.colors.darkerWhite};
    border-radius: 0.1875rem;
    border: 1px solid ${theme.colors.mostDarkestWhite};
    display: inline-block;
    height: 0.9375rem;
    margin-right: 0.375rem;
    position: absolute;
    top: 0.375rem;
    width: 0.9375rem;

    &::after {
      border-bottom: 2px solid ${theme.colors.white};
      border-left: 2px solid ${theme.colors.white};
      content: '';
      display: inline-block;
      height: 0.25rem;
      margin-bottom: 0.5rem;
      opacity: 0;
      transform: rotate(-45deg);
      width: 0.625rem;
    }
  `
);

export const Label = styled.label(
  ({ theme }) => css`
    color: ${theme.colors.ink};
    font-size: 1.25rem;
    letter-spacing: 0.025rem;
    line-height: 1.625rem;
    margin-left: 1.25rem;
  `
);
