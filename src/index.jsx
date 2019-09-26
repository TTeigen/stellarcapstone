import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { HashRouter } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';

//depending on how I handle API calls I will likely(99% chance) need Redux stuff here

const render = (Component) => {
    ReactDOM.render(
        <AppContainer>
        <HashRouter>
          <Component/>
        </HashRouter>
      </AppContainer>,
      //Redux refactoring
    //   <HashRouter>
    //     <Provider store={store}>
    //       <Component/>
    //     </Provider>
    //   </HashRouter>,
      document.getElementById('react-app-root')
    );
  };
  
  render(App);
  
  /*eslint-disable */
  if (module.hot) {
    module.hot.accept('./components/App', () => {
      render(App);
    });
  }
  /*eslint-enable */