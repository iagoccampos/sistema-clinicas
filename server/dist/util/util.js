"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function cardToNumber(card) {
    if (!card) {
        return 0;
    }
    if (typeof card === 'number') {
        return card;
    }
    const intPart = Number.parseInt(card, 10);
    if (!intPart) {
        return (card.charCodeAt(0) - 64) * 1000;
    }
    const charPart = card[card.length - 1];
    if (/^\d$/.test(charPart)) {
        return intPart;
    }
    return ((charPart.charCodeAt(0) - 64) * 1000 + intPart);
}
exports.cardToNumber = cardToNumber;
//# sourceMappingURL=util.js.map