import styled, { css } from 'styled-components';

export const Container = styled.div(
  ({ theme }) => css`
    color: ${theme.colors.ink};
    margin: 5rem auto 2.5rem;
    max-width: 51rem;
    width: calc(100% - 3rem);

    h1 {
      margin-bottom: 1.2rem;
    }
  `
);

export const Actions = styled.div`
  margin: 1.5rem 0;
`;
