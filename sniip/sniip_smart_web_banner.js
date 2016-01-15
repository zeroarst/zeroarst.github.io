/*
 * Sniip Smart Web Banner Script
 * Version: 0.1
*/

var isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    any: function () {
        return (isMobile.Android() || isMobile.iOS());
    }
};

$(document).ready(function(){
    if(isMobile.any()){
        $('#sniipSmartWebBanner').css('display', 'block');
    }
});

$(document).on('click', '#swb-close', function (event) {
        event.preventDefault();
        var $banner = $('#sniipSmartWebBanner');
        $banner.css('display', 'none');
    });

$(document).on('click', '#swb_content', function (event) {
        event.preventDefault();
        var retailerCode = $('#swb_content').attr('data-retailer-code');

        var params;
        var h;
        if(location.search.length > 0) {
            params = window.GetQueryString(location.search.substr(1));
            if (params["h"] != null) {
                h = params["h"];
            }
        }
        if(retailerCode)
            window.location = 'http://qr.lk/?r=' + retailerCode + (h != null ? '&h=' + h : '');
});

window.GetQueryString = function(q) {
    return (function(a) {
        if (a == "") return {};
        var b = {};
        for (var i = 0; i < a.length; ++i) {
            var p = a[i].split('=');
            if (p.length != 2) continue;
            b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
        }
        return b;
    })(q.split("&"));
};

