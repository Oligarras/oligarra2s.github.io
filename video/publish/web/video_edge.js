
(function(compId){var _=null,y=true,n=false,x1='6.0.0',x3='6.0.0.400',x2='5.0.0',x11='true',x10='rgba(192,192,192,1)',xc='rgba(0,0,0,1)',x4='rgba(255,255,255,1)',x9='Rectangle',m='rect',x5='0px',x8='auto',x6='550px',x7='400px',i='none';var im='images/',aud='media/',vid='media/',js='js/',fonts={},opts={'gAudioPreloadPreference':'auto','gVideoPreloadPreference':'auto'},resources=[],scripts=[],symbols={"stage":{v:x1,mv:x2,b:x3,stf:i,cg:i,rI:n,cn:{dom:[{id:'video',symbolName:'video',t:m,r:['0','0','550','400','auto','auto']}],style:{'${Stage}':{isStage:true,r:[undefined,undefined,'550px','400px'],overflow:'hidden',f:[x4]}}},tt:{d:0,a:y,data:[]}},"video":{v:x1,mv:x2,b:x3,stf:i,cg:i,rI:n,cn:{dom:[{r:[x5,x5,x6,x7,x8,x8],id:x9,s:[0,xc,i],t:m,f:[x10]}],style:{'${symbolSelector}':{isStage:x11,r:[undefined,undefined,x6,x7]}}},tt:{d:0,a:y,data:[]}}};AdobeEdge.registerCompositionDefn(compId,symbols,fonts,scripts,resources,opts);})("EDGE-35385681");
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;Edge.registerEventBinding(compId,function($){
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindSymbolAction(compId,symbolName,"creationComplete",function(sym,e){var youtube=$("<iframe/>");sym.$("video").append(youtube);youtube.attr('type','text/html');youtube.attr('width','550');youtube.attr('height','400');youtube.attr('src must be: youtube.attr('src','https:youtube.attr('frameborder','0');youtube.attr('allowfullscreen','yes');});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'video'
(function(symbolName){})("video");
//Edge symbol end:'video'
})})(AdobeEdge.$,AdobeEdge,"EDGE-35385681");