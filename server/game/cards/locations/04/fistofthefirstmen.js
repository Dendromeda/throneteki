const DrawCard = require('../../../drawcard.js');

class FistOfTheFirstMen extends DrawCard {
    setupCardAbilities(ability) {
        this.persistentEffect({
            condition: () => this.hasHigherReserveThanOpponent(),
            match: (card) => card.getType() === 'character' && card.hasTrait('Ranger'),
            effect: [
                ability.effects.modifyStrength(1),
                ability.effects.cannotBeBypassedByStealth()
            ]
        });
    }

    hasHigherReserveThanOpponent() {
        let opponent = this.game.getOtherPlayer(this.controller);
        return opponent && this.controller.getTotalReserve() > opponent.getTotalReserve();
    }
}

FistOfTheFirstMen.code = '04106';

module.exports = FistOfTheFirstMen;
