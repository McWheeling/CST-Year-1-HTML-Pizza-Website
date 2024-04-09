"use strict";

let parseXml;

if (window.DOMParser) {
    parseXml = function(xmlStr) {
        return ( new window.DOMParser() ).parseFromString(xmlStr, "text/xml");
    };
} else if (typeof window.ActiveXObject !== "undefined" && new window.ActiveXObject("Microsoft.XMLDOM")) {
    parseXml = function(xmlStr) {
        let xmlDoc = new window.ActiveXObject("Microsoft.XMLDOM");
        xmlDoc.async = "false";
        xmlDoc.loadXML(xmlStr);
        return xmlDoc;
    };
} else {
    parseXml = function() { return null; }
}


function load_quotes() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            let myxml = xhttp.responseText;
            let xmlDoc  = parseXml(myxml);
            if(xmlDoc) {
                let strHtml = "";
                for(let q = 0; q < xmlDoc.getElementsByTagName("Quote").length; q++) {
                    // let quotes = xmlDoc.getElementsByTagName("Quote")[q].childNodes;
                    strHtml += "<blockquote>";
                    strHtml += xmlDoc.getElementsByTagName("Name")[q].childNodes[0].nodeValue;
                    strHtml += " from "+xmlDoc.getElementsByTagName("Country")[q].childNodes[0].nodeValue;
                    strHtml += " gave ";
                    strHtml += xmlDoc.getElementsByTagName("Stars")[q].childNodes[0].nodeValue;
                    strHtml += " of 5 stars on ";
                    strHtml += xmlDoc.getElementsByTagName("Date")[q].childNodes[0].nodeValue;
                    strHtml += "<br /><br /><em>";
                    strHtml += xmlDoc.getElementsByTagName("Comments")[q].childNodes[0].nodeValue;
                    strHtml += "</em></blockquote>";
                }
                document.getElementById("content").innerHTML = strHtml;
            }

        }
    };
    xhttp.open("GET", "quotes.xml", true);
    xhttp.send();
}
