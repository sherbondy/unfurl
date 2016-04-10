// Compiled by ClojureScript 1.8.34 {}
goog.provide('unfurle_circle.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
unfurle_circle.core.setup = (function unfurle_circle$core$setup(){
quil.core.frame_rate.call(null,(30));

quil.core.color_mode.call(null,new cljs.core.Keyword(null,"hsb","hsb",-753472031));

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),(0),new cljs.core.Keyword(null,"angle","angle",1622094254),(0),new cljs.core.Keyword(null,"t-norm","t-norm",-863932369),(0)], null);
});
unfurle_circle.core.update_state = (function unfurle_circle$core$update_state(state){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.mod.call(null,(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(state) + 0.7),(255)),new cljs.core.Keyword(null,"angle","angle",1622094254),(new cljs.core.Keyword(null,"angle","angle",1622094254).cljs$core$IFn$_invoke$arity$1(state) + 0.1),new cljs.core.Keyword(null,"t-norm","t-norm",-863932369),cljs.core.mod.call(null,(new cljs.core.Keyword(null,"t-norm","t-norm",-863932369).cljs$core$IFn$_invoke$arity$1(state) + 0.01),(1))], null);
});
unfurle_circle.core.draw_state = (function unfurle_circle$core$draw_state(state){
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

var seq__16720 = cljs.core.seq.call(null,cljs.core.range.call(null,(n_dots + (1))));
var chunk__16721 = null;
var count__16722 = (0);
var i__16723 = (0);
while(true){
if((i__16723 < count__16722)){
var i = cljs.core._nth.call(null,chunk__16721,i__16723);
var angle_16724 = ((i / n_dots) * quil.core.TWO_PI);
var x1_16725 = (left_endpoint_x + (circumference * (i / n_dots)));
var y1_16726 = line_y;
var x2_16727 = (center_x - (radius * quil.core.sin.call(null,angle_16724)));
var y2_16728 = (center_y - (radius * quil.core.cos.call(null,angle_16724)));
var xc_16729 = (((quil.core.sq.call(null,x2_16727) - quil.core.sq.call(null,x1_16725)) + quil.core.sq.call(null,(y2_16728 - y1_16726))) / ((2) * (x2_16727 - x1_16725)));
var rc_16730 = quil.core.abs.call(null,(x1_16725 - xc_16729));
var dc_16731 = ((2) * rc_16730);
var theta_0_16732 = quil.core.atan2.call(null,(y2_16728 - y1_16726),(x2_16727 - xc_16729));
var d_theta_16733 = (((i > (n_dots / (2))))?((0) - theta_0_16732):(quil.core.PI + theta_0_16732));
var t_norm_16734 = new cljs.core.Keyword(null,"t-norm","t-norm",-863932369).cljs$core$IFn$_invoke$arity$1(state);
var t_theta_16735 = (((i > (n_dots / (2))))?(theta_0_16732 + (t_norm_16734 * d_theta_16733)):(theta_0_16732 - (t_norm_16734 * d_theta_16733)));
var xt_16736 = (xc_16729 + (rc_16730 * quil.core.cos.call(null,t_theta_16735)));
var yt_16737 = (y1_16726 + (rc_16730 * quil.core.sin.call(null,t_theta_16735)));
quil.core.stroke.call(null,(255));

quil.core.stroke.call(null,(0));

quil.core.point.call(null,xt_16736,yt_16737);

var G__16738 = seq__16720;
var G__16739 = chunk__16721;
var G__16740 = count__16722;
var G__16741 = (i__16723 + (1));
seq__16720 = G__16738;
chunk__16721 = G__16739;
count__16722 = G__16740;
i__16723 = G__16741;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__16720);
if(temp__4657__auto__){
var seq__16720__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16720__$1)){
var c__7021__auto__ = cljs.core.chunk_first.call(null,seq__16720__$1);
var G__16742 = cljs.core.chunk_rest.call(null,seq__16720__$1);
var G__16743 = c__7021__auto__;
var G__16744 = cljs.core.count.call(null,c__7021__auto__);
var G__16745 = (0);
seq__16720 = G__16742;
chunk__16721 = G__16743;
count__16722 = G__16744;
i__16723 = G__16745;
continue;
} else {
var i = cljs.core.first.call(null,seq__16720__$1);
var angle_16746 = ((i / n_dots) * quil.core.TWO_PI);
var x1_16747 = (left_endpoint_x + (circumference * (i / n_dots)));
var y1_16748 = line_y;
var x2_16749 = (center_x - (radius * quil.core.sin.call(null,angle_16746)));
var y2_16750 = (center_y - (radius * quil.core.cos.call(null,angle_16746)));
var xc_16751 = (((quil.core.sq.call(null,x2_16749) - quil.core.sq.call(null,x1_16747)) + quil.core.sq.call(null,(y2_16750 - y1_16748))) / ((2) * (x2_16749 - x1_16747)));
var rc_16752 = quil.core.abs.call(null,(x1_16747 - xc_16751));
var dc_16753 = ((2) * rc_16752);
var theta_0_16754 = quil.core.atan2.call(null,(y2_16750 - y1_16748),(x2_16749 - xc_16751));
var d_theta_16755 = (((i > (n_dots / (2))))?((0) - theta_0_16754):(quil.core.PI + theta_0_16754));
var t_norm_16756 = new cljs.core.Keyword(null,"t-norm","t-norm",-863932369).cljs$core$IFn$_invoke$arity$1(state);
var t_theta_16757 = (((i > (n_dots / (2))))?(theta_0_16754 + (t_norm_16756 * d_theta_16755)):(theta_0_16754 - (t_norm_16756 * d_theta_16755)));
var xt_16758 = (xc_16751 + (rc_16752 * quil.core.cos.call(null,t_theta_16757)));
var yt_16759 = (y1_16748 + (rc_16752 * quil.core.sin.call(null,t_theta_16757)));
quil.core.stroke.call(null,(255));

quil.core.stroke.call(null,(0));

quil.core.point.call(null,xt_16758,yt_16759);

var G__16760 = cljs.core.next.call(null,seq__16720__$1);
var G__16761 = null;
var G__16762 = (0);
var G__16763 = (0);
seq__16720 = G__16760;
chunk__16721 = G__16761;
count__16722 = G__16762;
i__16723 = G__16763;
continue;
}
} else {
return null;
}
}
break;
}
});
unfurle_circle.core.unfurle_circle = (function unfurle_circle$core$unfurle_circle(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"unfurle-circle",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,unfurle_circle.core.update_state))?(function() { 
var G__16764__delegate = function (args){
return cljs.core.apply.call(null,unfurle_circle.core.update_state,args);
};
var G__16764 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16765__i = 0, G__16765__a = new Array(arguments.length -  0);
while (G__16765__i < G__16765__a.length) {G__16765__a[G__16765__i] = arguments[G__16765__i + 0]; ++G__16765__i;}
  args = new cljs.core.IndexedSeq(G__16765__a,0);
} 
return G__16764__delegate.call(this,args);};
G__16764.cljs$lang$maxFixedArity = 0;
G__16764.cljs$lang$applyTo = (function (arglist__16766){
var args = cljs.core.seq(arglist__16766);
return G__16764__delegate(args);
});
G__16764.cljs$core$IFn$_invoke$arity$variadic = G__16764__delegate;
return G__16764;
})()
:unfurle_circle.core.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(500)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,unfurle_circle.core.setup))?(function() { 
var G__16767__delegate = function (args){
return cljs.core.apply.call(null,unfurle_circle.core.setup,args);
};
var G__16767 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16768__i = 0, G__16768__a = new Array(arguments.length -  0);
while (G__16768__i < G__16768__a.length) {G__16768__a[G__16768__i] = arguments[G__16768__i + 0]; ++G__16768__i;}
  args = new cljs.core.IndexedSeq(G__16768__a,0);
} 
return G__16767__delegate.call(this,args);};
G__16767.cljs$lang$maxFixedArity = 0;
G__16767.cljs$lang$applyTo = (function (arglist__16769){
var args = cljs.core.seq(arglist__16769);
return G__16767__delegate(args);
});
G__16767.cljs$core$IFn$_invoke$arity$variadic = G__16767__delegate;
return G__16767;
})()
:unfurle_circle.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,unfurle_circle.core.draw_state))?(function() { 
var G__16770__delegate = function (args){
return cljs.core.apply.call(null,unfurle_circle.core.draw_state,args);
};
var G__16770 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16771__i = 0, G__16771__a = new Array(arguments.length -  0);
while (G__16771__i < G__16771__a.length) {G__16771__a[G__16771__i] = arguments[G__16771__i + 0]; ++G__16771__i;}
  args = new cljs.core.IndexedSeq(G__16771__a,0);
} 
return G__16770__delegate.call(this,args);};
G__16770.cljs$lang$maxFixedArity = 0;
G__16770.cljs$lang$applyTo = (function (arglist__16772){
var args = cljs.core.seq(arglist__16772);
return G__16770__delegate(args);
});
G__16770.cljs$core$IFn$_invoke$arity$variadic = G__16770__delegate;
return G__16770;
})()
:unfurle_circle.core.draw_state));
});
goog.exportSymbol('unfurle_circle.core.unfurle_circle', unfurle_circle.core.unfurle_circle);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__7463__7464__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__7463__7464__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),unfurle_circle.core.unfurle_circle,new cljs.core.Keyword(null,"host-id","host-id",742376279),"unfurle-circle"], null));
}

//# sourceMappingURL=core.js.map