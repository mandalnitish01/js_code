console.log("Starting")
const accountId=238627
let accountname="ICICI Bank"
var emailAddress="email@example.com" 
/* Not to use var keywards,
 because of issue inblock scope and functional scope
 */

accountcity="Delhi"
let accountlocation //if you not declear variable value then they return {"Undefined"}

//some changes in this file :- you can not change variables values

// accountId=82973
// accountname=boy;
// emailAddress="nitish@amazon.com"


//shortcut function to print number of variables at the same time
         // That function name is   console.table([1st_variable_names, 2ns_variable_names, abd so on ])                                                             
console.table([accountId,accountname, emailAddress, accountlocation, accountcity]);
console.log(accountcity);
