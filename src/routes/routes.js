import { lazy, Suspense } from 'react';
import { Navigate } from 'react-router-dom';

const SignUp = lazy(() => import('../pages/SignUp'));
const Login = lazy(() => import('../pages/Login'));
const AllMovies = lazy(() => import('../pages/AllMovies/AllMovies'));
const MovieInfo = lazy(() => import('../pages/MovieInfo'));
const NotFound = lazy(() => import('../pages/NotFound'));

function getComponent(Component) {
    const TOKEN = localStorage.getItem('AUTH_TOKEN');
    return TOKEN ? (
        <Suspense>
            <Component />
        </Suspense>
    ) : (
        <Navigate to='/login' />
    );  
};


export const routes = [
    { path: '/', element: <Suspense><SignUp /></Suspense> },
    { path: 'login', element: <Suspense><Login /></Suspense> },
    { path: 'all_movies', element: getComponent(AllMovies) },
    { path: 'all_movies/:id', element: getComponent(MovieInfo) },
    { path: '*', element: <Suspense><NotFound /></Suspense> },
];