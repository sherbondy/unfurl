// Compiled by ClojureScript 1.8.34 {}
goog.provide('unfurl_circle.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
unfurl_circle.core.setup = (function unfurl_circle$core$setup(){
quil.core.frame_rate.call(null,(30));

quil.core.color_mode.call(null,new cljs.core.Keyword(null,"hsb","hsb",-753472031));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direction","direction",-633359395),(1),new cljs.core.Keyword(null,"t-norm","t-norm",-863932369),(0)], null);
});
unfurl_circle.core.update_state = (function unfurl_circle$core$update_state(state){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direction","direction",-633359395),(((new cljs.core.Keyword(null,"t-norm","t-norm",-863932369).cljs$core$IFn$_invoke$arity$1(state) >= (1)))?(-1):(((new cljs.core.Keyword(null,"t-norm","t-norm",-863932369).cljs$core$IFn$_invoke$arity$1(state) <= (0)))?(1):new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(state))),new cljs.core.Keyword(null,"t-norm","t-norm",-863932369),(new cljs.core.Keyword(null,"t-norm","t-norm",-863932369).cljs$core$IFn$_invoke$arity$1(state) + (new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(state) * 0.01))], null);
});
unfurl_circle.core.draw_state = (function unfurl_circle$core$draw_state(state){
quil.core.background.call(null,(240));

quil.core.fill.call(null,(255));

quil.core.stroke.call(null,(255));

var center_x = (quil.core.width.call(null) / (2));
var center_y = (quil.core.height.call(null) / (2));
var diameter = (100);
var radius = (diameter / (2));
var circumference = (quil.core.PI * diameter);
var left_endpoint_x = (center_x - (circumference / (2)));
var line_y = (center_y + radius);
var n_dots = (360);
quil.core.ellipse.call(null,center_x,center_y,diameter,diameter);

quil.core.line.call(null,left_endpoint_x,line_y,(left_endpoint_x + circumference),line_y);

quil.core.no_fill.call(null);

var seq__10098 = cljs.core.seq.call(null,cljs.core.range.call(null,(n_dots + (1))));
var chunk__10099 = null;
var count__10100 = (0);
var i__10101 = (0);
while(true){
if((i__10101 < count__10100)){
var i = cljs.core._nth.call(null,chunk__10099,i__10101);
var angle_10102 = ((i / n_dots) * quil.core.TWO_PI);
var x1_10103 = (left_endpoint_x + (circumference * (i / n_dots)));
var y1_10104 = line_y;
var x2_10105 = (center_x - (radius * quil.core.sin.call(null,angle_10102)));
var y2_10106 = (center_y - (radius * quil.core.cos.call(null,angle_10102)));
var xc_10107 = (((quil.core.sq.call(null,x2_10105) - quil.core.sq.call(null,x1_10103)) + quil.core.sq.call(null,(y2_10106 - y1_10104))) / ((2) * (x2_10105 - x1_10103)));
var rc_10108 = quil.core.abs.call(null,(x1_10103 - xc_10107));
var dc_10109 = ((2) * rc_10108);
var theta_0_10110 = quil.core.atan2.call(null,(y2_10106 - y1_10104),(x2_10105 - xc_10107));
var d_theta_10111 = (((i > (n_dots / (2))))?((0) - theta_0_10110):(quil.core.PI + theta_0_10110));
var t_norm_10112 = new cljs.core.Keyword(null,"t-norm","t-norm",-863932369).cljs$core$IFn$_invoke$arity$1(state);
var t_theta_10113 = (((i > (n_dots / (2))))?(theta_0_10110 + (t_norm_10112 * d_theta_10111)):(theta_0_10110 - (t_norm_10112 * d_theta_10111)));
var xt_10114 = (xc_10107 + (rc_10108 * quil.core.cos.call(null,t_theta_10113)));
var yt_10115 = (y1_10104 + (rc_10108 * quil.core.sin.call(null,t_theta_10113)));
quil.core.stroke.call(null,(255));

quil.core.stroke.call(null,(0));

quil.core.point.call(null,xt_10114,yt_10115);

var G__10116 = seq__10098;
var G__10117 = chunk__10099;
var G__10118 = count__10100;
var G__10119 = (i__10101 + (1));
seq__10098 = G__10116;
chunk__10099 = G__10117;
count__10100 = G__10118;
i__10101 = G__10119;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__10098);
if(temp__4657__auto__){
var seq__10098__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10098__$1)){
var c__7021__auto__ = cljs.core.chunk_first.call(null,seq__10098__$1);
var G__10120 = cljs.core.chunk_rest.call(null,seq__10098__$1);
var G__10121 = c__7021__auto__;
var G__10122 = cljs.core.count.call(null,c__7021__auto__);
var G__10123 = (0);
seq__10098 = G__10120;
chunk__10099 = G__10121;
count__10100 = G__10122;
i__10101 = G__10123;
continue;
} else {
var i = cljs.core.first.call(null,seq__10098__$1);
var angle_10124 = ((i / n_dots) * quil.core.TWO_PI);
var x1_10125 = (left_endpoint_x + (circumference * (i / n_dots)));
var y1_10126 = line_y;
var x2_10127 = (center_x - (radius * quil.core.sin.call(null,angle_10124)));
var y2_10128 = (center_y - (radius * quil.core.cos.call(null,angle_10124)));
var xc_10129 = (((quil.core.sq.call(null,x2_10127) - quil.core.sq.call(null,x1_10125)) + quil.core.sq.call(null,(y2_10128 - y1_10126))) / ((2) * (x2_10127 - x1_10125)));
var rc_10130 = quil.core.abs.call(null,(x1_10125 - xc_10129));
var dc_10131 = ((2) * rc_10130);
var theta_0_10132 = quil.core.atan2.call(null,(y2_10128 - y1_10126),(x2_10127 - xc_10129));
var d_theta_10133 = (((i > (n_dots / (2))))?((0) - theta_0_10132):(quil.core.PI + theta_0_10132));
var t_norm_10134 = new cljs.core.Keyword(null,"t-norm","t-norm",-863932369).cljs$core$IFn$_invoke$arity$1(state);
var t_theta_10135 = (((i > (n_dots / (2))))?(theta_0_10132 + (t_norm_10134 * d_theta_10133)):(theta_0_10132 - (t_norm_10134 * d_theta_10133)));
var xt_10136 = (xc_10129 + (rc_10130 * quil.core.cos.call(null,t_theta_10135)));
var yt_10137 = (y1_10126 + (rc_10130 * quil.core.sin.call(null,t_theta_10135)));
quil.core.stroke.call(null,(255));

quil.core.stroke.call(null,(0));

quil.core.point.call(null,xt_10136,yt_10137);

var G__10138 = cljs.core.next.call(null,seq__10098__$1);
var G__10139 = null;
var G__10140 = (0);
var G__10141 = (0);
seq__10098 = G__10138;
chunk__10099 = G__10139;
count__10100 = G__10140;
i__10101 = G__10141;
continue;
}
} else {
return null;
}
}
break;
}
});
unfurl_circle.core.unfurl_circle = (function unfurl_circle$core$unfurl_circle(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"unfurl-circle",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,unfurl_circle.core.update_state))?(function() { 
var G__10142__delegate = function (args){
return cljs.core.apply.call(null,unfurl_circle.core.update_state,args);
};
var G__10142 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10143__i = 0, G__10143__a = new Array(arguments.length -  0);
while (G__10143__i < G__10143__a.length) {G__10143__a[G__10143__i] = arguments[G__10143__i + 0]; ++G__10143__i;}
  args = new cljs.core.IndexedSeq(G__10143__a,0);
} 
return G__10142__delegate.call(this,args);};
G__10142.cljs$lang$maxFixedArity = 0;
G__10142.cljs$lang$applyTo = (function (arglist__10144){
var args = cljs.core.seq(arglist__10144);
return G__10142__delegate(args);
});
G__10142.cljs$core$IFn$_invoke$arity$variadic = G__10142__delegate;
return G__10142;
})()
:unfurl_circle.core.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(500)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,unfurl_circle.core.setup))?(function() { 
var G__10145__delegate = function (args){
return cljs.core.apply.call(null,unfurl_circle.core.setup,args);
};
var G__10145 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10146__i = 0, G__10146__a = new Array(arguments.length -  0);
while (G__10146__i < G__10146__a.length) {G__10146__a[G__10146__i] = arguments[G__10146__i + 0]; ++G__10146__i;}
  args = new cljs.core.IndexedSeq(G__10146__a,0);
} 
return G__10145__delegate.call(this,args);};
G__10145.cljs$lang$maxFixedArity = 0;
G__10145.cljs$lang$applyTo = (function (arglist__10147){
var args = cljs.core.seq(arglist__10147);
return G__10145__delegate(args);
});
G__10145.cljs$core$IFn$_invoke$arity$variadic = G__10145__delegate;
return G__10145;
})()
:unfurl_circle.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,unfurl_circle.core.draw_state))?(function() { 
var G__10148__delegate = function (args){
return cljs.core.apply.call(null,unfurl_circle.core.draw_state,args);
};
var G__10148 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10149__i = 0, G__10149__a = new Array(arguments.length -  0);
while (G__10149__i < G__10149__a.length) {G__10149__a[G__10149__i] = arguments[G__10149__i + 0]; ++G__10149__i;}
  args = new cljs.core.IndexedSeq(G__10149__a,0);
} 
return G__10148__delegate.call(this,args);};
G__10148.cljs$lang$maxFixedArity = 0;
G__10148.cljs$lang$applyTo = (function (arglist__10150){
var args = cljs.core.seq(arglist__10150);
return G__10148__delegate(args);
});
G__10148.cljs$core$IFn$_invoke$arity$variadic = G__10148__delegate;
return G__10148;
})()
:unfurl_circle.core.draw_state));
});
goog.exportSymbol('unfurl_circle.core.unfurl_circle', unfurl_circle.core.unfurl_circle);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__7463__7464__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__7463__7464__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),unfurl_circle.core.unfurl_circle,new cljs.core.Keyword(null,"host-id","host-id",742376279),"unfurl-circle"], null));
}

//# sourceMappingURL=core.js.map