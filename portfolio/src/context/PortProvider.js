import { useReducer } from 'react';
import PortfolioContext from './portfolio-context';

const defaultPortfolioState = {
  page: '0',
};

const portReducer = (state, action) => {
  if (action.type === '0') {
    console.log(state);
    const newState = {
      ...state,
      page: '0',
    };
    return newState;
  } else if (action.type === '1') {
    console.log(state);
    const newState = {
      ...state,
      page: '1',
    };
    return newState;
  } else if (action.type === '2') {
    console.log(state);
    const newState = {
      ...state,
      page: '2',
    };
    return newState;
  } else {
    console.log(state);
    const newState = {
      ...state,
      page: '3',
    };
    return newState;
  }
};

const PortProvider = (props) => {
  const [portState, dispatchPortAction] = useReducer(
    portReducer,
    defaultPortfolioState
  );

  const setActivePageHandler = (type) => {
    console.log(type);
    dispatchPortAction({ type: type });
  };

  const portfolioContext = {
    page: portState.page,
    setActive: setActivePageHandler,
  };

  return (
    <PortfolioContext.Provider value={portfolioContext}>
      {props.children}
    </PortfolioContext.Provider>
  );
};

// export default PortProvider;
