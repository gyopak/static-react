import { React, ReactDOM } from 'https://unpkg.com/es-react@16.8.30';
import htm from 'https://unpkg.com/htm?module';
const html = htm.bind(React.createElement);

export default () => html`
<div>
  <h2>hello home</h2>
</div>
`;