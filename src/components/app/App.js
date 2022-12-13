import Header from '../header/Header';
import Main from '../main/Main';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';

import './app.scss';

function App() {
  return (
    <section className="app-container">
      <Header />
      <ErrorBoundary>
        <Main />
      </ErrorBoundary>
    </section>
  );
}

export default App;
