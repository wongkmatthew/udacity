var role = "Business Systems Analyst";
var formattedName = HTMLheaderName.replace("%data%", "Matthew Wong");
var formattedRole = HTMLheaderRole.replace("%data%", role);

var bio = {
	"name" : "Matthew Wong ",
	"role" : "Business Systems Analyst",
	"contacts" : {
		"mobile" : "XXX-XXX-XXXX",
		"email" : "johndoe@example.com",
		"github" : "johndoe",
		"twitter" : "@johndoe",
		"location" : "location",
	},
"welcomeMessage" : "weckdsljaflkjd ;salkf jdksa  fjdlksa ;fd",
	"skills" : [
		"skills", "more skills", "skills etc."
		],
}

var work = {};
work.position = "Business Systems Analyst";
work.employer = "Cisco Systems";
work.years = 4;

var education = {};
education["name"] = "Santa Clara University";
education["years"] = "2008 -2012";
education["city"] = "Santa Clara, CA, US";

var projects = {};
projects["Portfolio"] = "Portfolio";
projects["Project X"] = "Project X";


$("#header").prepend(formattedName);
$("#header").append(formattedRole);
$("#main").append(bio.name);
$("#main").append(bio.role);
$("#main").append(bio.contacts);
$("#main").append(bio.welcomeMessage);
$("#main").append(bio.skills);
$("#main").append(work["position"]);
$("#main").append(education.name);

//var awesomeThoughts = "I am Matthew Wong and I am AWESOME";
//var funThoughts = awesomeThoughts.replace("AWESOME","fun");
//console.log(awesomeThoughts);
//console.log(funThoughts);
//console.log(formattedRole);