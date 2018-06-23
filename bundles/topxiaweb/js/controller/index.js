define(function(require, exports, module) {

    var Lazyload = require('echo.js');


    exports.run = function() {
        Lazyload.init();
        $("body").on('click','.js-course-filter',function(){
            var $btn = $(this);
            var courseType = $btn.data('type');
            var text = $('.course-filter .visible-xs .active a').text();
            $.get($btn.data('url'),function(html){
                $('#'+courseType+'-list-section').after(html).remove();
                var parent = $btn.parent();
                if(!parent.hasClass('course-sort')){
                   text = $btn.find("a").text();   
                }
            $('.course-filter .visible-xs .btn').html(text+" "+'<span class="caret"></span>');
                Lazyload.init();
            })
        })
    };
});