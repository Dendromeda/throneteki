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

    getStatValueOrDefault(stat) {
        if(!this.props.stats) {
            return 0;
        }

        return this.props.stats[stat] || 0;
    }

    getControlButtons(type) {
        if(!this.props.showControls) {
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
                    <span><img src='/img/Gold.png' title='Gold' alt='Gold' /> { this.getStatValueOrDefault('gold') }</span>
                    { this.getControlButtons('gold') }
                </div>
                <div className='state'>
                    <span><img src='/img/Power.png' title='Power' alt='Power' /> { this.getStatValueOrDefault('totalPower') }</span>
                    { this.getControlButtons('power') }
                </div>
                <div className='state'>
                    <span><img src='/img/Reserve.png' title='Reserve' alt='Reserve' /> { this.getStatValueOrDefault('reserve') }</span>
                    { this.getControlButtons('reserve') }
                </div>
                <div className='state'>
                    <span><img src='/img/Claim.png' title='Claim' alt='Claim' /> { this.getStatValueOrDefault('claim') }</span>
                    { this.getControlButtons('claim') }
                </div>
                { this.props.firstPlayer ? <div className=''>First player</div> : null }
            </div>
        );
    }
}

PlayerStats.displayName = 'PlayerStats';
PlayerStats.propTypes = {
    firstPlayer: React.PropTypes.bool,
    playerName: React.PropTypes.string,
    sendGameMessage: React.PropTypes.func,
    showControls: React.PropTypes.bool,
    stats: React.PropTypes.object,
    user: React.PropTypes.object
};

export default PlayerStats;
