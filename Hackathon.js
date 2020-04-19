$(document).ready(function() {
    var appKey ="hy2o7ujafi5ene6o4y7a";
    var widget = new 
RingCaptcha.Widget('#xyz', {
    app: appKey,
    events: {
ready: function(event) {
},
verified: function(event) {
const dataString = localStorage.getItem('ringcaptcha.widget.' + appKey);
const data= dataString ?
JSON.parse(dataString) : null;
 const phone = data.phoneNumber;
 alert("Phone number verified:" + phone);
$('div.ringcaptcha.widget.no-brand').hide();
   }
  }
 }).setup();
})