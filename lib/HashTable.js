module.exports = function HashTable() {

    var table = [];
    // We can just use the javascript object to store the table value,
    // so that we don't need to worry about the empty spaces of the array.

    var loseloseHashCode = function (key) {
        var hash = 0;
        for (var i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % 37;
    };

    var djb2HashCode = function (key) {
        var hash = 5381;
        for (var i = 0; i < key.length; i++) {
            hash = hash * 33 + key.charCodeAt(i);
        }
        return hash % 1013;
    };

    var hashCode = function (key) {
        // return loseloseHashCode(key);
        return djb2HashCode(key);
    };

    this.put = function (key, value) {
        var position = hashCode(key);
        console.log(position + ' - ' + key);
        table[position] = value;
    };

    this.get = function (key) {
        return table[hashCode(key)];
    };

    this.remove = function(key){
        table[hashCode(key)] = undefined;
    };

    this.print = function () {
        for (var i = 0; i < table.length; ++i) {
            if (table[i] !== undefined) {
                console.log(i + ": " + table[i]);
            }
        }
    };
}