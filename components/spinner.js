import { html, css } from 'https://unpkg.com/onthefly-react@1.0.4';

const style = {
  spinnerContainer: css`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  spinner: css`
    width: 70px;
    height: 70px;
    border: 8px solid black;
    border-top: 8px solid white;
    border-radius: 50%;
    transition-property: transform;
    animation-name: rotate;
    animation-duration: 1.2s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    @-webkit-keyframes rotate {
        from {
          -webkit-transform: rotate(0deg);
        }
        to {
          -webkit-transform: rotate(360deg);
        }
      }
      
      @-moz-keyframes rotate {
        from {
          -moz-transform: rotate(0deg);
        }
        to {
          -moz-transform: rotate(360deg);
        }
      }
      
      @keyframes rotate {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
  `,
};

export default () => html`
  <div className=${style.spinnerContainer}>
    <div className=${style.spinner}></div>
  </div>
`;