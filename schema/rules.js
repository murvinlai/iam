/*
* Privacy Rules
*/

var rules ={    // not normalized and optimized for Mongo storage.
    name        :   String,     /* Name of the rule */
    title       :   String,     /* Display purpose title */
    content     :   {
                        text    :   String,      /* Details about the rule, in text */
                        html    :   String       /* Details about the rule, in html */
                    },    
    category    :   String,     /* Category of the rules */
    applyFields :   [],         /* fields that apply on .  List of string */
    allowAccessFields :   [],   /* fields that allow information or data to be shared */ 
    validateFunc:   Function,   /* Function that does validation */
    author      :   [],         /* List of author */         
    verifiedBy  :   [],         /* Rules that are verified by */
    applyLocation:  [],         /* Locations where this privacy terms will be in effect */
    expire      :   Date,       /* Expiration date */
    modification:   []          /* History of modification */
};