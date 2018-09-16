var thoughtsPt = [
	"Hyphae rule",
	"You are only as good as your hyphal network",
	"Practice makes permanent",
	"Two roads diverged in the woods",
];


exports.getThought = function(){
	var idx = Math.floor(Math.random() * thoughtsPt.length);
	return thoughtsPt[idx];
};