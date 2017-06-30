// * Create a new file named `ClozeCard.js`:

// * This file should define a Node module that exports a constructor for creating cloze-deletion flashcards, e.g.:
//   module.exports = ClozeCard;`

// * The constructor should accept two arguments: `text` and `cloze`.

// * The constructed object should have a `cloze` property that contains _only_ the cloze-deleted portion of the text.

// * The constructed object should have a `partial` property that contains _only_ the partial text.

// * The constructed object should have a `fullText` property that contains _only_ the full text.

// * The constructor should throw or log an error when the cloze deletion does _not_ appear in the input text.

// * Use prototypes to attach these methods, wherever possible.

var S = require('string');

function ClozeCard(text, cloze) {
	this.fullText = text;
	this.cloze = cloze;
	this.partial = function() {
    	var validation = S(this.fullText).include(cloze)
    	if(validation){
    		var partial = S(this.fullText).replaceAll(this.cloze, '..........').s; 
    		return partial;
    	}
    	else{
    		console.log("Error: Cloze deletion does not appear in the input text");
    		throw error;
    	}
  };
};

module.exports = ClozeCard;