module.exports = function reverse (n) {
    if( n < 0 ) {
        return +n.toString().substring(1).split('').reverse().join('');
    }
    return +n.toString().split('').reverse().join('');
}