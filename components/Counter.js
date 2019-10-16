import { React, ReactDOM } from 'https://unpkg.com/es-react@16.8.30';
import htm from 'https://unpkg.com/htm?module';

const html = htm.bind(React.createElement);

export default ({ defaultCount }) => {
  const [count, setCount] = React.useState(parseInt(defaultCount));
  return html`
    <div>
      <h2>${count}</h2>
      <button onClick=${e => setCount(count - 1)}>Decrement</button>
      <button onClick=${e => setCount(count + 1)}>Increment</button>
    </div>
  `;
};