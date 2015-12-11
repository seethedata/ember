
function addEmail() {
	message=document.getElementById('emailMessage');
	badge=document.getElementById("emailsBadge");
	emailList=document.getElementById("emailList");
	sendButton=document.getElementById("sendButton");
	activeItem=$( ".active" )[0];
	if (sendButton.hasAttribute("disabled")){
		sendButton.removeAttribute("disabled");
	}
	message.innerHTML='';
	var emailCount=badge.innerHTML;
	emailCount++;
	badge.innerHTML=emailCount;
	emailList.innerHTML=emailList.innerHTML + "<li><a role='menuitem'>" + activeItem.getAttribute("name") + "</a></li>";
}

function setIndustry(industry) {
	e=document.getElementById("buttonValue");
	e.innerHTML=industry;
}

function sendEmail(){
	message=document.getElementById('emailMessage');
	message.innerHTML='Email(s) Sent!';
	badge=document.getElementById("emailsBadge");
	emailList=document.getElementById("emailList");
	badge.innerHTML=0;
	emailList.innerHTML='';
	sendButton=document.getElementById("sendButton");
	sendButton.setAttribute("disabled","disabled");
}

$(document).ready(function() {  

	//Enable swiping...
	$(".carousel-inner").swipe( {
		//Generic swipe handler for all directions
		swipeLeft:function() {
			$(this).parent().carousel('next'); 
		},
		swipeRight: function() {
			$(this).parent().carousel('prev'); 
		},
		swipeUp: addEmail,
		//Default is 75px, set to 0 for demo so any distance triggers swipe
		threshold:0
	});
	var emailMessages=[
							["Dear Mr. Customer,<br/>\
Hello. I am the AE & Big Data Consultant with EMC federation (EMC, VMware, RSA) supporting ABC Company.<br/>\
Of many of the customers I speak with, 3 universal truths result from my conversation:<br/>\
<br/>\
1) They are not collecting all of the data they could be,<br/>\
2) They are not utilizing all the data they have already, and <br/>\
3) They do not know how to best interpret and prioritize data courses to make insightful decisions to grow the business<br/>\
Sincerely,<br/>\
A. Sales Rep"],
							["Ms. Customer,<br/>\
Do you know that your data is not telling you everything it could? I'd love to get 15 minutes sometime next week to tell you how EMC can help. We've done <br/>\enourmous amounts of work with companies just like yours. <br/>\
<br/>\
Do you have time for coffee on Tuesday?<br/>\
Looking forward to your reponse,<br/>\
A. Nother Salesrep"],
							["Dear Mr. CIO,<br/>\
Big data and IT Transformation 	is fundamentally changing GTM strategies for many of our customers. Essentially, our PHD data scientists the means to assess <br/>\
the value of the data you have and need to solve a key business question / problem, against how easy or difficult it is to attain access to that data.<br/>\
<br/>\
Do you have time next Thursday morning for a quick chat?<br/>\
Thank you,<br/>\
A. Count Executive"]
						];
		var emails=d3.select(".carousel-inner").selectAll(".item").data(emailMessages);
			emails.exit().remove();
			emails.enter()
				.append("div")
					.attr("class",function(d,i){ if (i==0) { return "item active";} else { return "item";}})
					.attr("id",function(d,i) {var index=i+1; return "email"+index})
					.attr("name",function(d,i){var index=i + 1; return "Email #" + index;})
					.append("div")
						.attr("class","email-content")
						.html(function(d) {return d});
			
			
		var verticals=["All",
						"Automotive",
						"Banking",
						"Education",
						"Engineering",
						"Energy",
						"Financial",
						"Food and Beverage",
						"Government",
						"Healthcare",
						"Insurance",
						"Manufacturing",
						"Media",
						"Retail",
						"Technology",
						"Telecommunications",
						"Transportation"
						];
		var industries=d3.select("#industries").selectAll("dropdown").data(verticals);
		industries.exit().remove();
		industries.enter()
			.append("li")
				.attr("class","dropdown")
					.append("a")
						.attr("class","dropdown-toggle")
						.attr("data-toggle","dropdown")
						.attr("role","button")
						.attr("aria-expanded","false")
						.attr("onClick",function(d) {return "setIndustry(\"" +d+"\")";})
						.text(function(d) {return d});
});