// Thanks Jiří Bartoš (https://dev.to/bartosjiri/creating-a-preloader-for-gatsby-site-3kh1)
let body = document.body;
document.onreadystatechange = () => {
	if (document.readyState === "complete") {
		body.classList.add("preloader-is-ready");

		setTimeout(function () {
			body.classList.remove("preloader-is-active");
			body.classList.remove("preloader-is-ready");
		}, 1000);
	}
};
