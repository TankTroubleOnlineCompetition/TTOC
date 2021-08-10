(function(){
    fetch('/html/templates/footer.html').then(response => response.text()).then(footer => {
        $('#footer').append(footer);
    });
    fetch('/html/templates/title.html').then(response => response.text()).then(title => {
        fetch('/html/templates/navbar.html').then(res => res.text()).then(navbar => {
            $('#top').after(navbar);
            $('#top').append(title);
        });
    });
})();