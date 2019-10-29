var urlParams = new URLSearchParams(window.location.search);
        
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

var g = getUrlParameter('lid');

var hid = document.getElementById("hid");
hid.setAttribute("value", g);