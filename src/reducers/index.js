import { combineReducers } from 'redux';

import isAuthenticated from './authentication.reducer';
import updateBreadcrumb from './breadcrumbReducer'
import activities from './activities.reducer'
import getactivities from './getActivity.reducer'
import addBasin from './AddBasin.reducer'
import addCrop from './addCrop.reducer'
import getCrop from './getCrop.reducer'
import addStage from './addStage.reducer'
import getStage from './getStage.reducer'
import addNotification from './addNotification.reducer'
import getNotification from './getNotification.reducer'
export const reducers = {
  isAuthenticated,
  updateBreadcrumb,
  activities,
  getactivities,
  addBasin,
  addCrop,
  getCrop,
  addStage,
  getStage,
  addNotification,
  getNotification

};


const rootReducer = combineReducers({
  ...reducers,
});


export default rootReducer;