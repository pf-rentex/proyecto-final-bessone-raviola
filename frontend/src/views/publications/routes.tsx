import CreatePublication from './CreatePublication';
import Publication from './Publication';
import Publications from './Publications';

const routes = [
    {
        path: '/publication/:id',
        component: <Publication />,
        isPrivate: false,
    },
    {
        path: '/publications',
        component: <Publications />,
        isPrivate: false,
    },
    {
        path: '/publications/create',
        component: <CreatePublication />,
        isPrivate: false,
    },
];

export default routes;
