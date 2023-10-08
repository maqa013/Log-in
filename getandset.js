
let localstorage = []






$('.place').on('input',function(){

   if(
    $('#place2').val().length >=2 &&
    $('#place1').val().length >=2 &&
    $('#privacy1').is(':checked')
   ){
    $('button').attr('disabled',false)
   }else{
    $('button').attr('disabled',true)
   }
 
})


$('#privacy1').dblclick(function(){
    $('#privacy1').css('accent-color','white')


})


























//  let background = $('#privacy1').css('accent-color','green')

// if($('#privacy1') = background
    
// ){
//     $('button').attr(('disabled',true))
// }else{
//     $('button').attr(('disabled',false))
// }



// $(".box").click(function () {


//     let current_color =
//         $(this).css("background-color");


//     $(".current-color-text").text(
//         current_color
//     );

//     $(".box").html('');
//     $(this).html('<b class="current-color-text">'+current_color+'</b>');
    
//     });