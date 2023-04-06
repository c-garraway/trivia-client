import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import userReducer from '../features/userData/userDataSlice';
import teamReducer from '../features/userData/teamDataSlice';
import gameReducer from '../features/gameData/gameDataSlice';
import questionReducer from '../features/gameData/questionDataSlice';
import newGameOptionsReducer from '../features/gameData/newGameOptionsDataSlice';
import pointsReducer from '../features/pointsData/pointsDataSlice';

const persistConfig = {
    key: 'root',
    storage,
};

const rootReducer = combineReducers({
    userData: userReducer,
    teamData: teamReducer,
    gameData: gameReducer,
    pointsData: pointsReducer,
    questionData: questionReducer,
    newGameOptionsData: newGameOptionsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
});

export const persistor = persistStore(store)
