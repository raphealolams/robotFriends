import * as actions from './actions';
import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED,
} from './constants'

import configureStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

const mockStore = configureStore([thunkMiddleware])

describe('searchRobot', () => {
    it('should creat an action to search robot', () => {
        const text = 'woo'
        const expectedAction = {
            type: CHANGE_SEARCH_FIELD,
            payload: text
        }

        expect(actions.setSearchField(text)).toEqual(expectedAction)
    })
})


describe('requestRobots', () => {
    it('handles requesting robots', () => {
        const store = mockStore();
        store.dispatch(actions.requestRobots())
        const action = store.getActions()
        const expectedAction = {
            type: REQUEST_ROBOTS_PENDING,
        }
        expect(action[0]).toEqual(expectedAction)
    })
})