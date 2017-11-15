$(document).ready(function(){
	$('#photos a, #gallery .photos a').lightBox();
    if($('html#menu').length > 0) {
        kobe.menu.warning();
        kobe.menu.eatcake.letthem();
    }    
});

kobe = {
    menu : {
        warning : function(){
	        $('<a class="go_back" href="#" title="go back">&#8617;</a>').appendTo("#raw").hide().click(function(){
                window.history.back();
                $(this).hide();
                return false;
            });
            $("a.warning").click(function(){
                $("#raw a").show();
            });
	    },
        eatcake : {
            active : null,
			link : null,
            letthem : function(){
                $("#menu_list h3, #menu_list div").hide();
                $("#toc a").click(function(event){
					event.preventDefault();
                    $(this).addClass('active').blur();
                    if(kobe.menu.eatcake.active)
                        kobe.menu.eatcake.active.hide();
				    if(kobe.menu.eatcake.link)
					   kobe.menu.eatcake.link.removeClass('active');
                    var item = $(this).attr("href");
					kobe.menu.eatcake.link = $(this);
                    kobe.menu.eatcake.active = $(item + ", " + item + " + div").show();
                });
            }
        }
    }
};