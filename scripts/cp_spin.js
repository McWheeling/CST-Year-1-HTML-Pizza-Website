/*
   New Perspectives on HTML and CSS, 8th Edition
   Tutorial 8
   Tutorial Case


   Filename: cp_spin.js

   Purpose: Used in CWEB180a Final Project - Feedback Page Video JS Script
*/

//Updated for Final Project - From the Revised Word Document
window.onload = function() {
	document.getElementById("skewVideo").onclick=function() {
		if (document.getElementById("skewVideo").checked) {
			document.getElementsByTagName("video")[0].play();
			document.getElementsByTagName("video")[0].loop=true;
		} else {
			document.getElementsByTagName("video")[0].pause();
			document.getElementsByTagName("video")[0].loop=false;
		}
	};
};



//Original from Tutorial 8
// window.onload = function() {
//    document.getElementById("rotateVideo").onclick=function() {
//    	if (document.getElementById("rotateVideo").checked) {
//       		document.getElementsByTagName("video")[0].play();
//       		document.getElementsByTagName("video")[0].loop=true;
//    	} else {
//       		document.getElementsByTagName("video")[0].pause();
//       		document.getElementsByTagName("video")[0].loop=false;
//    	}
//    };
// };
