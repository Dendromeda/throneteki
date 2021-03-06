const BaseAbility = require('./baseability.js');

class InsightKeyword extends BaseAbility {
    constructor() {
        super({});
        this.title = 'Insight';
    }

    meetsRequirements() {
        return true;
    }

    isCardAbility() {
        return false;
    }

    executeHandler(context) {
        let {game, challenge, source} = context;
        let drawn = challenge.winner.drawCardsToHand(1);
        game.raiseEvent('onInsight', { challenge: challenge, source: source, drawnCard: drawn });
        game.addMessage('{0} draws a card from Insight on {1}', challenge.winner, source);
    }
}

module.exports = InsightKeyword;
