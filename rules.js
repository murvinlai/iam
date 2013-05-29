/*
*  This is the schema for the privacy rules.
*/

var rule = {
    name    :   String,     /* rule name */
    brief   :   String,     /* Brief Description of the rule */
    details :   String,     /* Details about the rule in text*/
    category:   String,     /* Category of the rule */
    location:   [],         /* Location in effect */
    author  :   [],         /* Information about the author who set the rule */
    expire  :   Date,       /* Rule expiry date */
    criteria:   {},         /* Criteria of the rule */
    approval:   {},
    active  :   Boolean     /* Is active or not */
}

module.exports.rule;