import RequestForm from './request/RequestForm';
import RentRequests from './request/Requests';

const routes = [
    {
        path: '/rent/request',
        component: <RequestForm />,
        isPrivate: true,
    },
    {
        path: '/rent/requests',
        component: <RentRequests />,
        isPrivate: true,
    },
];

export default routes;
