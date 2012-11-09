/* 
* Schema for a person contact / communication 
*/

var me_contact = {
    phone   :   {
        home    :   {   'type':String, 'default': '' },
        fax     :   {   'type':String, 'default': '' },
        mobile  :   {   'type':String, 'default': '' },
        office  :   {   'type':String, 'default': '' },
        others  : []
    },
    
    email   : {
        primary :   {   'type':String, 'default': '' },
        secondary:  []
    },
   
   
   
}

module.exports.me_contact;