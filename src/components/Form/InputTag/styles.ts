import styled, { css } from 'styled-components';

export const Container = styled.div(
  ({ theme }) => css`
    padding-bottom: 1.5rem;
    width: 100%;

    .fakeInput {
      display: none;
    }

    .react-tag-input {
      margin-bottom: 0.5rem;
      position: relative;
      width: 100%;

      display: flex;
      flex-wrap: wrap;
      align-items: center;

      background-color: ${theme.colors.darkerWhite};
      border-radius: 0.3125rem;
      border: 1px solid ${theme.colors.darkestWhite};
      padding: 0.5rem 0.3rem;
      width: 100%;
    }
    .react-tag-input > * {
      margin: 0.3rem 0.2rem 0.35rem 1.25rem;
    }
    .react-tag-input__input {
      flex-grow: 1;

      color: ${theme.colors.ink};
      font-size: 1.25rem;
      line-height: 1.625rem;

      &::placeholder {
        color: ${theme.colors.lighterInk};
        font-size: 1.25rem;
        line-height: 1.625rem;
      }

      background: transparent;

      outline: 0;
      -webkit-appearance: none;
    }
    .react-tag-input__input:focus,
    .react-tag-input__input {
      border: none;
    }
    .react-tag-input__tag {
      position: relative;
      display: flex;
      align-items: center;

      background-color: ${theme.colors.white};
      border-radius: 0.3125rem;
      border: 1px solid ${theme.colors.darkestWhite};
      color: ${theme.colors.ink};
      line-height: 1;
      margin: 0.2rem;
    }
    .react-tag-input__tag__content {
      border: none;
      font-size: 1.25rem;
      letter-spacing: 0.025rem;
      outline: 0;
      padding: 0.4rem 0 0.4rem 0.65rem;
      white-space: nowrap;
    }
    .react-tag-input__tag__remove {
      background-color: ${theme.colors.white};
      cursor: pointer;
      font-size: 0.8em;
      height: 2em;
      position: relative;
      width: 2.2em;
    }
    .react-tag-input__tag__remove:before,
    .react-tag-input__tag__remove:after {
      background-color: ${theme.colors.lightestInk};
      content: '';
      height: 0.9em;
      left: 50%;
      position: absolute;
      top: 50%;
      width: 2px;
    }
    .react-tag-input__tag__remove:before {
      transform: translateX(-50%) translateY(-50%) rotate(45deg);
    }
    .react-tag-input__tag__remove:after {
      transform: translateX(-50%) translateY(-50%) rotate(-45deg);
    }
    .react-tag-input__tag__remove-readonly {
      width: 0;
    }
    .react-tag-input__tag__remove-readonly:before,
    .react-tag-input__tag__remove-readonly:after {
      content: '';
      width: 0;
    }

    &.error {
      .react-tag-input {
        background-color: ${theme.colors.mostLightestRed};
        border-color: ${theme.colors.red};
      }
      .react-tag-input__input {
        color: ${theme.colors.red};
        &::placeholder {
          color: ${theme.colors.red};
        }
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
