
var text = '{ "mockup" : [' +
'{ "content":"Javascript for loop is surprisingly fast" , "user":"TurnaroundGames" },' +
'{ "content":"great article to know about async programming in node js" , "user":"h_sa1994" },' +
'{ "content":"Newbie question, mis-typing variable names" , "user":"blitz4" },' +
'{ "content":"I made a version of Gitfolio with vanilla JS" , "user":"weakN0" },' +
'{ "content":"Serverless (cloud synced) storage solutions?" , "user":"MrXyfir" },' +
'{ "content":"Async/Await Issue? Scope Issue?" , "user":"Jeffylew77" },' +
'{ "content":"Feeling the imposter syndrome hard, need advice" , "user":"imanuglyperson" },' +
'{ "content":"Regex and Unicode in javascript" , "user":"brn27" },' +
'{ "content":"Github - dsa.js: Data Structures and Algorithms explained and implemented in Javascript" , "user":"adriansky" },' +
'{ "content":"NPM package for javascript/Node.js competitive programmers" , "user":"themanish003" } ]}';

var obj = JSON.parse(text);


var text2 = '{ "mockup2" : [' +
'{ "history":"Basic Javascript" , "time":"5 minutes ago" },' +
'{ "history":"Javascript Function Invocation" , "time":"42 minutes ago" },' +
'{ "history":"Javascript Output" , "time":"8 hours ago" },' +
'{ "history":"Javascript Syntax" , "time":"8 hours ago" },' +
'{ "history":"Javascript Variables" , "time":"8 hours ago" },' +
'{ "history":"Javascript Data Types" , "time":"8 hours ago" },' +
'{ "history":"Javascript Functions" , "time":"8 hours ago" },' +
'{ "history":"Javascript Coding Conventions" , "time":"8 hours ago" },' +
'{ "history":"Javascript Objects" , "time":"8 hours ago" },' +
'{ "history":"Javascript Regular Expressions" , "time":"8 hours ago" },' +
'{ "history":"Javascript Debugging" , "time":"8 hours ago" },' +
'{ "history":"Javascript Coding Conventions" , "time":"8 hours ago" },' +
'{ "history":"Javascript Best Practices" , "time":"8 hours ago" } ]}';

var obj2 = JSON.parse(text2);


/* time */
var dateInfo = new Date();
var hr,
  _min = (dateInfo.getMinutes() < 10) ? "0" + dateInfo.getMinutes() : dateInfo.getMinutes(),
  ampm = (dateInfo.getHours() >= 12) ? "PM" : "AM";

// replace 0 with 12 at midnight, subtract 12 from hour if 13–23
if (dateInfo.getHours() == 0) {
  hr = 12;
} else if (dateInfo.getHours() > 12) {
  hr = dateInfo.getHours() - 12;
} else {
  hr = dateInfo.getHours();
}

var currentTime = hr + ":" + _min;


var text3 = '{ "mockup3" : [' +
'{ "repo":"GoogleChrome" , "number":"#1341" , "issue":"How to get the inner text of elements from the return values of page.$$" },' +
'{ "repo":"GoogleChrome" , "number":"#3051" , "issue":"How to get text from a element ?" },' +
'{ "repo":"apollographq1" , "number":"#131" , "issue":"Parse variables" },' +
'{ "repo":"apollographq1" , "number":"#3967" , "issue":"It is not possible to pass Authorization header to Websocket" },' +
'{ "repo":"apollographq1" , "number":"#256" , "issue":"Some mock text" },' +
'{ "repo":"apollographq1" , "number":"#4562" , "issue":"I already have learn so much and had a lot of fun. Thank You Chingu!" } ]}';

var obj3 = JSON.parse(text3);
