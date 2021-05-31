import styled, { css } from 'styled-components';

export const Container = styled.div`
  padding-bottom: 1.5rem;
  width: 100%;
`;

export const InputText = styled.input(
  ({ theme }) => css`
    background-color: ${theme.colors.darkerWhite};
    border-radius: 0.3125rem;
    border: 1px solid ${theme.colors.darkestWhite};
    margin-bottom: 0.5rem;
    padding: 0.8125rem 1.25rem;
    width: 100%;

    outline-color: transparent;
    outline-offset: 2px;

    color: ${theme.colors.ink};
    font-size: 1.25rem;
    line-height: 1.625rem;

    &::placeholder {
      color: ${theme.colors.lighterInk};
      font-size: 1.25rem;
      line-height: 1.625rem;
    }

    &.error {
      background-color: ${theme.colors.mostLightestRed};
      border-color: ${theme.colors.red};
      color: ${theme.colors.red};
      &::placeholder {
        color: ${theme.colors.red};
      }
    }
  `
);

export const Label = styled.label(
  ({ theme }) => css`
    color: ${theme.colors.ink};
    display: inline-block;
    font-size: 1.25rem;
    line-height: 1.625rem;
    margin-bottom: 0.5rem;

    span {
      color: ${theme.colors.lightInk};
      margin-left: 0.5rem;
      vertical-align: sub;

      &.error {
        color: ${theme.colors.red};
      }
    }
  `
);

export const ErrorMessage = styled.span(
  ({ theme }) => css`
    color: ${theme.colors.red};
    display: block;
    font-size: 1.125rem;
    height: 0;
    line-height: 1.5rem;
    text-align: right;
  `
);
