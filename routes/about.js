import { html, css } from 'https://unpkg.com/rplus';
import List from '../components/list.js';

const style = {
  container: css`
    margin: 1rem;
    text-align: center;
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
  'react', 'dynamic components', 'dynamic style',
];

const naay = [
  'npm', 'babel', 'webpack',
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