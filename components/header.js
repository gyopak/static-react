import { html, css } from 'https://unpkg.com/rplus';

const style = {
  header: css`{
    margin: 0;
    padding: 0.5rem;
    background: black;
    position: fixed;
    display: flex;
    justify-content: center;
    width: 100%;
    top: 0;
    z-index: 1;
  
  }`,
  link: css`{
    color: white;
    font-size: 1.25rem;
    text-decoration: none;
    cursor: pointer;
  }`,
  linkContainer: css`{
    width: 80%;
    max-width: 500px;
    display: flex;
    justify-content: space-between;
  }`,
}

export default () => html`
  <header className=${style.header}>
    <div className=${style.linkContainer}>
      <a className=${style.link} href="/">home</a>
      <a className=${style.link} href="/about">about</a>
    </div>
  </header>
`;