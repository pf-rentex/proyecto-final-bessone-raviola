import Contracts from './Contracts';
import ContractDetails from './ContractDetails';

const routes = [
    {
        path: '/contracts',
        component: <Contracts />,
        isPrivate: true,
    },
    {
        path: '/contracts/:id',
        component: <ContractDetails />,
        isPrivate: true,
    },
];

export default routes;
