import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_USERS_PENDING,
    REQUEST_USERS_SUCCESS,
    REQUEST_USERS_FAILED
} from './constants';
  
import * as reducers from './reducers';

describe('searchUsers', () => {
    const initialStateSearch = {
        searchField: ''
    }
    it('should return the initial state', () => {
        expect(reducers.searchUsers(undefined, {})).toEqual({ searchField: '' })
    })

    it('should handle CHANGE_SEARCHFIELD', () => {
        expect(reducers.searchUsers(initialStateSearch, {
            type: CHANGE_SEARCH_FIELD,
            payload: 'abc'
        })).toEqual({
            searchField: 'abc'
        })
    })
})

describe('requestUsers', () => {
    const initialStateUsers = { 
        isPending: false,
        users: [],
        error: ''
    }
    it('should return the initial state', () => {
        expect(reducers.requestUsers(undefined, {})).toEqual(initialStateUsers)
    })

    it('should handle REQUEST_USERS_PENDING action', () => {
        expect(reducers.requestUsers(initialStateUsers, {
            type: REQUEST_USERS_PENDING,
        })).toEqual({
            users: [],
            isPending: true,
            error: ''
        })
    })
    
    it('should handle REQUEST_USERS_SUCCESS action', () => {
        expect(reducers.requestUsers(initialStateUsers, {
            type: REQUEST_USERS_SUCCESS,
            payload: [{
                id: '13',
                name: 'foo',
                email: 'foobar@gmail.com',
                username: 'bar'
            }]
        })).toEqual({
            users: [{
                id: '13',
                name: 'foo',
                email: 'foobar@gmail.com',
                username: 'bar'
            }],
            isPending: false,
            error: ''
        })
    })
        
    it('should handle REQUEST_USERS_FAILED action', () => {
        expect(reducers.requestUsers(initialStateUsers, {
            type: REQUEST_USERS_FAILED,
            payload: 'Nooooo!'
        })).toEqual({
            users: [],
            isPending: false,
            error: 'Nooooo!'
        })
    })
})