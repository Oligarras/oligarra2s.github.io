/***********************
* Acciones de composición de Adobe Edge Animate
*
* Editar este archivo con precaución, teniendo cuidado de conservar 
* las firmas de función y los comentarios que comienzan con "Edge" para mantener la 
* capacidad de interactuar con estas acciones en Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // los alias más comunes para las clases de Edge

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
          var youtubevid = $("<iframe/>");
          sym.$("video").append(youtubevid);
         
          youtubevid.attr('type','text/html');
          youtubevid.attr('width','550');
          youtubevid.attr('height','400');
          youtubevid.attr('src','http://www.youtube.com/embed/GqcPh3OXoNo');  // url/Video_Id
          youtubevid.attr('frameborder','1');	   // 1 | 0
          youtubevid.attr('allowfullscreen','0');   // 1 | 0

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'video'
   (function(symbolName) {   
   
   })("video");
   //Edge symbol end:'video'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-35385681");