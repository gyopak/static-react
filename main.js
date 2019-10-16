import { React, ReactDOM } from 'https://unpkg.com/es-react@16.8.30';
import htm from 'https://unpkg.com/htm?module';
import Counter from './components/Counter.js';

const html = htm.bind(React.createElement)

ReactDOM.render(
  html`
  <div>
    <h1>whaaaat</h1>
    <${Counter} class="counter" defaultCount=0 />
  </div>
  `,
  document.querySelector('#app')
);
