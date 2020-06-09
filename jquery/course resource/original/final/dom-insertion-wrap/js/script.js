$(document).ready(function() {
 
    // $('p').wrap('<div class="className" id="idName"></div>');
    $('p').wrap(function() {
        return "<div class='className' id='idName'></div>"
    });
    
});