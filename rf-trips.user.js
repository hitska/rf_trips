// ==UserScript==
// @name        rf-trips
// @description Добавляет поле имени в /rf/
// @version     1.3
// @include     *2ch.*/rf/*
// @grant       none
// @author      Твоя мамаша
// @require		https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
// ==/UserScript==

(function (window, undefined) {
	$('#e-mail').after('<input type="text" value="" id="name" class="postform__input postform__input_type_m input" size="10" name="name" placeholder="трипкод">');
})(window);