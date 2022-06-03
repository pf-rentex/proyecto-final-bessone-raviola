import React from 'react';
import { cleanup, fireEvent, getAllByTestId, render } from '@testing-library/react';
import Header from '../Header';
import { useMockedReduxState } from '../../../../utils/tests';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUsedNavigate,
}));

describe('Header test cases', () => {
    let wrapper: any;

    const renderComponent = (component: JSX.Element) => {
        const mockedState = {
            auth: {
                isAuthenticated: true,
            },
        };
        // eslint-disable-next-line react-hooks/rules-of-hooks
        return useMockedReduxState(mockedState, component);
    };

    beforeEach(() => {
        wrapper = renderComponent(<Header setIsOpenSidebar={() => {}} />);
    });
    afterEach(cleanup);

    test('renders component', () => {
        // const wrapper = render(<Header setIsOpenSidebar={() => {}} />);

        expect(wrapper.container).toBeInTheDocument();
        expect(wrapper.container).toMatchSnapshot();
    });

    test('It contains the App logo', () => {
        const { getByTestId } = wrapper;

        expect(getByTestId('logo')).toBeInTheDocument();
    });

    test('It contains the sidebar toggle', () => {
        const { getByTestId } = wrapper;

        expect(getByTestId('sidebar-toggle')).toBeInTheDocument();
    });

    test('callback for setIsOpenSidebar is called', () => {
        const callback = jest.fn();
        const { getAllByTestId } = renderComponent(<Header setIsOpenSidebar={callback} />);

        getAllByTestId('sidebar-toggle').map((element: any) => {
            fireEvent.click(element);
        });

        expect(callback).toHaveBeenCalled();
    });

    test('Contains the button to logout', () => {
        const { getByText } = wrapper;

        getByText('Cerrar sesión');
    });

    test('Contains the Register button', () => {
        const { getByText } = useMockedReduxState(
            {
                auth: {
                    isAuthenticated: false,
                },
            },
            <Header setIsOpenSidebar={() => {}} />,
        );

        getByText('Registrarse');
    });
});
