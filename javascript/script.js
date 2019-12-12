var main = document.getElementsByClassName("main")[0],
		chapters = document.getElementsByClassName("chapter"),
		navMenu = document.getElementsByClassName("cell"),
		prev = document.getElementsByClassName("prev")[0],
		next = document.getElementsByClassName("next")[0],
		percentages = [0, 13, 23, 37, 51, 65, 80, 100, 100, 115],
		current = 0;

function chapterArrows(number) {
	scrollChapter(current += number);
}

function scrollChapter(number) {
	current = number;
	prev.style.display = "block";
	next.style.display = "block";

	if (number == 0)
		prev.style.display = "none";
	else if (number == chapters.length -1)
		next.style.display = "none";

	for (var chapter of chapters) {
		chapter.className = "chapter ";
	}

	for (var cell of navMenu) {
		cell.className = "cell ";
	}

	chapters[number].classList.add("current-chapter");
	navMenu[number].classList.add("current-cell");
	main.style.backgroundPosition = percentages[number] + "%";

	if (number == 9)
		chapters[9].classList.add("final-chapter");
}