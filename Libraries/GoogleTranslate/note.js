function getJSONTranslation(_keyword, _from, _to)
{	
	var xmlHttp = null;
	xmlHttp = new XMLHttpRequest();
	xmlHttp.open( 'GET', 'http://translate.google.com/translate_a/t?client=webapp&hl=en&sc=1&q=' + _keyword + '&sl=' + _from + '&tl=' + _to , false );
	xmlHttp.send( null );
	return xmlHttp.responseText;
}

function getSoundTranslation(_keyword, _from, _to)
{
	document.getElementsByClassName('ls-select sl')[0].value = _from;
	document.getElementsByClassName('ls-select tl')[0].value = _to;
	document.getElementById('input-wrap').firstChild.value = _keyword;
	_e(event, 'translate+2');
}

tranlateRequest('moi','fi','en');

https://www.google.com/search?um=1&ie=UTF-8&hl=en&tbm=isch&tbs=ift:jpg&q=koulu


document.getElementsByClassName('ls-select sl')[0].value = _from;
document.getElementsByClassName('ls-select tl')[0].value = _to;
document.getElementById('input-wrap').firstChild.value = _keyword;
//document.getElementsByClassName('go-wrap')[0].firstChild.click();
_e(event, 'translate+2');



CSS_WUI_BUTTON CSS_WUI_ENABLED CSS_WUI_BUTTON_IMPL CSS_WUI_NO_TAP_HIGHLIGHT CSS_WUI_NO_BORDER_IMAGE  
CSS_WUI_BUTTON CSS_WUI_ENABLED CSS_WUI_BUTTON_IMPL CSS_WUI_NO_TAP_HIGHLIGHT CSS_WUI_NO_BORDER_IMAGE  

