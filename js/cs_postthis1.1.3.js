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



   $("#1").append('<div id="d_tt1" class="div_tt">share on facebook</div>');
   $("#2").append('<div id="d_tt2" class="div_tt">tweet it on twitter</div>');
   $("#3").append('<div id="d_tt3" class="div_tt">share on facebook</div>');
   $("#4").append('<div id="d_tt4" class="div_tt">share on facebook</div>');
   $("#5").append('<div id="d_tt5" class="div_tt">share on facebook</div>');
   $("#6").append('<div id="d_tt6" class="div_tt">share on facebook</div>');
   $("#7").append('<div id="d_tt7" class="div_tt">share on facebook</div>');
   $("#8").append('<div id="d_tt8" class="div_tt">share on facebook</div>');
   $("#9").append('<div id="d_tt9" class="div_tt">share on facebook</div>');
   $("#10").append('<div id="d_tt10" class="div_tt">share on facebook</div>');
   $("#11").append('<div id="d_tt11" class="div_tt">share on facebook</div>');
   $("#12").append('<div id="d_tt12" class="div_tt">share on facebook</div>');
   $("#13").append('<div id="d_tt13" class="div_tt">share on facebook</div>');
//   $("#14").append('<div id="d_tt14" class="div_tt">share on facebook</div>');
   $("#15").append('<div id="d_tt15" class="div_tt">share on facebook</div>');
   $("#17").append('<div id="d_tt17" class="div_tt">share on facebook</div>');


   $("#titleText_H32").mouseover(function () {
   
    $("#expand_tt_h32").css('display', 'block');
    $("#expand_tt_h32").show("slow");
    $("#expand_tt_h32").delay(600).fadeOut();  
	 
    //alert('mouse over');
    });

   $('#titleText_H32').unbind('mouseover');

   var id_divn=1;
   var id_div="#" + id_divn;

   $(id_div).mouseenter(function (e) {
	
    var d_id = '#d_tt' + id_divn;
	
    //$("#d_tt").css('top',e.pageY);
    //$("#d_tt").css('left',e.pageX);
    $(d_id).show("slow");
    $(d_id).delay(700).fadeOut();  

    });

   $("#2").mouseenter(function (e) {

    var m_i = 2;	
    var d_id = '#d_tt' + m_i;
    //var pos_i = (32 + 1) * m_i + 5;
	
    //$("#d_tt").css('top',e.pageY);
    //$("#d_tt").css('left',e.pageX);
    //$(d_id).css('left', pos_i);
    $(d_id).show("slow");
    $(d_id).delay(700).fadeOut();  

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
