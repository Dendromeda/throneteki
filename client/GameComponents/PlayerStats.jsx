import React from 'react';

import Avatar from '../Avatar.jsx';

export class PlayerStats extends React.Component {
    constructor() {
        super();

        this.sendUpdate = this.sendUpdate.bind(this);
    }

    sendUpdate(type, direction) {
        this.props.sendGameMessage('changeStat', type, direction === 'up' ? 1 : -1);
    }

    getControlButtons(type) {
        if(!this.props.isMe) {
            return null;
        }

        return null;

        return (
            <div className='pull-right'>
                <button className='btn btn-stat' onClick={ this.sendUpdate.bind(this, type, 'down') }>
                    <img src='/img/Minus.png' title='-' alt='-' />
                </button>
                <button className='btn btn-stat' onClick={ this.sendUpdate.bind(this, type, 'up') }>
                    <img src='/img/Plus.png' title='+' alt='+' />
                </button>
            </div>
        );
    }

    render() {
        var playerAvatar = (
            <div className='player-avatar'>
                <Avatar emailHash={ this.props.user ? this.props.user.emailHash : 'unknown' } />
                <b>{ this.props.user ? this.props.user.username : 'Noone' }</b>
            </div>);

        return (
            <div className='panel player-stats'>
                { playerAvatar }
                <div className='state'>
                    <span><img src='/img/Gold.png' title='Gold' alt='Gold' /> { this.props.gold }</span>
                    { this.getControlButtons('gold') }
                </div>
                <div className='state'>
                    <span><img src='/img/Power.png' title='Power' alt='Power' /> { this.props.power }</span>
                    { this.getControlButtons('power') }
                </div>
                <div className='state'>
                    <span><img src='/img/Reserve.png' title='Reserve' alt='Reserve' /> { this.props.reserve }</span>
                    { this.getControlButtons('reserve') }
                </div>
                <div className='state'>
                    <span><img src='/img/Claim.png' title='Claim' alt='Claim' /> { this.props.claim }</span>
                    { this.getControlButtons('claim') }
                </div>
            </div>
        );
    }
}

PlayerStats.displayName = 'PlayerStats';
PlayerStats.propTypes = {
    claim: React.PropTypes.number,
    gold: React.PropTypes.number,
    isMe: React.PropTypes.bool,
    playerName: React.PropTypes.string,
    power: React.PropTypes.number,
    reserve: React.PropTypes.number,
    sendGameMessage: React.PropTypes.func,
    user: React.PropTypes.object
};

export default PlayerStats;
