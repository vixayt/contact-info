import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_USERS_PENDING,
    REQUEST_USERS_SUCCESS,
    REQUEST_USERS_FAILED
} from './constants';

import * as actions from './actions';
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'

const mockStore = configureMockStore([thunkMiddleware])


describe('action search', () => {
    it('should create an action to search users', () => {    
        const text = 'yOO';
        const expectedAction = {
            type: CHANGE_SEARCH_FIELD,
            payload: text
        }
        expect(actions.setSearchField(text)).toEqual(expectedAction)
    })
})

describe('actions requestUesrs', () => {
    it('should handle request users api', () => {
        const store = mockStore()
        store.dispatch(actions.requestUsers())
        const action = store.getActions();
        const expectedAction = { 
            type: REQUEST_USERS_PENDING
        }
        expect(action[0]).toEqual(expectedAction)
    })
})