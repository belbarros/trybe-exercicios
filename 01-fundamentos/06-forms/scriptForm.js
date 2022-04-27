let btnSubmit = document.getElementById('btnSubmit');

btnSubmit.addEventListener('click', function(event){
    event.preventDefault();
});

let btnClear = document.getElementById('btnClear');
let form = document.getElementById('trybeTrip');

btnClear.addEventListener('click', function(event) {
form.reset();
});
