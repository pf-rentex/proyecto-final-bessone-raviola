import CreateProperty from './CreateProperty';
import Properties from './Properties';
import Search from './Search';

const routes = [
    {
        path: '/properties/search',
        component: <Search />,
        isPrivate: false,
    },
    {
        path: '/properties',
        component: <Properties />,
        isPrivate: true,
    },
    {
        path: '/properties/create',
        component: <CreateProperty />,
        isPrivate: true,
    },
];

export default routes;
