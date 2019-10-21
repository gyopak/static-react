import { react, html } from 'https://unpkg.com/onthefly-react@1.0.4';
import Header from './components/header.js';

import Pubsub from './services/pubsub.js';
import Network from './services/network.js';

window.PUBSUB = Pubsub();
window.NETWORK = Network();

const Route = {
 '/': react.lazy(() => import('./routes/home.js')),
 '/about': react.lazy(() => import('./routes/about.js')),
 '*': react.lazy(() => import('./routes/lost.js')),
}

react.render(
  html`
    <${react.Suspense} fallback=${html`<div></div>`}>
      <${Header} />
      <${Route[location.pathname] || Route['*']} />
    <//>
  `,
  document.querySelector('#app')
)