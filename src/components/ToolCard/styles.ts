import styled, { css } from 'styled-components';

export const Container = styled.div(
  ({ theme }) => css`
    background-color: ${theme.colors.white};
    border-radius: 0.3125rem;
    border: 1px solid ${theme.colors.darkestWhite};
    margin: 1.2rem 0;
    padding: 2rem;
    position: relative;
    transition: 0.4s box-shadow;
    width: 100%;

    &:hover {
      box-shadow: 0px 5px 7px ${theme.colors.black + '0d'};

      ${RemoveButton} {
        opacity: 1;
      }
    }
  `
);

export const Tool = styled.a(
  ({ theme }) => css`
    color: ${theme.colors.ink};
    text-decoration: none;
  `
);

export const Description = styled.p(
  ({ theme }) => css`
    color: ${theme.colors.lightInk};
    margin: 0.75rem 0 1.5rem;
  `
);

export const Tags = styled.p(
  ({ theme }) => css`
    color: ${theme.colors.ink};
    text-transform: lowercase;
  `
);

export const RemoveButton = styled.button(
  ({ theme }) => css`
    color: ${theme.colors.red};
    opacity: 0;
    padding: 0.5rem 1rem;
    position: absolute;
    right: 1rem;
    top: 1rem;
    transition: 0.4s;

    background-color: transparent;
    border: none;
    cursor: pointer;

    svg {
      fill: ${theme.colors.red};
      margin-bottom: 0.13rem;
      margin-right: 0.25rem;
      vertical-align: middle;
      width: 0.75rem;
    }
  `
);
