function tranlateRequest(_keyword, _from, _to)
{
	var xmlHttp = null;
	xmlHttp = new XMLHttpRequest();
	xmlHttp.open( 'GET', 'http://translate.google.com/translate_a/t?client=webapp&hl=en&sc=1&q=' + _keyword + '&sl=' + _from + '&tl=' + _to , false );
	xmlHttp.send( null );
	return xmlHttp.responseText;
}

tranlateRequest('moi','fi','en');

https://www.google.com/search?q=koulu&um=1&ie=UTF-8&hl=en&tbm=isch