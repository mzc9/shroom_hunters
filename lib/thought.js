var thoughtsPt = [
	"Hyphae rule",
	"You are only as good as your hyphal network",
	"Practice makes permanent",
	"Two roads diverged in the woods",
	"Meet the xyl'em and the phlo'em, You'll be mighty glad to know'em, It's a privilege to grow'em, and they surround our ho'em, 'Tis more than a silly po'em"
];


exports.getThought = function(){
	var idx = Math.floor(Math.random() * thoughtsPt.length);
	return thoughtsPt[idx];
};