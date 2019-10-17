import { html, css } from 'https://unpkg.com/rplus';

const style = {
  header: css`
    margin: 0;
    padding: 0.5rem;
    background: black;
    display: flex;
    justify-content: space-around;
  `,
  link: css`
    color: white;
    font-size: 1rem;
    text-decoration: none;
  `,
}

export default () => html`
  <header className=${style.header}>
    <a className=${style.link} href="/">home</a>
    <a className=${style.link} href="/about">about</a>
  </header>
`;