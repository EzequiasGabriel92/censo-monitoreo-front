"use strict";(self.webpackChunkcenso_monitoreo_front=self.webpackChunkcenso_monitoreo_front||[]).push([[875],{3875:(Z,r,n)=>{n.r(r),n.d(r,{PublicationsModule:()=>b});var l=n(9808),a=n(4032),e=n(2382),t=n(1223),m=n(9305),d=n(3372),p=n(6290);function f(i,c){if(1&i&&(t.TgZ(0,"div",13)(1,"h5"),t._uU(2),t.qZA(),t.TgZ(3,"p"),t._uU(4),t.qZA()()),2&i){const o=c.$implicit;t.xp6(2),t.hij(" Title: ",o.title,""),t.xp6(2),t.hij("Descripci\xf3n: ",o.description,"")}}const h=[{path:"",component:(()=>{class i{constructor(o,s,u){this.fb=o,this.requestService=s,this.utilsService=u,this.items_notification=[]}ngOnInit(){this.create_form(),this.getAllNotification()}create_form(){this.form_register=this.fb.group({title:["",[e.kI.required]],description:["",[e.kI.required]]})}create(){this.form_register.valid?(this.utilsService.start(),this.requestService.post("notifications",this.form_register.value).subscribe(s=>{this.utilsService.stop(),window.alert("Notificacion creada"),this.form_register.reset(),this.getAllNotification()},s=>{this.utilsService.stop(),window.alert(s.message),console.log(s)})):window.alert("Los campos son obligatorios")}getAllNotification(){this.utilsService.start(),this.requestService.get("notifications").subscribe(o=>{this.utilsService.stop(),this.items_notification=o},o=>{this.utilsService.stop(),window.alert(o.message),console.log(o)})}}return i.\u0275fac=function(o){return new(o||i)(t.Y36(e.qu),t.Y36(m.s),t.Y36(d.F))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-publication"]],decls:23,vars:2,consts:[[1,"container"],[1,"row","my-5"],[1,"col-12","col-lg-6"],[1,"text-primary","text-center"],["action","",1,"form-row","row",3,"formGroup"],[1,"col-12","my-3"],["for",""],["type","text","name","","id","","placeholder","Ingrese el titlulo","formControlName","title",1,"form-control"],["type","text","name","","id","","placeholder","Ingresa la descripci\xf3n ","formControlName","description",1,"form-control"],[1,"col-12","text-center","my-3"],[1,"btn","btn-primary",3,"click"],[1,"col-12"],["class","col-12 card card-body mb-3",4,"ngFor","ngForOf"],[1,"col-12","card","card-body","mb-3"]],template:function(o,s){1&o&&(t._UZ(0,"app-header"),t.TgZ(1,"div",0)(2,"div",1)(3,"div",2)(4,"h3",3),t._uU(5,"Crear nueva Publicaci\xf3n o noticia"),t.qZA(),t.TgZ(6,"form",4)(7,"div",5)(8,"label",6),t._uU(9,"Titulo de la publicaci\xf3n"),t.qZA(),t._UZ(10,"input",7),t.qZA(),t.TgZ(11,"div",5)(12,"label",6),t._uU(13,"Descripci\xf3n de la publicaci\xf3n"),t.qZA(),t._UZ(14,"textarea",8),t.qZA()(),t.TgZ(15,"div",9)(16,"button",10),t.NdJ("click",function(){return s.create()}),t._uU(17,"Registar publicaci\xf3n"),t.qZA()()(),t.TgZ(18,"div",2)(19,"div",11)(20,"h4",3),t._uU(21,"Notificaciones y noticias "),t.qZA(),t.YNc(22,f,5,2,"div",12),t.qZA()()()()),2&o&&(t.xp6(6),t.Q6J("formGroup",s.form_register),t.xp6(16),t.Q6J("ngForOf",s.items_notification))},dependencies:[l.sg,e._Y,e.Fj,e.JJ,e.JL,e.sg,e.u,p.G]}),i})()}];let g=(()=>{class i{}return i.\u0275fac=function(o){return new(o||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[a.Bz.forChild(h),a.Bz]}),i})();var v=n(4349);let b=(()=>{class i{}return i.\u0275fac=function(o){return new(o||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[l.ez,e.UX,e.u5,v.m,g]}),i})()}}]);