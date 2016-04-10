// Compiled by ClojureScript 1.8.34 {}
goog.provide('unfurl_circle.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
unfurl_circle.core.setup = (function unfurl_circle$core$setup(){
quil.core.frame_rate.call(null,(30));

quil.core.color_mode.call(null,new cljs.core.Keyword(null,"hsb","hsb",-753472031));

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),(0),new cljs.core.Keyword(null,"angle","angle",1622094254),(0),new cljs.core.Keyword(null,"t-norm","t-norm",-863932369),(0)], null);
});
unfurl_circle.core.update_state = (function unfurl_circle$core$update_state(state){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.mod.call(null,(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(state) + 0.7),(255)),new cljs.core.Keyword(null,"angle","angle",1622094254),(new cljs.core.Keyword(null,"angle","angle",1622094254).cljs$core$IFn$_invoke$arity$1(state) + 0.1),new cljs.core.Keyword(null,"t-norm","t-norm",-863932369),cljs.core.mod.call(null,(new cljs.core.Keyword(null,"t-norm","t-norm",-863932369).cljs$core$IFn$_invoke$arity$1(state) + 0.01),(1))], null);
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
quil.core.no_fill.call(null);

var seq__16779 = cljs.core.seq.call(null,cljs.core.range.call(null,(n_dots + (1))));
var chunk__16780 = null;
var count__16781 = (0);
var i__16782 = (0);
while(true){
if((i__16782 < count__16781)){
var i = cljs.core._nth.call(null,chunk__16780,i__16782);
var angle_16783 = ((i / n_dots) * quil.core.TWO_PI);
var x1_16784 = (left_endpoint_x + (circumference * (i / n_dots)));
var y1_16785 = line_y;
var x2_16786 = (center_x - (radius * quil.core.sin.call(null,angle_16783)));
var y2_16787 = (center_y - (radius * quil.core.cos.call(null,angle_16783)));
var xc_16788 = (((quil.core.sq.call(null,x2_16786) - quil.core.sq.call(null,x1_16784)) + quil.core.sq.call(null,(y2_16787 - y1_16785))) / ((2) * (x2_16786 - x1_16784)));
var rc_16789 = quil.core.abs.call(null,(x1_16784 - xc_16788));
var dc_16790 = ((2) * rc_16789);
var theta_0_16791 = quil.core.atan2.call(null,(y2_16787 - y1_16785),(x2_16786 - xc_16788));
var d_theta_16792 = (((i > (n_dots / (2))))?((0) - theta_0_16791):(quil.core.PI + theta_0_16791));
var t_norm_16793 = new cljs.core.Keyword(null,"t-norm","t-norm",-863932369).cljs$core$IFn$_invoke$arity$1(state);
var t_theta_16794 = (((i > (n_dots / (2))))?(theta_0_16791 + (t_norm_16793 * d_theta_16792)):(theta_0_16791 - (t_norm_16793 * d_theta_16792)));
var xt_16795 = (xc_16788 + (rc_16789 * quil.core.cos.call(null,t_theta_16794)));
var yt_16796 = (y1_16785 + (rc_16789 * quil.core.sin.call(null,t_theta_16794)));
quil.core.stroke.call(null,(255));

quil.core.stroke.call(null,(0));

quil.core.point.call(null,xt_16795,yt_16796);

var G__16797 = seq__16779;
var G__16798 = chunk__16780;
var G__16799 = count__16781;
var G__16800 = (i__16782 + (1));
seq__16779 = G__16797;
chunk__16780 = G__16798;
count__16781 = G__16799;
i__16782 = G__16800;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__16779);
if(temp__4657__auto__){
var seq__16779__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16779__$1)){
var c__7021__auto__ = cljs.core.chunk_first.call(null,seq__16779__$1);
var G__16801 = cljs.core.chunk_rest.call(null,seq__16779__$1);
var G__16802 = c__7021__auto__;
var G__16803 = cljs.core.count.call(null,c__7021__auto__);
var G__16804 = (0);
seq__16779 = G__16801;
chunk__16780 = G__16802;
count__16781 = G__16803;
i__16782 = G__16804;
continue;
} else {
var i = cljs.core.first.call(null,seq__16779__$1);
var angle_16805 = ((i / n_dots) * quil.core.TWO_PI);
var x1_16806 = (left_endpoint_x + (circumference * (i / n_dots)));
var y1_16807 = line_y;
var x2_16808 = (center_x - (radius * quil.core.sin.call(null,angle_16805)));
var y2_16809 = (center_y - (radius * quil.core.cos.call(null,angle_16805)));
var xc_16810 = (((quil.core.sq.call(null,x2_16808) - quil.core.sq.call(null,x1_16806)) + quil.core.sq.call(null,(y2_16809 - y1_16807))) / ((2) * (x2_16808 - x1_16806)));
var rc_16811 = quil.core.abs.call(null,(x1_16806 - xc_16810));
var dc_16812 = ((2) * rc_16811);
var theta_0_16813 = quil.core.atan2.call(null,(y2_16809 - y1_16807),(x2_16808 - xc_16810));
var d_theta_16814 = (((i > (n_dots / (2))))?((0) - theta_0_16813):(quil.core.PI + theta_0_16813));
var t_norm_16815 = new cljs.core.Keyword(null,"t-norm","t-norm",-863932369).cljs$core$IFn$_invoke$arity$1(state);
var t_theta_16816 = (((i > (n_dots / (2))))?(theta_0_16813 + (t_norm_16815 * d_theta_16814)):(theta_0_16813 - (t_norm_16815 * d_theta_16814)));
var xt_16817 = (xc_16810 + (rc_16811 * quil.core.cos.call(null,t_theta_16816)));
var yt_16818 = (y1_16807 + (rc_16811 * quil.core.sin.call(null,t_theta_16816)));
quil.core.stroke.call(null,(255));

quil.core.stroke.call(null,(0));

quil.core.point.call(null,xt_16817,yt_16818);

var G__16819 = cljs.core.next.call(null,seq__16779__$1);
var G__16820 = null;
var G__16821 = (0);
var G__16822 = (0);
seq__16779 = G__16819;
chunk__16780 = G__16820;
count__16781 = G__16821;
i__16782 = G__16822;
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
var G__16823__delegate = function (args){
return cljs.core.apply.call(null,unfurl_circle.core.update_state,args);
};
var G__16823 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16824__i = 0, G__16824__a = new Array(arguments.length -  0);
while (G__16824__i < G__16824__a.length) {G__16824__a[G__16824__i] = arguments[G__16824__i + 0]; ++G__16824__i;}
  args = new cljs.core.IndexedSeq(G__16824__a,0);
} 
return G__16823__delegate.call(this,args);};
G__16823.cljs$lang$maxFixedArity = 0;
G__16823.cljs$lang$applyTo = (function (arglist__16825){
var args = cljs.core.seq(arglist__16825);
return G__16823__delegate(args);
});
G__16823.cljs$core$IFn$_invoke$arity$variadic = G__16823__delegate;
return G__16823;
})()
:unfurl_circle.core.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(500)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,unfurl_circle.core.setup))?(function() { 
var G__16826__delegate = function (args){
return cljs.core.apply.call(null,unfurl_circle.core.setup,args);
};
var G__16826 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16827__i = 0, G__16827__a = new Array(arguments.length -  0);
while (G__16827__i < G__16827__a.length) {G__16827__a[G__16827__i] = arguments[G__16827__i + 0]; ++G__16827__i;}
  args = new cljs.core.IndexedSeq(G__16827__a,0);
} 
return G__16826__delegate.call(this,args);};
G__16826.cljs$lang$maxFixedArity = 0;
G__16826.cljs$lang$applyTo = (function (arglist__16828){
var args = cljs.core.seq(arglist__16828);
return G__16826__delegate(args);
});
G__16826.cljs$core$IFn$_invoke$arity$variadic = G__16826__delegate;
return G__16826;
})()
:unfurl_circle.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,unfurl_circle.core.draw_state))?(function() { 
var G__16829__delegate = function (args){
return cljs.core.apply.call(null,unfurl_circle.core.draw_state,args);
};
var G__16829 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16830__i = 0, G__16830__a = new Array(arguments.length -  0);
while (G__16830__i < G__16830__a.length) {G__16830__a[G__16830__i] = arguments[G__16830__i + 0]; ++G__16830__i;}
  args = new cljs.core.IndexedSeq(G__16830__a,0);
} 
return G__16829__delegate.call(this,args);};
G__16829.cljs$lang$maxFixedArity = 0;
G__16829.cljs$lang$applyTo = (function (arglist__16831){
var args = cljs.core.seq(arglist__16831);
return G__16829__delegate(args);
});
G__16829.cljs$core$IFn$_invoke$arity$variadic = G__16829__delegate;
return G__16829;
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