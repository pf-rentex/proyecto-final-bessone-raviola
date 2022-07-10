import Claims from "./Claims";
import CreateClaim from "./CreateClaim";
import ClaimDetails from "./ClaimDetails";

const routes = [
    {
        path: '/claims',
        component: <Claims />,
        isPrivate: true,
    },
    {
        path: '/claims/create',
        component: <CreateClaim />,
        isPrivate: true,
    },
    {
        path: '/claims/:id',
        component: <ClaimDetails />,
        isPrivate: true,
    },
];

export default routes;
