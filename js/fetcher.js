(function () {
	document.addEventListener('contextmenu', event => event.preventDefault());

	fetch('templates/footer.html').then(response => response.text()).then(footer => {
		$('#footer').append(footer);
	});
	fetch('templates/title.html').then(response => response.text()).then(title => {
		fetch('templates/navbar.html').then(res => res.text()).then(navbar => {
			$('#top').after(navbar);
			$('#top').append(title);
		});
	});
})();