function cs_escape_esc(burl){

 var e_burl;	

 e_burl = escape(burl);

 return e_burl;

}

function cs_unescape_esc(burl){

 var ue_burl;	

 ue_burl = unescape(burl);

 return ue_burl;

}

function cs_escape(burl){

 var e_burl;	

 e_burl = encodeURIComponent(burl);

 return e_burl;

}

function cs_unescape(burl){

 var ue_burl;	

 ue_burl = decodeURIComponent(burl);

 return ue_burl;
}



   $("#1").append('<div id="d_tt" class="div_tt">share on facebook</div>');


   $("#titleText_H32").mouseover(function () {
   
    $("#expand_tt_h32").css('display', 'block');
    $("#expand_tt_h32").show("slow");
    $("#expand_tt_h32").delay(600).fadeOut();  
	 
    //alert('mouse over');
    });

   $('#titleText_H32').unbind('mouseover');

   $("#1").mouseenter(function (e) {
	
    var d_id = 'd_tt' + 1;
	
    //$("#d_tt").css('top',e.pageY);
    //$("#d_tt").css('left',e.pageX);
    $("#d_tt").show("slow");
    $("#d_tt").delay(700).fadeOut();  

    });

//   $("#1").mouseleave(function () {
	//$("#d_tt").css('display', 'none');
//	document.getElementById("d_tt").style.display = "none";
//   });

//   $("#1").mouseover(function () {	
//    var d_id = 'd_tt' + 1;	
//    $("#d_tt").show("slow");
//    $("#d_tt").delay(700).fadeOut();  
//    });
