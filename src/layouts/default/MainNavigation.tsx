import { css } from '@emotion/react';
import { LocalizedLink } from 'gatsby-plugin-i18n-l10n';

const navStyle = () => css`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    font-size: 1.4rem;
  }
`;

export default function MainNavigation() {
  return (
    <nav css={navStyle}>
      <ul>
        <li>
          <LocalizedLink to="/pages">Joho</LocalizedLink>
        </li>
      </ul>
    </nav>
  );
}
