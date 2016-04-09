var bio = {
	"name" : "Matthew Wong ",
	"role" : "Business Systems Analyst",
	"contacts" : {
		"mobile" : "559-859-8796",
		"email" : "wong.k.matthew@gmail.com",
		"github" : "wongkmatthew",
		"twitter" : "@wongkmatthew",
		"location" : "Santa Clara",
	},
"welcomeMessage" : "Just a person who loves to learn!",
	"skills" : [
		"System Analysis", "MySQL", "System Design", "Agile", "Scrum",  "Front End Development"
		],
}

var work = {
	"jobs" : [
	{
		"employer" : "Cisco Systems",
		"title" : "Business Systems Analyst",
		"dates" : "November 2014 - Present",
		"experience" : "Bacon ipsum dolor amet short ribs ball tip beef ham hock biltong salami t-bone filet mignon ribeye alcatra. Prosciutto sirloin shoulder pork loin strip steak capicola salami turkey hamburger drumstick ball tip chuck brisket kevin picanha. Pork belly andouille leberkas, boudin shoulder short loin swine prosciutto sausage bresaola landjaeger beef meatloaf alcatra. Turducken pastrami ribeye, sirloin frankfurter t-bone boudin shankle capicola tongue. Cupim kielbasa tail shoulder flank rump. Swine tongue kielbasa, picanha fatback alcatra cow short ribs chicken tri-tip bresaola. Alcatra biltong rump landjaeger cow leberkas capicola porchetta ham hock, corned beef venison filet mignon.",
	},
	{
		"employer" : "Cisco Systems",
		"title" : "IT Anaylst",
		"dates" : "July 2012 - November 2014",
		"experience" : "Bacon ipsum dolor amet short ribs ball tip beef ham hock biltong salami t-bone filet mignon ribeye alcatra. Prosciutto sirloin shoulder pork loin strip steak capicola salami turkey hamburger drumstick ball tip chuck brisket kevin picanha. Pork belly andouille leberkas, boudin shoulder short loin swine prosciutto sausage bresaola landjaeger beef meatloaf alcatra. Turducken pastrami ribeye, sirloin frankfurter t-bone boudin shankle capicola tongue. Cupim kielbasa tail shoulder flank rump. Swine tongue kielbasa, picanha fatback alcatra cow short ribs chicken tri-tip bresaola. Alcatra biltong rump landjaeger cow leberkas capicola porchetta ham hock, corned beef venison filet mignon.",
	},
	{
		"employer" : "Cisco Systems",
		"title" : "IT Analyst Intern",
		"dates" : "June 2011 - September 2011",
		"experience" : "Bacon ipsum dolor amet short ribs ball tip beef ham hock biltong salami t-bone filet mignon ribeye alcatra. Prosciutto sirloin shoulder pork loin strip steak capicola salami turkey hamburger drumstick ball tip chuck brisket kevin picanha. Pork belly andouille leberkas, boudin shoulder short loin swine prosciutto sausage bresaola landjaeger beef meatloaf alcatra. Turducken pastrami ribeye, sirloin frankfurter t-bone boudin shankle capicola tongue. Cupim kielbasa tail shoulder flank rump. Swine tongue kielbasa, picanha fatback alcatra cow short ribs chicken tri-tip bresaola. Alcatra biltong rump landjaeger cow leberkas capicola porchetta ham hock, corned beef venison filet mignon.",
	},
	{
		"employer" : "Santa Clara University",
		"title" : "Student Assitant",
		"dates" : "July 2010 - April 2011",
		"experience" : "Bacon ipsum dolor amet short ribs ball tip beef ham hock biltong salami t-bone filet mignon ribeye alcatra. Prosciutto sirloin shoulder pork loin strip steak capicola salami turkey hamburger drumstick ball tip chuck brisket kevin picanha. Pork belly andouille leberkas, boudin shoulder short loin swine prosciutto sausage bresaola landjaeger beef meatloaf alcatra. Turducken pastrami ribeye, sirloin frankfurter t-bone boudin shankle capicola tongue. Cupim kielbasa tail shoulder flank rump. Swine tongue kielbasa, picanha fatback alcatra cow short ribs chicken tri-tip bresaola. Alcatra biltong rump landjaeger cow leberkas capicola porchetta ham hock, corned beef venison filet mignon.",
	},
	{
		"employer" : "Town and Country Market",
		"title" : "Assistant Store Manager",
		"dates" : "July 2005 - August 2008",
		"experience" : "Bacon ipsum dolor amet short ribs ball tip beef ham hock biltong salami t-bone filet mignon ribeye alcatra. Prosciutto sirloin shoulder pork loin strip steak capicola salami turkey hamburger drumstick ball tip chuck brisket kevin picanha. Pork belly andouille leberkas, boudin shoulder short loin swine prosciutto sausage bresaola landjaeger beef meatloaf alcatra. Turducken pastrami ribeye, sirloin frankfurter t-bone boudin shankle capicola tongue. Cupim kielbasa tail shoulder flank rump. Swine tongue kielbasa, picanha fatback alcatra cow short ribs chicken tri-tip bresaola. Alcatra biltong rump landjaeger cow leberkas capicola porchetta ham hock, corned beef venison filet mignon.",
	},
	],
};

var education = {};
education["name"] = "Santa Clara University";
education["major"] = "Operations Management and Information Systems";
education["years"] = "2008 -2012";
education["city"] = "Santa Clara, CA, US";

var projects = {};
projects["Portfolio"] = "Portfolio";
projects["Project X"] = "Project X";

if(bio.skills.length > 0){

	$("#header").append(HTMLheaderName);
	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	}

