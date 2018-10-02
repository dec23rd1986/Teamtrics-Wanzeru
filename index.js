//Features jQuery

$(document).ready(function() {
    $('.tasks_info').hide();
    $('#tasks_img').hide();
  $('#mySVG').hide();

    var option_selected = "meeting";
    
    $('#meeting_button').click(function() {
        $(this).addClass("active");
        $('#tasks_button').removeClass("active");
        $('.tasks_info').hide();
        $('#tasks_img').hide();
        $('.meeting_info').fadeIn(2000);
      $('#mySVG').fadeIn(2000);
        $('#meeting_img').show();

    });

    $('#tasks_button').click(function() {
        $(this).addClass("active");
        $('#meeting_button').removeClass("active");
        $('.meeting_info').hide();
        $('#meeting_img').hide();
      $('#mySVG').hide();
        $('.tasks_info').fadeIn(2000);
        $('#tasks_img').show();
    });

    $('.carousel-control-prev, .carousel-control-next').click(function() {
    	if(option_selected == "meeting"){
        	$('#tasks_button').trigger('click');   
        	option_selected = "tasks"; 	
    	}
    	else{
        	$('#meeting_button').trigger('click');
        	option_selected = "meeting"; 	
    	}
    });
});


