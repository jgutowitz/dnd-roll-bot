module.exports = Player;

function Player(playername) {
    const obj = {};
    obj.name = playername;
    obj.health = 12;
    obj.stength = 16;
    obj.dexterity = 10;
    return obj;
}
