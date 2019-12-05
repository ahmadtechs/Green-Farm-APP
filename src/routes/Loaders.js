
import React from 'react';
import Loading from '../components/Spinner';
import Loadable from 'react-loadable';

export const DefaultLayout = Loadable({
  loader: () => import('../container/DefaultLayout/DefaultLayout'),
  loading: () => <Loading />
})
export const AuthPage = Loadable({
  loader: () => import('../Views/Welcome/WelcomeContainer'),
  loading: () => <Loading />
});

export const CompleteSignup = Loadable({
  loader: () => import('../Views/Authentication/CompleteSignupContainer'),
  loading: () => <Loading />
});
