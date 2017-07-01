//JavaScript
//клик на маленкую картинку должно стать большой и меняться
function SetImg(selected_url){
	var item = document.getElementById('preview');
	item.src=selected_url;
}


//JavaScript + jQuery
// когда документ загрузится, затемняем шапку и перемещаем скрол эффект на нужный контент
$(document).ready(function(){
	$('#header').fadeTo(2000,0.3,function(){
		$('html,body').animate(
		{scrollTop:$('#content').offset().top},2000
		);
	});
});

// Валидация данных в JavaScript
//Считали данные
$(document).on('submit','form',function(){
	var UserName=$('input[name=Name]').val();
	var UserTel=$('input[name=Tel]').val();
	var Car=$('select').val();
	//Валидация введеных данных
	//Проверяем имя
	if(UserName.length>0){
		//Проверяем телефон
		var regular=/^\8-[0-9]{3}-[0-9]{3}-[0-9]{4}/;
		if(regular.test(UserTel)==true){
			alert("Отлично");
			SubmitForm(UserName,UserTel,Car);
		}
		else{
			alert('Вы неверно указали номер телефона');
		}
	}
	else{
		alert('Вы забыли указать имя');
	}
});

/*Ajax jQuery*/
function SubmitForm(name,tel,car)
{
   $.ajax({
  method: "POST",
  url: "/Home/Order",
  data: { Name: name, Tel: tel, Car:car }
})
  .done(function( msg ) {
    alert( "Отлично: " + msg );
  }).fail(function() {
    alert( "При передачи данных произошла ошибка" );
  }); 
}