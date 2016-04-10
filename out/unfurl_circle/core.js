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

var seq__7823 = cljs.core.seq.call(null,cljs.core.range.call(null,(n_dots + (1))));
var chunk__7824 = null;
var count__7825 = (0);
var i__7826 = (0);
while(true){
if((i__7826 < count__7825)){
var i = cljs.core._nth.call(null,chunk__7824,i__7826);
var angle_7827 = ((i / n_dots) * quil.core.TWO_PI);
var x1_7828 = (left_endpoint_x + (circumference * (i / n_dots)));
var y1_7829 = line_y;
var x2_7830 = (center_x - (radius * quil.core.sin.call(null,angle_7827)));
var y2_7831 = (center_y - (radius * quil.core.cos.call(null,angle_7827)));
var xc_7832 = (((quil.core.sq.call(null,x2_7830) - quil.core.sq.call(null,x1_7828)) + quil.core.sq.call(null,(y2_7831 - y1_7829))) / ((2) * (x2_7830 - x1_7828)));
var rc_7833 = quil.core.abs.call(null,(x1_7828 - xc_7832));
var dc_7834 = ((2) * rc_7833);
var theta_0_7835 = quil.core.atan2.call(null,(y2_7831 - y1_7829),(x2_7830 - xc_7832));
var d_theta_7836 = (((i > (n_dots / (2))))?((0) - theta_0_7835):(quil.core.PI + theta_0_7835));
var t_norm_7837 = new cljs.core.Keyword(null,"t-norm","t-norm",-863932369).cljs$core$IFn$_invoke$arity$1(state);
var t_theta_7838 = (((i > (n_dots / (2))))?(theta_0_7835 + (t_norm_7837 * d_theta_7836)):(theta_0_7835 - (t_norm_7837 * d_theta_7836)));
var xt_7839 = (xc_7832 + (rc_7833 * quil.core.cos.call(null,t_theta_7838)));
var yt_7840 = (y1_7829 + (rc_7833 * quil.core.sin.call(null,t_theta_7838)));
quil.core.stroke.call(null,(255));

quil.core.stroke.call(null,(0));

quil.core.point.call(null,xt_7839,yt_7840);

var G__7841 = seq__7823;
var G__7842 = chunk__7824;
var G__7843 = count__7825;
var G__7844 = (i__7826 + (1));
seq__7823 = G__7841;
chunk__7824 = G__7842;
count__7825 = G__7843;
i__7826 = G__7844;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__7823);
if(temp__4657__auto__){
var seq__7823__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7823__$1)){
var c__7021__auto__ = cljs.core.chunk_first.call(null,seq__7823__$1);
var G__7845 = cljs.core.chunk_rest.call(null,seq__7823__$1);
var G__7846 = c__7021__auto__;
var G__7847 = cljs.core.count.call(null,c__7021__auto__);
var G__7848 = (0);
seq__7823 = G__7845;
chunk__7824 = G__7846;
count__7825 = G__7847;
i__7826 = G__7848;
continue;
} else {
var i = cljs.core.first.call(null,seq__7823__$1);
var angle_7849 = ((i / n_dots) * quil.core.TWO_PI);
var x1_7850 = (left_endpoint_x + (circumference * (i / n_dots)));
var y1_7851 = line_y;
var x2_7852 = (center_x - (radius * quil.core.sin.call(null,angle_7849)));
var y2_7853 = (center_y - (radius * quil.core.cos.call(null,angle_7849)));
var xc_7854 = (((quil.core.sq.call(null,x2_7852) - quil.core.sq.call(null,x1_7850)) + quil.core.sq.call(null,(y2_7853 - y1_7851))) / ((2) * (x2_7852 - x1_7850)));
var rc_7855 = quil.core.abs.call(null,(x1_7850 - xc_7854));
var dc_7856 = ((2) * rc_7855);
var theta_0_7857 = quil.core.atan2.call(null,(y2_7853 - y1_7851),(x2_7852 - xc_7854));
var d_theta_7858 = (((i > (n_dots / (2))))?((0) - theta_0_7857):(quil.core.PI + theta_0_7857));
var t_norm_7859 = new cljs.core.Keyword(null,"t-norm","t-norm",-863932369).cljs$core$IFn$_invoke$arity$1(state);
var t_theta_7860 = (((i > (n_dots / (2))))?(theta_0_7857 + (t_norm_7859 * d_theta_7858)):(theta_0_7857 - (t_norm_7859 * d_theta_7858)));
var xt_7861 = (xc_7854 + (rc_7855 * quil.core.cos.call(null,t_theta_7860)));
var yt_7862 = (y1_7851 + (rc_7855 * quil.core.sin.call(null,t_theta_7860)));
quil.core.stroke.call(null,(255));

quil.core.stroke.call(null,(0));

quil.core.point.call(null,xt_7861,yt_7862);

var G__7863 = cljs.core.next.call(null,seq__7823__$1);
var G__7864 = null;
var G__7865 = (0);
var G__7866 = (0);
seq__7823 = G__7863;
chunk__7824 = G__7864;
count__7825 = G__7865;
i__7826 = G__7866;
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
var G__7867__delegate = function (args){
return cljs.core.apply.call(null,unfurl_circle.core.update_state,args);
};
var G__7867 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7868__i = 0, G__7868__a = new Array(arguments.length -  0);
while (G__7868__i < G__7868__a.length) {G__7868__a[G__7868__i] = arguments[G__7868__i + 0]; ++G__7868__i;}
  args = new cljs.core.IndexedSeq(G__7868__a,0);
} 
return G__7867__delegate.call(this,args);};
G__7867.cljs$lang$maxFixedArity = 0;
G__7867.cljs$lang$applyTo = (function (arglist__7869){
var args = cljs.core.seq(arglist__7869);
return G__7867__delegate(args);
});
G__7867.cljs$core$IFn$_invoke$arity$variadic = G__7867__delegate;
return G__7867;
})()
:unfurl_circle.core.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(500)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,unfurl_circle.core.setup))?(function() { 
var G__7870__delegate = function (args){
return cljs.core.apply.call(null,unfurl_circle.core.setup,args);
};
var G__7870 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7871__i = 0, G__7871__a = new Array(arguments.length -  0);
while (G__7871__i < G__7871__a.length) {G__7871__a[G__7871__i] = arguments[G__7871__i + 0]; ++G__7871__i;}
  args = new cljs.core.IndexedSeq(G__7871__a,0);
} 
return G__7870__delegate.call(this,args);};
G__7870.cljs$lang$maxFixedArity = 0;
G__7870.cljs$lang$applyTo = (function (arglist__7872){
var args = cljs.core.seq(arglist__7872);
return G__7870__delegate(args);
});
G__7870.cljs$core$IFn$_invoke$arity$variadic = G__7870__delegate;
return G__7870;
})()
:unfurl_circle.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,unfurl_circle.core.draw_state))?(function() { 
var G__7873__delegate = function (args){
return cljs.core.apply.call(null,unfurl_circle.core.draw_state,args);
};
var G__7873 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7874__i = 0, G__7874__a = new Array(arguments.length -  0);
while (G__7874__i < G__7874__a.length) {G__7874__a[G__7874__i] = arguments[G__7874__i + 0]; ++G__7874__i;}
  args = new cljs.core.IndexedSeq(G__7874__a,0);
} 
return G__7873__delegate.call(this,args);};
G__7873.cljs$lang$maxFixedArity = 0;
G__7873.cljs$lang$applyTo = (function (arglist__7875){
var args = cljs.core.seq(arglist__7875);
return G__7873__delegate(args);
});
G__7873.cljs$core$IFn$_invoke$arity$variadic = G__7873__delegate;
return G__7873;
})()
:unfurl_circle.core.draw_state));
});
goog.exportSymbol('unfurl_circle.core.unfurl_circle', unfurl_circle.core.unfurl_circle);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__7363__7364__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__7363__7364__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),unfurl_circle.core.unfurl_circle,new cljs.core.Keyword(null,"host-id","host-id",742376279),"unfurl-circle"], null));
}

//# sourceMappingURL=core.js.map