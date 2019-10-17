import { React, ReactDOM } from 'https://unpkg.com/es-react@16.8.30';
import htm from 'https://unpkg.com/htm?module';
const html = htm.bind(React.createElement);

export default () => html`
<header>
  <a href="/">home</a>
  <a href="/about">about</a>
</header>
`;