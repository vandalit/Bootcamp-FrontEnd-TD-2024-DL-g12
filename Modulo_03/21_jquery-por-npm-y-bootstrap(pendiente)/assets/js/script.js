import "../../node_modules/jquery/dist/jquery.js"
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.js";

$(document).ready(function(){
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
});