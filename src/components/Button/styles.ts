import styled, { css } from 'styled-components';

interface ButtonProps {
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'tertiary' | 'quaternary';
  color?: 'neutral' | 'success' | 'danger';
  tag: string;
}

export const Button = styled('button').attrs<ButtonProps>(({ tag }) => ({
  as: tag,
}))<ButtonProps>`
  ${({ theme, variant, color }) => css`
    border-radius: 0.3125rem;
    border: none;
    cursor: pointer;
    display: inline-block;
    font-size: 1.125rem;
    font-weight: 600;
    letter-spacing: 0.0225rem;
    line-height: 1.5rem;
    text-decoration: none;
    transition: 0.4s;

    &[aria-disabled] {
      pointer-events: none;
    }

    ${(variant === 'primary' || variant === 'secondary') &&
    `
      color: ${theme.colors.white};
      padding: 0.875rem 1.625rem;
    `}

    ${variant === 'primary' &&
    color === 'neutral' &&
    `
      background-color: ${theme.colors.blue};
      &:hover { background-color: ${theme.colors.darkBlue} }
      &:focus { background-color: ${theme.colors.darkerBlue} }
      &[aria-disabled="true"] { background-color: ${theme.colors.lighterBlue}; color: ${theme.colors.mostLightestBlue}; }
    `}

    ${variant === 'primary' &&
    color === 'success' &&
    `
      background-color: ${theme.colors.green};
      &:hover { background-color: ${theme.colors.darkGreen} }
      &:focus { background-color: ${theme.colors.darkerGreen} }
      &[aria-disabled="true"] { background-color: ${theme.colors.lightGreen}; color: ${theme.colors.mostLightestGreen}; }
    `}

    ${variant === 'primary' &&
    color === 'danger' &&
    `
      background-color: ${theme.colors.red};
      &:hover { background-color: ${theme.colors.darkRed} }
      &:focus { background-color: ${theme.colors.darkerRed} }
      &[aria-disabled="true"] { background-color: ${theme.colors.lightRed}; color: ${theme.colors.mostLightestRed}; }
    `}

    ${(variant === 'secondary' || variant === 'tertiary' || variant === 'quaternary') &&
    color === 'neutral' &&
    `
      color: ${theme.colors.blue};
      &[aria-disabled="true"] { color: ${theme.colors.lighterBlue}; }
    `}

    ${(variant === 'secondary' || variant === 'tertiary' || variant === 'quaternary') &&
    color === 'success' &&
    `
      color: ${theme.colors.green};
      &[aria-disabled="true"] { color: ${theme.colors.lightGreen}; }
    `}

    ${(variant === 'secondary' || variant === 'tertiary' || variant === 'quaternary') &&
    color === 'danger' &&
    `
      color: ${theme.colors.red};
      &[aria-disabled="true"] { color: ${theme.colors.lightRed}; }
    `}

    ${variant === 'tertiary' &&
    `
      padding: 0.375rem 1.125rem;
    `}

    ${(variant === 'secondary' || variant === 'tertiary') &&
    color === 'neutral' &&
    `
      background-color: ${theme.colors.mostLightestBlue};
      &:hover { background-color: ${theme.colors.lightestBlue}; }
      &:focus { background-color: ${theme.colors.lighterBlue} }
      &[aria-disabled="true"] { background-color: ${theme.colors.mostLightestBlue}; color: ${theme.colors.lighterBlue}; }
    `}

    ${(variant === 'secondary' || variant === 'tertiary') &&
    color === 'success' &&
    `
      background-color: ${theme.colors.mostLightestGreen};
      &:hover { background-color: ${theme.colors.lightestGreen}; }
      &:focus { background-color: ${theme.colors.lighterGreen} }
      &[aria-disabled="true"] { background-color: ${theme.colors.mostLightestGreen}; color: ${theme.colors.lightGreen}; }
    `}

    ${(variant === 'secondary' || variant === 'tertiary') &&
    color === 'danger' &&
    `
      background-color: ${theme.colors.mostLightestRed};
      &:hover { background-color: ${theme.colors.lightestRed}; }
      &:focus { background-color: ${theme.colors.lighterRed} }
      &[aria-disabled="true"] { background-color: ${theme.colors.mostLightestRed}; color: ${theme.colors.lightRed}; }
    `}

    ${variant === 'quaternary' &&
    `
      background-color: transparent;
      padding: 0;
    `}
  `}
`;
