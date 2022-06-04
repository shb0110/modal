document.getElementsByClassName("btn")[0].addEventListener(
	"click",
	function () {
		document.getElementsByClassName("bg")[0].classList.add("active")
		document.getElementsByClassName("modal")[0].classList.add("active")
	}
)
document.getElementsByClassName("close")[0].addEventListener(
	"click",
	function () {
		document.getElementsByClassName("bg")[0].classList.remove("active")
		document.getElementsByClassName("modal")[0].classList.remove("active")
	}
)
document.getElementsByClassName("yopish")[0].addEventListener(
	"click",
	function () {
		document.getElementsByClassName("bg")[0].classList.remove("active")
		document.getElementsByClassName("modal")[0].classList.remove("active")
	}
)
document.getElementsByClassName("bg")[0].addEventListener(
	"click",
	function () {
		document.getElementsByClassName("modal")[0].classList.add("pulse")
		setTimeout(RemovePulse, 400)
	}
)
function RemovePulse() {
	document.getElementsByClassName("modal")[0].classList.remove("pulse")
}