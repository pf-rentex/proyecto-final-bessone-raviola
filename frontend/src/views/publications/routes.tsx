import Publication from './Publication';

const routes = [
    {
        path: '/publication/:id',
        component: <Publication />,
        isPrivate: false,
    },
];

export default routes;
