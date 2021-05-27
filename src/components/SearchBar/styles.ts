import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;

  .icon-close,
  .icon-search {
    fill: ${(props) => props.theme.colors.lighterInk};
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  .icon-search {
    left: 1rem;
  }

  .icon-close {
    right: 1rem;
    width: 0.875rem;
  }
`;

export const Input = styled.input(
  ({ theme }) => css`
    background-color: ${theme.colors.darkerWhite};
    border-radius: 0.3125rem;
    border: 1px solid ${theme.colors.darkestWhite};
    padding: 0.75rem 1.3rem 0.75rem 3.2rem;
    transition: 0.4s;
    width: 100%;

    color: ${theme.colors.lightInk};
    font-size: 1.25rem;
    letter-spacing: 0.025rem;
    line-height: 1.625rem;

    &:focus {
      border-color: ${theme.colors.mostDarkestWhite};
      background-color: ${theme.colors.darkestWhite};

      & + button {
        opacity: 1;
      }
    }

    outline-offset: 2px;
    outline-color: transparent;

    &::placeholder {
      color: ${theme.colors.lighterInk};
    }
  `
);

export const ResetSearch = styled.button`
  background-color: transparent;
  border: 0;
  cursor: pointer;
  height: 100%;
  opacity: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: 0.4s opacity;
  width: 3rem;
`;
