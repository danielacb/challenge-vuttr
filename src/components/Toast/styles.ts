import styled, { css } from 'styled-components';

export const Container = styled.div(
  ({ theme }) => css`
    position: absolute;
    right: 2rem;
    top: 2rem;

    .Toastify__toast-container {
      color: ${theme.colors.white};
      max-width: 642px;
      width: 100%;
    }

    .Toastify__toast {
      border-radius: 0.3125rem;
      box-shadow: none;
      font-family: inherit;
      font-weight: 600;
      padding: 1.375rem 1.375rem 1.375rem 3.5rem;

      background-position: 1.4rem center;
      background-repeat: no-repeat;
      background-size: 1.25rem;

      svg {
        margin-right: 0.75rem;
      }
    }

    .Toastify__toast--default,
    .Toastify__toast--info {
      background-color: ${theme.colors.lighterInk};
      background-image: url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='20px' height='20px' viewBox='0 0 20 20' style='enable-background:new 0 0 20 20;' xml:space='preserve'%3E%3Cpath d='M10,20C4.5,20,0,15.5,0,10C0,4.5,4.5,0,10,0c5.5,0,10,4.5,10,10c0,2.7-1.1,5.2-2.9,7.1C15.2,19,12.7,20,10,20z M9,8v8h2V8H9z M10,5C9.4,5,9,5.4,9,6c0,0.6,0.4,1,1,1c0.6,0,1-0.4,1-1C11,5.4,10.6,5,10,5z' fill='%23fff'/%3E%3C/svg%3E%0A");
      color: ${theme.colors.white};
    }
    .Toastify__toast--success {
      background-color: ${theme.colors.green};
      background-image: url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='20px' height='20px' viewBox='0 0 20 20' style='enable-background:new 0 0 20 20;' xml:space='preserve'%3E%3Cpath d='M10,20C4.5,20,0,15.5,0,10C0,4.5,4.5,0,10,0c5.5,0,10,4.5,10,10c0,2.7-1.1,5.2-2.9,7.1C15.2,19,12.7,20,10,20z M6.4,8.8L6.4,8.8L5,10.2L7.8,13l0.8,0.8L15,7.4L13.5,6l-5,5L6.4,8.8L6.4,8.8z' fill='%23fff'/%3E%3C/svg%3E%0A");
    }
    .Toastify__toast--warning {
      background-color: ${theme.colors.yellow};
      background-image: url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='20px' height='20px' viewBox='0 0 20 20' style='enable-background:new 0 0 20 20;' xml:space='preserve'%3E%3Cpath d='M10,20L10,20L0,10L10,0l10,10L10,20z M10,13c-0.6,0-1,0.4-1,1c0,0.6,0.4,1,1,1c0.6,0,1-0.4,1-1c0,0,0,0,0,0 C11,13.4,10.6,13,10,13L10,13z M9,4v8h2V4L9,4z' fill='%23fff'/%3E%3C/svg%3E%0A");
    }
    .Toastify__toast--error {
      background-color: ${theme.colors.red};
      background-image: url("data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='20' heigth='20' viewBox='0 0 20 20' style='enable-background:new 0 0 20 20;' xml:space='preserve'%3E%3Cpath d='M18.7,18.8H1.3c-0.7,0-1.3-0.6-1.3-1.3c0-0.2,0.1-0.4,0.2-0.6L8.9,1.8C9.3,1.2,10,1,10.6,1.3 c0.2,0.1,0.3,0.3,0.4,0.4l8.7,15.1c0.2,0.4,0.2,0.9,0,1.3C19.6,18.6,19.2,18.8,18.7,18.8z M10,14.2c-0.6,0-1,0.4-1,1s0.4,1,1,1 c0.6,0,1-0.4,1-1c0,0,0,0,0,0C11,14.6,10.6,14.2,10,14.2L10,14.2z M9,5.2v8h2v-8H9z' fill='%23fff'/%3E%3C/svg%3E");
    }

    .Toastify__progress-bar {
      background-color: transparent;
    }

    .icon-close {
      fill: ${theme.colors.white};
      position: absolute;
      right: 0.75rem;
      top: 50%;
      transform: translateY(-50%);
      width: 12px;
    }
  `
);
