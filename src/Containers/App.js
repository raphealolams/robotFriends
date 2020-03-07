import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll'
import ErrorBoundary from '../Components/ErrorBoundary'
import Header from '../Components/Header';

import { setSearchField, requestRobots } from '../actions';

import './App.css'



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

    componentDidMount() {
        this.props.onRequestRobots()
    }

    render() {
        const { searchField, onSearchChange, robots, isPending } = this.props;
        const filteredRobot = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })
        return !isPending ? 
            (
                <div className='tc'>
                    <h1 className='f1'>Loading</h1>
                </div>
            )
        : 
            (
                <div className='tc'>
                    <Header/>
                    <SearchBox searchChange={onSearchChange}/>
                    <Scroll>
                        < ErrorBoundary>
                            <CardList robots={filteredRobot}/>
                        </ErrorBoundary>
                    </Scroll>
                </div>
            )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);