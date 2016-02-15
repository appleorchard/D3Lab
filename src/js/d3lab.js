/* required underscore.js */
var d3lab = {};

(function (target) {

    /* Utils */
    function repeatedly(times, fun) {
        return _.map(_.range(times), fun);
    }

    function singleRandomData(max) {
        return function () {
            return Math.floor(Math.random() * (max + 1));
        };
    }

    target.repeatedly = repeatedly;
    target.singleRandomData = singleRandomData;

})(d3lab);
