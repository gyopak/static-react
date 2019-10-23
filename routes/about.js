import { html, css } from 'https://unpkg.com/onthefly-react@1.0.4';
import List from '../components/list.js';

const style = {
  container: css`
    margin: 3rem;
    text-align: center;
    width: 80%;
    margin: 5rem auto;
    max-width: 500px;
    background: black;
    padding: 2rem;
    color: white;
    border-radius: 10px;
  `,
  title: css`
    margin-bottom: 1rem;
  `,
  listContainer: css`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
};

const yaay = [
  'react', 'dynamic components', 'dynamic style', 'networking'
];

const naay = [
  'npm', 'babel', 'webpack', 'bundle'
];

export default () => html`
  <div className=${style.container}>
    <h2 className=${style.title}>hello there</h2>
    <p>this is a simple about page for a static react app without build</p>
    <div className=${style.listContainer}>
      <${List} bullet="✔" elems=${yaay} />
      <${List} bullet="✘" elems=${naay} />
    </div>
  </div>
`;