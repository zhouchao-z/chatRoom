function getNowTome() {
    var date = new Date();
    var time = Math.floor( date.getTime() / 1000 );
    return time;
}
module.exports.getNowTome = getNowTome;