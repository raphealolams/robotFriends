import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setSearchField, requestRobots } from '../actions';

import MainPage from '../Components/MainPage/MainPage';



const mapStateToProps = (state) => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobot.robots,
        isPending: state.requestRobot.isPending,
        error: state.requestRobot.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}

class App extends Component {

    render() {
        return (
            <MainPage {...this.props}/> 
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);