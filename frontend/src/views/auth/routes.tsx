import Auth from './Auth';
import Onboarding from './Onboarding';

const routes = [
    {
        path: '/login',
        component: <Auth />,
        isPrivate: false,
    },
    {
        path: '/onboarding',
        component: <Onboarding />,
        isPrivate: true,
    },
];

export default routes;
