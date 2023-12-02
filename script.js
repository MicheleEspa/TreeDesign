$('.hamburger').hover(function() {
    $(this).find('span').css('background-color', 'white');
}, function() {
    $(this).find('span').css('background-color', 'rgb(124, 124, 124)'); 
});



document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('clickhere').addEventListener('click', function() {
        document.getElementById('hidemenu').style.display = 'block';
    });
});