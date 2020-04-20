import { combineReducers } from 'redux';
import articles from './article_reducer';
import gallery from './gallery_reducers';

const rootReducer = combineReducers({
    articles,
    gallery
})

export default rootReducer;