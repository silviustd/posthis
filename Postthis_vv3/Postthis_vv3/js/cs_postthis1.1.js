function cs_escape_esc(burl) {

    var e_burl;

    e_burl = escape(burl);

    return e_burl;

}

function cs_unescape_esc(burl) {

    var ue_burl;

    ue_burl = unescape(burl);

    return ue_burl;

}

function cs_escape(burl) {

    var e_burl;

    e_burl = encodeURIComponent(burl);

    return e_burl;

}

function cs_unescape(burl) {

    var ue_burl;

    ue_burl = decodeURIComponent(burl);

    return ue_burl;
}



$("#1").append('<div id="d_tt1" class="div_tt">share it on facebook</div>');
$("#2").append('<div id="d_tt2" class="div_tt">tweet it on twitter</div>');
$("#3").append('<div id="d_tt3" class="div_tt">link it on linkedin</div>');
$("#4").append('<div id="d_tt4" class="div_tt">google it on google</div>');
$("#5").append('<div id="d_tt5" class="div_tt">digg it</div>');
$("#6").append('<div id="d_tt6" class="div_tt">redd it</div>');
$("#7").append('<div id="d_tt7" class="div_tt">stumble it on stumble</div>');
$("#8").append('<div id="d_tt8" class="div_tt">tumble it on tumblr</div>');
$("#9").append('<div id="d_tt9" class="div_tt">pin it</div>');
$("#10").append('<div id="d_tt10" class="div_tt">taste it on delicious</div>');
$("#11").append('<div id="d_tt11" class="div_tt">blog it on blogger</div>');
$("#12").append('<div id="d_tt12" class="div_tt">publish it on wordpress</div>');
$("#13").append('<div id="d_tt13" class="div_tt">print it</div>');
//   $("#14").append('<div id="d_tt14" class="div_tt">share on facebook</div>');
$("#15").append('<div id="d_tt15" class="div_tt">email it</div>');
$("#16").append('<div id="d_tt16" class="div_tt">socialize on socl</div>');

if (pt_ver == 'e32px') {
    $("#logo").append('<div id="logo_tt" class="div_tt">post this</div>');
}
else if (pt_ver == 'v32px') {

$("#logo").append('<div id="logo_tt" class="div_tt">post this</div>');
$("#logo_v").append('<div id="logov_tt" class="div_tt">post this</div>');
$("#titleText").append('<div id="dec_tt" class="div_tt">expand</div>');
$("#titleText_m").append('<div id="decm_tt" class="div_tt">collapse</div>');

}




$("#titleText_H32").mouseover(function() {

    $("#expand_tt_h32").css('display', 'table');
    $("#expand_tt_h32").show("slow");
    $("#expand_tt_h32").delay(600).fadeOut();

    //alert('mouse over');
});

$('#titleText_H32').unbind('mouseover');



$("#1").mouseenter(function(e) {

    var id_divn = 1;
    var d_id = '#d_tt' + id_divn;

    //$("#d_tt").css('top',e.pageY);
    //$("#d_tt").css('left',e.pageX);
    $(d_id).show("slow");
    $(d_id).delay(700).fadeOut();

});

$("#2").mouseenter(function(e) {

    var id_divn = 2;
    var d_id = '#d_tt' + id_divn;

    //$("#d_tt").css('top',e.pageY);
    //$("#d_tt").css('left',e.pageX);
    $(d_id).show("slow");
    $(d_id).delay(700).fadeOut();

});

$("#3").mouseenter(function(e) {

    var id_divn = 3;
    var d_id = '#d_tt' + id_divn;

    //$("#d_tt").css('top',e.pageY);
    //$("#d_tt").css('left',e.pageX);
    $(d_id).show("slow");
    $(d_id).delay(700).fadeOut();

});

$("#4").mouseenter(function(e) {

    var id_divn = 4;
    var d_id = '#d_tt' + id_divn;

    //$("#d_tt").css('top',e.pageY);
    //$("#d_tt").css('left',e.pageX);
    $(d_id).show("slow");
    $(d_id).delay(700).fadeOut();

});

$("#5").mouseenter(function(e) {

    var id_divn = 5;
    var d_id = '#d_tt' + id_divn;

    //$("#d_tt").css('top',e.pageY);
    //$("#d_tt").css('left',e.pageX);
    $(d_id).show("slow");
    $(d_id).delay(700).fadeOut();

});

$("#6").mouseenter(function(e) {

    var id_divn = 6;
    var d_id = '#d_tt' + id_divn;

    //$("#d_tt").css('top',e.pageY);
    //$("#d_tt").css('left',e.pageX);
    $(d_id).show("slow");
    $(d_id).delay(700).fadeOut();

});

$("#7").mouseenter(function(e) {

    var id_divn = 7;
    var d_id = '#d_tt' + id_divn;

    //$("#d_tt").css('top',e.pageY);
    //$("#d_tt").css('left',e.pageX);
    $(d_id).show("slow");
    $(d_id).delay(700).fadeOut();

});

$("#8").mouseenter(function(e) {

    var id_divn = 8;
    var d_id = '#d_tt' + id_divn;

    //$("#d_tt").css('top',e.pageY);
    //$("#d_tt").css('left',e.pageX);
    $(d_id).show("slow");
    $(d_id).delay(700).fadeOut();

});

$("#9").mouseenter(function(e) {

    var id_divn = 9;
    var d_id = '#d_tt' + id_divn;

    //$("#d_tt").css('top',e.pageY);
    //$("#d_tt").css('left',e.pageX);
    $(d_id).show("slow");
    $(d_id).delay(700).fadeOut();

});

$("#10").mouseenter(function(e) {

    var id_divn = 10;
    var d_id = '#d_tt' + id_divn;

    //$("#d_tt").css('top',e.pageY);
    //$("#d_tt").css('left',e.pageX);
    $(d_id).show("slow");
    $(d_id).delay(700).fadeOut();

});

$("#11").mouseenter(function(e) {

    var id_divn = 11;
    var d_id = '#d_tt' + id_divn;

    //$("#d_tt").css('top',e.pageY);
    //$("#d_tt").css('left',e.pageX);
    $(d_id).show("slow");
    $(d_id).delay(700).fadeOut();

});

$("#12").mouseenter(function(e) {

    var id_divn = 12;
    var d_id = '#d_tt' + id_divn;

    //$("#d_tt").css('top',e.pageY);
    //$("#d_tt").css('left',e.pageX);
    $(d_id).show("slow");
    $(d_id).delay(700).fadeOut();

});

$("#13").mouseenter(function(e) {

    var id_divn = 13;
    var d_id = '#d_tt' + id_divn;

    //$("#d_tt").css('top',e.pageY);
    //$("#d_tt").css('left',e.pageX);
    $(d_id).show("slow");
    $(d_id).delay(700).fadeOut();

});

$("#15").mouseenter(function(e) {

    var id_divn = 15;
    var d_id = '#d_tt' + id_divn;

    //$("#d_tt").css('top',e.pageY);
    //$("#d_tt").css('left',e.pageX);
    $(d_id).show("slow");
    $(d_id).delay(700).fadeOut();

});

$("#16").mouseenter(function(e) {

    var id_divn = 16;
    var d_id = '#d_tt' + id_divn;

    //$("#d_tt").css('top',e.pageY);
    //$("#d_tt").css('left',e.pageX);
    $(d_id).show("slow");
    $(d_id).delay(700).fadeOut();

});

if (pt_ver == 'e32px') {

    $("#logo").mouseenter(function(e) {

        var d_id = '#logo_tt';

        //$("#d_tt").css('top',e.pageY);
        //$("#d_tt").css('left',e.pageX);
        $(d_id).show("slow");
        $(d_id).delay(700).fadeOut();

    });
}
else if (pt_ver == 'v32px') {
   $("#logo").mouseenter(function(e) {

        var d_id = '#logo_tt';

        //$("#d_tt").css('top',e.pageY);
        //$("#d_tt").css('left',e.pageX);
        $(d_id).show("slow");
        $(d_id).delay(700).fadeOut();

    });

   $("#logo_v").mouseenter(function(e) {

        var d_id = '#logov_tt';

        //$("#d_tt").css('top',e.pageY);
        //$("#d_tt").css('left',e.pageX);
        $(d_id).show("slow");
        $(d_id).delay(700).fadeOut();

    });

   $("#titleText").mouseenter(function(e) {

        var d_id = '#dec_tt';

        //$("#d_tt").css('top',e.pageY);
        //$("#d_tt").css('left',e.pageX);
        $(d_id).show("slow");
        $(d_id).delay(700).fadeOut();

    });


   $("#titleText_m").mouseenter(function(e) {

        var d_id = '#decm_tt';

        //$("#d_tt").css('top',e.pageY);
        //$("#d_tt").css('left',e.pageX);
        $(d_id).show("slow");
        $(d_id).delay(700).fadeOut();

    });

}



//   $("#1").mouseleave(function () {
//$("#d_tt").css('display', 'none');
//    document.getElementById("d_tt").style.display = "none";
//   });
//   $("#1").mouseover(function () {    
//    var d_id = 'd_tt' + 1;    
//    $("#d_tt").show("slow");
//    $("#d_tt").delay(700).fadeOut();  
//    });??