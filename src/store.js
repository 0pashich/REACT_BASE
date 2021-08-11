import { applyMiddleware, combineReducers, createStore, compose } from 'redux'
import thunk from 'redux-thunk';
import { persistReducer, persistStore } from 'redux-persist'
import profileReducer from './reducers/profile'
import chatsReducer from './reducers/chats'
import messagesReducer from './reducers/messages'
import uiReducer from './reducers/ui'
import newsReducer from './reducers/news'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    profile: profileReducer,
    chats: chatsReducer,
    messages: messagesReducer,
    ui: uiReducer,
    news: newsReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk))

)

export const persistor = persistStore(store)