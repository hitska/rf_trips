// ==UserScript==
// @name        rf-trips
// @description Добавляет поле имени в /rf/
// @version     1.2
// @include     *2ch.*/rf/*
// @grant       none
// @author      Василий Лисец
// ==/UserScript==

// какой-то говнокод...
function findChildTagByName(obj, name) {
	if (obj == null)
		return null;
	
	var childs = obj.childNodes;
	for(var i = 0; i < childs.length; i++)
		if (childs[i].tagName == name)
			return childs[i];

	return null;
}

function findInTableByClass(obj, name) {
	if (obj == null)
		return null;
	
	var childs = obj.childNodes;
	for(var i = 0; i < childs.length; i++)
		if (childs[i].className == name)
			return childs[i];

	return null;
}

(function (window, undefined) {
	// Спускаемся от формы постинга до места, куда будем вставлять имя
	var form = document.getElementById("postform");
	var table = findChildTagByName(form, "TABLE");
	var tbody = findChildTagByName(table, "TBODY");
  if (tbody == null)	// Скрипт устарел
    return;
	var nameTR = findInTableByClass(tbody, "name");
	if (nameTR != null) // Имена уже разрешены.
		return;
		
	var subjectTR = findInTableByClass(tbody, "post-subject");	
	nameTR = document.createElement('tr');
	nameTR.className = "name";
	nameTR.innerHTML = '<td class="label desktop"><label for="name">Трип</label></td><td><input type="text" value="" id="name" name="name" size="30" placeholder="заполняя это поле, знай что я тебя ненавижу"></td>';
	tbody.insertBefore(nameTR, subjectTR);
})(window);