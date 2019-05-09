// Compiled by ClojureScript 1.10.339 {}
goog.provide('psilib.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('reagent.core');
psilib.core.multiply = (function psilib$core$multiply(a,b){
return (a * b);
});
if((typeof psilib !== 'undefined') && (typeof psilib.core !== 'undefined') && (typeof psilib.core.inst_state !== 'undefined')){
} else {
psilib.core.inst_state = reagent.core.atom.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"maxGain","maxGain",-870556319),new cljs.core.Keyword(null,"freq","freq",-1855845278),new cljs.core.Keyword(null,"osc","osc",218527081),new cljs.core.Keyword(null,"maxFreq","maxFreq",-156105555),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"detune","detune",316572245),new cljs.core.Keyword(null,"gain","gain",1350925045),new cljs.core.Keyword(null,"minFreq","minFreq",1374378426),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"minGain","minGain",1315753948)],[0.15,(3000),"sine",(6000),(0),(100),0.042,(2000),(1),(0)]));
}
psilib.core.get_app_element = (function psilib$core$get_app_element(){
return goog.dom.getElement("app");
});
if((typeof psilib !== 'undefined') && (typeof psilib.core !== 'undefined') && (typeof psilib.core.context !== 'undefined')){
} else {
psilib.core.context = (new window.AudioContext());
}
if((typeof psilib !== 'undefined') && (typeof psilib.core !== 'undefined') && (typeof psilib.core.osc !== 'undefined')){
} else {
psilib.core.osc = psilib.core.context.createOscillator();
}
if((typeof psilib !== 'undefined') && (typeof psilib.core !== 'undefined') && (typeof psilib.core.amp !== 'undefined')){
} else {
psilib.core.amp = psilib.core.context.createGain();
}
psilib.core.osc.connect(psilib.core.amp);
psilib.core.amp.connect(psilib.core.context.destination);
psilib.core.osc.type = new cljs.core.Keyword(null,"osc","osc",218527081).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,psilib.core.inst_state));
psilib.core.osc.detune.value = new cljs.core.Keyword(null,"detune","detune",316572245).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,psilib.core.inst_state));
psilib.core.amp.gain.value = new cljs.core.Keyword(null,"gain","gain",1350925045).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,psilib.core.inst_state));
psilib.core.start_playing = (function psilib$core$start_playing(){
if(cljs.core._EQ_.call(null,(1),new cljs.core.Keyword(null,"play","play",-580418022).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,psilib.core.inst_state)))){
psilib.core.osc.start();

return cljs.core.swap_BANG_.call(null,psilib.core.inst_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"play","play",-580418022)], null),cljs.core.dec);
} else {
return null;
}
});
psilib.core.stop_playing = (function psilib$core$stop_playing(){
if(cljs.core._EQ_.call(null,(0),new cljs.core.Keyword(null,"play","play",-580418022).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,psilib.core.inst_state)))){
psilib.core.osc.stop();

return cljs.core.swap_BANG_.call(null,psilib.core.inst_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"play","play",-580418022)], null),cljs.core.inc);
} else {
return null;
}
});
psilib.core.hello_world = (function psilib$core$hello_world(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"A Theremin"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Use your Gamepad"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Start",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return psilib.core.start_playing.call(null);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Stop",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return psilib.core.stop_playing.call(null);
})], null)], null)], null);
});
psilib.core.mount = (function psilib$core$mount(el){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [psilib.core.hello_world], null),el);
});
psilib.core.mount_app_element = (function psilib$core$mount_app_element(){
var temp__5457__auto__ = psilib.core.get_app_element.call(null);
if(cljs.core.truth_(temp__5457__auto__)){
var el = temp__5457__auto__;
return psilib.core.mount.call(null,el);
} else {
return null;
}
});
psilib.core.mount_app_element.call(null);
psilib.core.on_reload = (function psilib$core$on_reload(){
return cljs.core.println.call(null,cljs.core.deref.call(null,psilib.core.inst_state));
});

//# sourceMappingURL=core.js.map
