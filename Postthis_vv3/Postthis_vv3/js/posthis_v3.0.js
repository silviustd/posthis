//document.write('<scr'+'ipt type="text/javascript" src="2.js" ></scr'+'ipt>'); 

document.write('<scr'+'ipt type="text/javascript" src="http://columnasoft.com/posthis/js/cs_postthis1.0.js" ></scr'+'ipt>'); 

//<script type="text/javascript" src="//platform.twitter.com/widgets.js"></script>
//<script type="text/javascript" src="http://columnasoft.com/posthis/js/cs_postthis1.0.js"></script>


//https://www.linkedin.com/uas/oauth/authorize?oauth_token=49ccdffc-05ad-4b95-a855-a14834c9f286
//delicious, http://technorati.com/ ,pinterest

// goto http://www.buzzfeed.com/  - http://www.buzzfeed.com/post
//http://www.hubspot.com


var newwindow;

document.getElementById("isa").checked = false;


var fb_1 = false;
var tw_2 = false;
var ld_3 = false;
var gp_4 = false;
var dg_5 = false;
var rd_6 = false;
var su_7 = false;
var pi_9 = false;
var tb_8 = false;
var de_10 =false;
var bg_11 =false;
var wp_12 =false;
var pr_13 =false;
var te_14 =false;
var em_15 = false;

function switch_image(i){


var cimg = document.getElementById(i);


switch (i)
{
case 1:

fb_1=!fb_1;
if(fb_1){
//cimg.src= "http://columnasoft.com/posthis/images/sntw/icons32px/facebook.png";
cimg.src= "http://columnasoft.com/posthis/images/sntw/icons"+img_size+"/facebook.png";
}
else
{
cimg.src= "http://columnasoft.com/posthis/images/sntw/icons"+img_size+"/facebook-grey.png";
}

break

case 2:
tw_2=!tw_2;

if(tw_2){
cimg.src= "http://columnasoft.com/posthis/images/sntw/icons"+img_size+"/tw.png";
}
else
{
cimg.src= "http://columnasoft.com/posthis/images/sntw/icons"+img_size+"/tw-grey.png";
}
break;

case 3:
ld_3=!ld_3;
if(ld_3){
cimg.src= "http://columnasoft.com/posthis/images/sntw/icons"+img_size+"/linkedin.png";
}
else
{
cimg.src= "http://columnasoft.com/posthis/images/sntw/icons"+img_size+"/linkedin-grey.png";
}
break;

case 4:
gp_4=!gp_4;
if(gp_4){
cimg.src= "http://columnasoft.com/posthis/images/sntw/icons"+img_size+"/google.png";
}
else
{
cimg.src= "http://columnasoft.com/posthis/images/sntw/icons"+img_size+"/google-grey.png";
}
break;

case 5:
dg_5=!dg_5;
if(dg_5){
cimg.src= "http://columnasoft.com/posthis/images/sntw/icons"+img_size+"/digg.png";
}
else
{
cimg.src= "http://columnasoft.com/posthis/images/sntw/icons"+img_size+"/digg-grey.png";
}
break;

case 6:
rd_6=!rd_6;
if(rd_6){
cimg.src= "http://columnasoft.com/posthis/images/sntw/icons"+img_size+"/reddit.png";
}
else
{
cimg.src= "http://columnasoft.com/posthis/images/sntw/icons"+img_size+"/reddit-grey.png";
}
break;

case 7:
su_7=!su_7;
if(su_7){
cimg.src= "http://columnasoft.com/posthis/images/sntw/icons"+img_size+"/stumble.png";
}
else
{
cimg.src= "http://columnasoft.com/posthis/images/sntw/icons"+img_size+"/stumble-grey.png";
}

break;

case 8:
tb_8=!tb_8;
if(tb_8){
cimg.src= "http://columnasoft.com/posthis/images/sntw/icons"+img_size+"/tumblr.png";
}
else
{
cimg.src= "http://columnasoft.com/posthis/images/sntw/icons"+img_size+"/tumblr-grey.png";
}
break;

case 9:
pi_9=!pi_9;
if(pi_9){
cimg.src= "http://columnasoft.com/posthis/images/sntw/icons"+img_size+"/pinterest.png";
}
else
{
cimg.src= "http://columnasoft.com/posthis/images/sntw/icons"+img_size+"/pinterest-grey.png";
}
break;

case 10:
de_10=!de_10;
if(de_10){
cimg.src= "http://columnasoft.com/posthis/images/sntw/icons"+img_size+"/delicious.png";
}
else
{
cimg.src= "http://columnasoft.com/posthis/images/sntw/icons"+img_size+"/delicious-grey.png";
}
break;

case 11:
bg_11=!bg_11;
if(bg_11){
cimg.src= "http://columnasoft.com/posthis/images/sntw/icons"+img_size+"/blogger.png";
}
else
{
cimg.src= "http://columnasoft.com/posthis/images/sntw/icons"+img_size+"/blogger-grey.png";
}
break;

case 12:
wp_12=!wp_12;
if(wp_12){
cimg.src= "http://columnasoft.com/posthis/images/sntw/icons"+img_size+"/wordpress.png";
}
else
{
cimg.src= "http://columnasoft.com/posthis/images/sntw/icons"+img_size+"/wordpress-grey.png";
}
break;

case 13:
pr_13=!pr_13;
if(pr_13){
cimg.src= "http://columnasoft.com/posthis/images/sntw/icons"+img_size+"/print.png";
}
else
{
cimg.src= "http://columnasoft.com/posthis/images/sntw/icons"+img_size+"/print-grey.png";
}
break;

case 14:
te_14=!te_14;
if(te_14){
cimg.src= "http://columnasoft.com/posthis/images/sntw/icons"+img_size+"/technorati.png";
}
else
{
cimg.src= "http://columnasoft.com/posthis/images/sntw/icons"+img_size+"/technorati-grey.png";
}
break;

case 15:
em_15=!em_15;
if(em_15){
cimg.src= "http://columnasoft.com/posthis/images/sntw/icons"+img_size+"/email.png";
}
else
{
cimg.src= "http://columnasoft.com/posthis/images/sntw/icons"+img_size+"/email-grey.png";
}
break;

}
}



function cs_postthis(){

var burl = window.location.href; //document.URL;

burl = cs_escape(burl);

var btitle = document.title;

var mdesc = getMetaDescription();

var mogimage = getMetaOGImages()[0];

mogimage = cs_escape(mogimage);

var mogsitename = getMetaOGSiteName()

var pwindow;
var swindow;

if (em_15)
{
  var mailto_link = 'mailto:?subject='+document.title + '&body=I thought it may interest you: %0D' + burl + '%0D (via posthis)';
  win = window.open(mailto_link,'tempWindow');
  //if (win && win.open &&!win.closed) win.close();
}

if (te_14){
window.open('http://technorati.com/favs/?add=' + burl ,'te_post','height=400,width=520, left=0, top=0,resizable=yes,scrollbars=yes,toolbar=yes,status=yes');
}

if (pr_13){
window.print();
}

if (wp_12){
//burl = cs_escape('http://www.forces.ca/en/home/');
var qs = 'u=' + burl + '&t=' + btitle + '&i=' + mogimage;
window.location="posthis_wp.html?" + qs;
//window.open("postthis_wp.html?" + qs);
//window.open("http://columnasoft.com/blog/wp-admin/press-this.php?u=http%3A%2F%2Fwww.forces.ca%2Fen%2Fhome%2F%23.T5gGl9CtpOE.wordpress&t=FORCES.CA+-+Home&s=&v=2");
}

if (bg_11){
//burl = 'http://www.forces.ca/en/home/
window.open('http://www.blogger.com/blog-this.g?t&u=' + burl + '&n=' + btitle,'bg_post','height=430,width=470, left=0, top=0,resizable=yes,scrollbars=yes,toolbar=yes,status=yes');
}

if (de_10){
//burl = 'http://www.forces.ca/en/home/';
window.open('http://delicious.com/post?url=' + burl + '&title=' + btitle + '&notes=' + mdesc, 'de_post','height=350,width=800, left=0, top=0,resizable=yes,scrollbars=no,toolbar=yes,status=yes');
}

if (pi_9){
window.open('http://pinterest.com/pin/create/button/?url=' + burl + '&media=' + mogimage +  '&description=' + mdesc,'pi_post','height=420,width=550, left=0, top=0,resizable=yes,scrollbars=yes,toolbar=yes,status=yes');
}

if (tb_8){
window.open('http://www.tumblr.com/share/link?url=' + burl + '&name=' + btitle + '&description=' + mdesc,'tb_post','height=440,width=610, left=0, top=0,resizable=yes,scrollbars=yes,toolbar=yes,status=yes');
}

if (su_7){
window.open('http://www.stumbleupon.com/submit?url=' + burl + '&title=' + btitle,'su_post','height=600,width=790, left=0, top=0,resizable=yes,scrollbars=yes,toolbar=yes,status=yes');
}

if (rd_6){
//verify subtmit comment
window.open('http://reddit.com/submit?url=' + burl + '&title=' + btitle,'rd_post','height=640,width=690, left=0, top=0,resizable=yes,scrollbars=yes,toolbar=yes,status=yes');
}


if (dg_5){
//window.open('http://digg.com/submit?partner=addthis&url=' + burl + '&title=' + btitle + '&bodytext=testbodytext' + '&medium=' + mogimage + '&description=ssss'); 
//window.open('http://digg.com/submit?partner=addthis&url=http://news.cnet.com/8301-1035_3-57412750-94/dropping-instagram-already-try-these-android-alternatives/');

window.open('http://digg.com/submit?partner=addthis&url=' + burl + '&title=' + btitle + '&topic=', 'dg_post','height=740,width=700, left=0, top=0,resizable=yes,scrollbars=no,toolbar=yes,status=yes');
}

if (gp_4){
//burl = 'http://www.forces.ca/en/home/';
window.open('http://plus.google.com/share?url=' + burl + '&t=' + btitle,'gp_post','height=500,width=400,left=0, top=0,resizable=yes,scrollbars=yes,toolbar=yes,status=yes');

}

if (ld_3){
window.open('http://www.linkedin.com/shareArticle?mini=true&url=' + burl + '&title=' + btitle + '&summary='+ mdesc +'&source=' + mogsitename, 'ld_post','height=420,width=560, left=0, top=0,resizable=yes,scrollbars=no,toolbar=yes,status=yes');
}

if (tw_2) {
swindow= window.open('https://twitter.com/share?url=' + burl,'tw_post','height=420,width=550, left=0, top=0,resizable=yes,scrollbars=yes,toolbar=yes,status=yes');
}

if (fb_1){
window.open('https://www.facebook.com/sharer/sharer.php?u=' + burl + '&t=title','fb_post','height=400,width=500, left=0, top=0,resizable=yes,scrollbars=yes,toolbar=yes,status=yes');
}


}


function getMetaContent(attrtype, attrvalue) {
  
  var metas = document.getElementsByTagName('META');
  var i;
  var attrib;	
  var j;	
  var attribcontent;	
  
  for (i = 0; i < metas.length; i++){
    for (j=0; j< metas[i].attributes.length; j++){
       if (metas[i].attributes.item(j) == attrtype){
          if (metas[i].attributes.item(j).getAttribute(attrtype) == attrvalue){

          attrib = metas[i].attributes.item(j);
	  attribcontent = attrib.getAttribute('CONTENT');
	
	  break;  
         }
       }
     }
   }	
	

  //alert(attribcontent);

}


function getMetaDescription() {
    var VarContent='';
try{    
  var metas = document.getElementsByTagName('META');
  var i;
  for (i = 0; i < metas.length; i++)
    if (metas[i].getAttribute('NAME') == "description")
      break;
  VarContent = metas[i].getAttribute('CONTENT');
}
catch (err){}
  return VarContent;	
}

function getMetaOGImages() {

  var metas = document.getElementsByTagName('META');
  var ogImages = new Array(10);

  var i;
  var j=0;
try{
 for (i = 0; i < metas.length; i++){
    if (metas[i].getAttribute('property') == "og:image"){
	ogImages[j] = metas[i].getAttribute('CONTENT');
	j++;
    } 
  }
  
}
catch (err){}
  
  return ogImages;	
}

function getMetaOGSiteName() {
  var metas = document.getElementsByTagName('META');
  var i;
  var VarContent = '';
try{
  for (i = 0; i < metas.length; i++)
    if (metas[i].getAttribute('property') == "og:site_name")
      break;
  var VarContent = metas[i].getAttribute('CONTENT');
}
catch (err){}
  return VarContent;	
}

function select_all(){

	var v = document.getElementById("isa").value;
	//alert(document.getElementById("isa").checked);

	if (document.getElementById("isa").checked){
		 fb_1 = false;
		 tw_2 = false;
		 ld_3 = false;
		 gp_4 = false;
		 dg_5 = false;
		 rd_6 = false;
		 su_7 = false;
		 pi_9 = false;
		 tb_8 = false;
		 de_10 =false;
		 bg_11 =false;
		 wp_12 =false;
		 pr_13 =false;
		 te_14 =false;
		 em_15=false;
	}
	else{
		 fb_1 = true;
		 tw_2 = true;
		 ld_3 = true;
		 gp_4 = true;
		 dg_5 = true;
		 rd_6 = true;
		 su_7 = true;
		 pi_9 = true;
		 tb_8 = true;
		 de_10 =true;
		 bg_11 =true;
		 wp_12 =true;
		 pr_13 =true;
		 te_14 =true;
		 em_15=true;
	}

	for(var i=0;i<=15;i++){
		switch_image(i);
	}
	

}

function toggle2(showHideDiv, switchTextDiv) {
	var ele = document.getElementById(showHideDiv);
	var text = document.getElementById(switchTextDiv);
	if(ele.style.display == "none") {
    		ele.style.display = "block";
			text.innerHTML = '' ;
			document.getElementById("logo").style.display = "none";
			
	}
	else {
		ele.style.display = "none";
		document.getElementById("logo").style.display = "block";
		text.innerHTML = '<img style="border: none;" src="images/plus.png"/>';
	}
}
