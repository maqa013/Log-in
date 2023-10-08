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


if($('#privacy1').css('background','white')
    
){
    $('button').attr(('disabled',true))
}