// ==UserScript==
// @name        rf-trips
// @description Добавляет поле трипкода в /rf/ мэйлача
// @version     1.4
// @include     *2ch.*/rf/*
// @grant       GM.setValue
// @grant       GM.getValue
// @author      Твоя мамаша
// @require     https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
// ==/UserScript==

(function (window, undefined) {
	$('#e-mail').after('<input type="text" value="" id="name" class="postform__input postform__input_type_m input" size="10" name="name" placeholder="трипкод">');

	var tripcode_key = 'rf_tripcode';
	
	// Восстанавливаем предыдущее значение поля трипкода.
	// Это сделано чтобы не вводить трипкод каждый раз.
	(async () => { $('#name').val( await GM.getValue(tripcode_key, "") ); })();
	
	// Сохраняем трипкод в виде переменной скрипта у тебя на машине. Нет, я не ворую его, пошёл нахуй.
	var old_submit = $('#postform').submit;
	$('#postform').submit(function(){
		(async () => { await GM.setValue(tripcode_key, $('#name').val()); })();
		old_submit();
	});
})(window);