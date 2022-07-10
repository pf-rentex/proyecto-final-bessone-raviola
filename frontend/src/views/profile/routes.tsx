import UserProfile from './UserProfile';

const routes = [
    {
        path: '/profile',
        component: <UserProfile />,
        isPrivate: true,
    },
];

export default routes;
