var role = "Business Systems Analyst";
var formattedName = HTMLheaderName.replace("%data%", "Matthew Wong");
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").prepend(formattedName);
$("#header").append(formattedRole);

var awesomeThoughts = "I am Matthew Wong and I am AWESOME";
var funThoughts = awesomeThoughts.replace("AWESOME","fun");
console.log(awesomeThoughts);
console.log(funThoughts);
console.log(formattedRole);