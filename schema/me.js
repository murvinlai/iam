/*
* Schema for a person identity
*/

var me = {
    name    :   {
        title   :   {   'type':String, 'default': '' },     // Mr. Mrs, Miss, Dr, etc
        first   :   {   'type':String, 'default': '' },
        middle  :   {   'type':String, 'default': '' },
        last    :   {   'type':String, 'default': '' },
        init    :   {   'type':String, 'default': '' }
    },
}

module.exports.me;