import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED,
} from './constants'

import * as reducers from './reducers'


describe('searchRobots', () => {
    const initialStateSearch = {
        searchField: ''
    }
    it('should return the initial state', () => {
        expect(reducers.searchRobots(undefined, {})).toEqual({ searchField: '' })
    })

    it('should handle CHANGE_SEARCH_FIELD', () => {
        expect(reducers.searchRobots(initialStateSearch, {
            type: CHANGE_SEARCH_FIELD,
            payload: 'abc'
        })).toEqual({
            searchField: 'abc'
        })
    })
})


describe('requestRobots', () => {
    const initialStateRobots = {
        isPending: false,
        robots: [],
        error: ''
    }
    it('should return the initial state', () => {
        expect(reducers.requestRobot(undefined, {})).toEqual(initialStateRobots)
    })

    it('should handle request REQUEST_ROBOTS_PENDING', () => {
        expect(reducers.requestRobot(initialStateRobots, {
            type: REQUEST_ROBOTS_PENDING
        })).toEqual({
            robots: [],
            isPending: true,
            error: ''
        })
    })


    it('should handle request REQUEST_ROBOTS_SUCCESS action', () => {
        expect(reducers.requestRobot(initialStateRobots, {
            type: REQUEST_ROBOTS_SUCCESS,
            payload: [
                {
                    id: 1,
                    name: 'Leanne Graham',
                    username: 'Bret',
                    email: 'Sincere@april.biz'
                },
            ]
        })).toEqual({
            robots: [
                {
                    id: 1,
                    name: 'Leanne Graham',
                    username: 'Bret',
                    email: 'Sincere@april.biz'
                },
            ],
            isPending: true,
            error: ''
        })
    })


    it('should handle request REQUEST_ROBOTS_FAILED action', () => {
        expect(reducers.requestRobot(initialStateRobots, {
            type: REQUEST_ROBOTS_FAILED,
            payload: 'Error'
        })).toEqual({
            robots: [],
            isPending: false,
            error: 'Error'
        })
    })
})