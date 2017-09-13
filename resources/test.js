$("button").click(function () {
	$("#content").hide();
	$("#yt")[0].src += "?autoplay=1";
	setTimeout(function(){ $("#yt").show(); }, 200);
});
