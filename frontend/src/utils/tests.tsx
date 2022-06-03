import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

const middlewares = [thunk];

const useMockedReduxState = (state: Object, children: JSX.Element) => {
    const mockStore = configureMockStore(middlewares);
    const store = mockStore(state);
    const wrapper = render(<Provider store={store}>{children}</Provider>);

    return wrapper;
};

export { useMockedReduxState };
