export const linkData = [
    { id: 1, text: 'home', path: './' },
    { id: 2, text: 'shop', path: '/shop' },
    { id: 3, text: 'say hello', path: '/contact' },
    {
        id: 4,
        text: `${{ currentUser } ? 'Sign In ' : 'Sign Out'}`,
        path: '/signin',
    },
];

function currentUser({ currentUser }) {}