//arrey quote
var wordlist=[{ 
	quoteOutput:"Be yourself; everyone else is already taken",
	authorOutput:"Oscar Wilde"
},
{
	quoteOutput:"So many books, so little time.",
	authorOutput:"Frank Zappa"
},
{
	quoteOutput:"A room without books is like a body without a soul.",
	authorOutput:"Marcus Tullius Cicero"
},
{
	quoteOutput:"You only live once, but if you do it right, once is enough.",
	authorOutput:"Mae West"
},
{
	quoteOutput:"If you tell the truth, you don't have to remember anything.",
	authorOutput:"Mark Twain"
}
]
//function button
function newquote(){
	for(var i=0;i<wordlist.length;i++){
		var quote=Math.floor(Math.random()*4)
	}
	document.getElementById("quoteOutput").innerHTML=wordlist[quote].quoteOutput;
	document.getElementById("authorOutput").innerHTML=wordlist[quote].authorOutput;
}