/* 
* Schema for a person contact / communication 
*/

var me_contact = {
    
    mid     :   {   'type':String, 'default': '' },         /* Me Id */
    phone   :   {
        home    :   {   'type':String, 'default': '' },
        fax     :   {   'type':String, 'default': '' },
        mobile  :   {   'type':String, 'default': '' },
        office  :   {   'type':String, 'default': '' },
        other   : []
    },
    
    email   : {
        primary :   {   'type':String, 'default': '' },
        secondary:  []
    },
   
   address  :   {
        home: {
            type:   {   'type':String, 'default': '' },
            unit:   {   'type':String, 'default': '' },
            po  :   {   'type':String, 'default': '' },
            street: {   'type':String, 'default': '' },
            city:   {   'type':String, 'default': '' },
            state:  {   'type':String, 'default': '' },
            country:{   'type':String, 'default': '' },
            zipcode:{   'type':String, 'default': '' }
        },
        other: []
   }
   
}

module.exports.me_contact;