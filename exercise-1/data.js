
var INFO_METHOD ={

    handlerData:function(resJSON){

        var templateSource   = $("#info-template").html(),

            template = Handlebars.compile(templateSource),

            infoHTML = template(resJSON);

       $('#my-container').html(infoHTML);
        
    },
    loadInfoData : function(){

        $.ajax({
            url:"https://5dc588200bbd050014fb8ae1.mockapi.io/assessment",
            method:'get',
            success:this.handlerData

        })
    }
};

$(document).ready(function(){

INFO_METHOD.loadInfoData();
});