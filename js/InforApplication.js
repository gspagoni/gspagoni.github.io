$(document).ready(function () {  
    SendCustomMessage = function () {
        var messageType = $("#txtMessageType").val();
        var message = $("#txtMessage").val();
        infor.companyon.client.sendMessage(messageType, $.parseJSON(message));
    }
	
	var data = {}; data.height = ($("#main").outerHeight(true) + 50) + "px";
    infor.companyon.client.sendMessage(window.name, data);
});