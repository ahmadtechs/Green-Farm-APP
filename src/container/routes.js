import React from 'react';
import Loadable from 'react-loadable';
import { DefaultLayout } from './DefaultLayout';
import Spinner from '../components/Spinner';


const styleProps ={
    color: '#00854D',
    height:50,
    width:50,
    className:'spinner-background-opt',
}

const Dashboard = Loadable ({
    loader: () => import('../Views/Dashboard/DashboardContainer'),
    loading:()=> <Spinner {...styleProps} />,
});
const Activity = Loadable ({
    loader: () => import('../Views/container/Activity/Activity'),
    loading:()=> <Spinner {...styleProps} />,
});
const Basin = Loadable ({
    loader: () => import('../Views/container/Basins/BasinTable'),
    loading:()=> <Spinner {...styleProps} />,
});
const Crop = Loadable ({
    loader: () => import('../Views/container/Crops/CropsTable'),
    loading:()=> <Spinner {...styleProps} />,
});
const Schedule = Loadable ({
    loader: () => import('../Views/container/Schedules/SchedulesTable'),
    loading:()=> <Spinner {...styleProps} />,
});
const Stage = Loadable ({
    loader: () => import('../Views/container/Stage/StageTable'),
    loading:()=> <Spinner {...styleProps} />,
});
const Notification = Loadable ({
    loader: () => import('../Views/container/Notification/Notification'),
    loading:()=> <Spinner {...styleProps} />,
});
const User = Loadable ({
    loader: () => import('../Views/container/Users/User'),
    loading:()=> <Spinner {...styleProps} />,
});






const routes = [
    {path:'/', exact: true, name:"Dashboard", component:Dashboard },
    // {path:'/dashboard',  name:"Dashboard", component:Dashboard },
    {path:'/activity',  name:"Activity", component:Activity },
    {path:'/basin',  name:"Basin", component:Basin },
    {path:'/crop',  name:"Crop", component:Crop },
    {path:'/schedule',  name:"Schedule", component:Schedule },
    {path:'/stage',  name:"Stage", component:Stage },
    {path:'/notification',  name:"Notification", component:Notification },
    {path:'/user',  name:"Notification", component:User },
    
];

export default routes