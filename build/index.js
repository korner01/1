(()=>{"use strict";var e={n:t=>{var a=t&&t.__esModule?()=>t.default:()=>t;return e.d(a,{a:a}),a},d:(t,a)=>{for(var r in a)e.o(a,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:a[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=require("router");var a=e.n(t);const r=require("Properties");var s=e.n(r);const n=require("appData");var o=e.n(n);a().get("/property",(function(e,t){var a=e.params.property,r=o().getNode("page"),n=s().get(r,a);t.json({value:n})}));const i=require("events");var c=e.n(i);const d=require("MailUtil");var u=e.n(d);const l=require("ResourceLocatorUtil");var p=e.n(l);c().on("sv:publishing:publish",(function(e){var t=p().getNodeByIdentifier(e.node),a=p().getNodeByIdentifier(e.emitter),r=s().get(a,"displayName"),n=s().get(t,"displayName","URL");u().getMailBuilder().setSubject("".concat(n.displayName," was published")).setHtmlMessage("".concat(r,' published <a href = "').concat(n.URL,'">').concat(n.displayName,"</a>")).addRecipient("magnus.korner@uddevalla.se").build().send()}));const g=require("storage");var v=e.n(g)().getCollectionDataStore("messages");a().post("/message",(function(e,t){var a=e.params.message;try{var r=v.add({message:a});v.instantIndex(r.dsid)}catch(e){console.error("Failed to add message to datastore. Cause ".concat(JSON.stringify(e))),t.status(400)}t.status(200)})),a().get("/messages",(function(e,t){var a=v.find("*",{count:3});t.json(a.toArray())}))})();