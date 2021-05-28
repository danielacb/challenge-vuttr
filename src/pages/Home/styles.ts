import styled, { css } from 'styled-components';

export const Container = styled.div(
  ({ theme }) => css`
    color: ${theme.colors.ink};
    margin: 1.2rem auto 2.5rem;
    max-width: 51rem;
    width: calc(100% - 3rem);

    h1 {
      margin-bottom: 1.2rem;
    }

    @media (min-width: 880px) {
      margin: 5rem auto 2.5rem;
    }
  `
);

export const Actions = styled.div`
  margin: 1.5rem 0 2.5rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  input {
    margin: 1.2rem 0;
  }

  @media (min-width: 880px) {
    flex-direction: row;
    align-items: center;
    gap: 1rem;

    input {
      width: 30rem;
      margin: 0;
    }
  }
`;
