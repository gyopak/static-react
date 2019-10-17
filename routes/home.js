import { react, html, css } from 'https://unpkg.com/rplus';
import Card from '../components/card.js';
import Spinner from '../components/spinner.js';

const URL = 'https://api.jsonbin.io/b/5dad90e942c1037c5d0513a1';

const style = {
  cardContainer: css`{
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }`,
};

export default () => {
  const [data, setData] = react.useState();
  if (!data) {
    window.PUBSUB.fire('REQUEST_DATA', URL);
    window.PUBSUB.subscribe(`LOADED_DATA_${URL}`, setData);
    return html`<${Spinner} />`;
  }
  return html`
    <div className=${style.cardContainer}>
      ${data.results.map(r => html`<${Card} key=${r.name} data=${r}/>`)}
    </div>
  `;
};