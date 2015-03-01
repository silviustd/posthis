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