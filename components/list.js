import { html, css } from 'https://unpkg.com/onthefly-react@1.0.4';

const style = {
  list: css`
    text-align: left;
    margin-top: 2rem;
    width: 200px;
  `,
};

export default ({ bullet, elems }) => html`
  <div className=${style.list}>
    ${elems.map(e => html`<p key=${e}>${bullet} ${e}</p>`)}
  </div>
`;