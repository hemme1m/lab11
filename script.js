$(function() {

var url = 'https://www.reddit.com/r/aww/.json'

$.get(url, function(responseBody) {
	var rowNum = 1;
	var postCount = 0;

	for (var i = 1; i <= 15; i++) {
		var $row = $("#row" + rowNum)
		var $postDiv = $("<div class='col-sm-4 awwContent'>")
		var $image = $("<img>").attr("src", responseBody.data.children[i].data.thumbnail);;
		var $author = $("<p class='author'>").text("Author: " + responseBody.data.children[i].data.author);;
		var $score = $("<p class='score'>").text("Upvote Score: " + responseBody.data.children[i].data.score);
		var $permalink = $("<a>").attr("href", "https://reddit.com" + responseBody.data.children[i].data.permalink);;

		//$permalink.attr("href", "https://reddit.com" + responseBody.data.children[i].data.permalink);
		//$image.attr("src", responseBody.data.children[i].data.thumbnail);
		//$author.text("Author: " + responseBody.data.children[i].data.author);
		//$score.text("Upvote Score: " + responseBody.data.children[i].data.score)
		
		$postDiv.append($image).append($author).append($score).attr("title", responseBody.data.children[i].data.title);
		$permalink.append($postDiv);
		$row.append($permalink);

		postCount++;

		if (postCount === 3) {
			rowNum++;
			postCount = 0;
		}
	}
});

})