import React, { Component } from 'react';
import CounterButton from './CouterButton';

class Header extends Component {

    // shouldComponentUpdate(nextProps, nextState) {
    //     return false;
    // }

    render() {
        return (
            <div>
                <h1 className='f1'>Robo Friends</h1>
                <CounterButton color={'red'} />
            </div>
        )
    }
   
}

export default Header;