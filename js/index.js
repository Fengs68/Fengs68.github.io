$(this).scroll(() => {
	let a = $(this).scrollTop()
	if (a === 0) {
		$(".navbar")
			.removeClass("bg-dark")
			.css("padding-top", "16px")
			.css("padding-bottom","0")
			.find(".nav-link")
			.removeClass("text-white")
	} else {
		$(".navbar")
			.addClass("bg-dark")
			.css("padding-top", "8px")
			.css("padding-bottom","8px")
			.find(".nav-link")
			.addClass("text-white")
	}
})
$(".source-item")
	.mouseenter(function() {
		$(this)
			.parent()
			.animate({
				top: "-10px"
			}, 250)
	}).mouseleave(function() {
		$(this)
			.parent()
			.animate({
				top: "0px"
			}, 250)
			
	})

$(".carousel").carousel({
	interval: 2000
})
