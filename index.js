 // script.js
 document.getElementById('openSidebarBtn').addEventListener('click', function () {
    document.getElementById('sidebar').classList.add('open');
});

document.getElementById('closeSidebarBtn').addEventListener('click', function () {
    document.getElementById('sidebar').classList.remove('open');
});

document.querySelector('.menuicon').addEventListener('click', function () {
    document.querySelector('.head2 ul').classList.toggle('show');
});






