import Home from '../views/Home';
import AuthRoutes from '../views/auth/routes';
import ProfileRoutes from '../views/profile/routes';
import PropertiesRoutes from '../views/properties/routes';
import ClaimsRoutes from '../views/claims/routes';
import ContractsRoutes from '../views/contracts/routes';
import PublicationsRoutes from '../views/publications/routes';
import RentRoutes from '../views/rent/routes';
import SchedulesRoutes from '../views/schedules/routes';

const routes = [
    {
        path: '/',
        component: <Home />,
        isPrivate: false,
    },
    ...AuthRoutes,
    ...ProfileRoutes,
    ...PropertiesRoutes,
    ...ClaimsRoutes,
    ...ContractsRoutes,
    ...PublicationsRoutes,
    ...RentRoutes,
    ...SchedulesRoutes,
];

export default routes;
