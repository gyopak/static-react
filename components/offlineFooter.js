import { html, css } from 'https://unpkg.com/onthefly-react@1.0.4';

const style = {
  footer: css`{
    position: fixed;
    bottom: 0;
    width: 100vw;
    text-align: center;
    background: #F44336;
  }`,
  warningText: css`{
    color: white;
    font-size: 1.25rem;
    font-weight: 100;
    padding: 0.5rem 0;
  }`,
}

export default () => html`
  <footer className=${style.footer}>
    <p className=${style.warningText}>No internet connection, showing offline results</p>
  </footer>
`;