webpackJsonp([0],{"+qp/":function(e,t,r){"use strict";var n=r("sRoY"),i=r.n(n),a=(r("5Qkr"),{components:{VueCropper:i.a},data:function(){return{imgSrc:null,data:null}},methods:{setImage:function(e){var t=this,r=e.target.files[0];if(-1!==r.type.indexOf("image/"))if("function"==typeof FileReader){var n=new FileReader;n.onload=function(e){t.imgSrc=e.target.result,console.log(t.$refs.cropper),t.$refs.cropper.replace(e.target.result)},n.readAsDataURL(r)}else alert("Sorry, FileReader API not supported");else alert("Please select an image file")},showFileChooser:function(){this.$refs.input.click()},sendImage:function(){this.$emit("uploadDiglog",this.$refs.cropper.getCroppedCanvas().toDataURL())}}}),o={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"upload"},[r("input",{ref:"input",attrs:{type:"file",name:"image",accept:"image/*"},on:{change:e.setImage}}),e._v(" "),r("vue-cropper",{directives:[{name:"show",rawName:"v-show",value:e.imgSrc,expression:"imgSrc"}],ref:"cropper",attrs:{src:e.imgSrc,alt:"Source Image"}}),e._v(" "),r("div",{staticClass:"btns"},[r("el-row",[r("el-button",{attrs:{type:"info"},on:{click:function(t){return t.preventDefault(),e.showFileChooser.apply(null,arguments)}}},[e._v("選擇檔案")]),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:function(t){return t.preventDefault(),e.sendImage.apply(null,arguments)}}},[e._v("確認送出")])],1)],1)],1)},staticRenderFns:[]};var s=r("VU/8")(a,o,!1,function(e){r("/vf7")},null,null);t.a=s.exports},"/vf7":function(e,t){},"5Qkr":function(e,t){},SIOh:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAACSUlEQVRIicWXsWsUURDGv7tLBJVYiHAKqyBELezkjIexEjkEiYWVcBaCYGkj/gNy1WlldaWNRSpT5A84tAgE0ihGhCCXHAo2FkJQCedPVubJsNy+24WQGxgWdr+Zb3bet/PeVgCVtLqkeUnHLey7pC1J30qlSYkLeBPoAQPybWCYZpGckwANoB8hy7O+xZYmrgEdYOQS7wBdoAUkwKx5Yve6hgk2shy1osRHgBWXYAi0gZkCLZwx7NDFr1jOKHEtQ7oMzBXUgfc5i/XktRhxx4FfAJWcxBeBl+bHcjAVyxGsk0fccGu6HCFN/bzhfk/AVdybj7zgPCiod1igvUeBP8AnE9iktoc172eJm64l7UiS68AbYM/h0wI2gefAiZy4tsM3PXHPfTJ56r2d+bzG2ZWI2sOn1vPEYSJ1I2/7zjC/gEfAZWABuA+8ti4kkfiuxQ8Ccd1V3ooE7joNHB7z/MyE9W45nnrVBn6wzchYX7drIumjpKeSGpKqdn9H0l4k3ueeTytZcpXEKj4NrI1Z16/WxpMT1D3rYpaqkQqzNpR0VdJNSa8k/bDnpyQ9kfRB0qXC2YBFV0lMHFk/BNwB3rv4txF84nCLZcS1kDMez7r43TLiSk8O29aAG5Hm3JP0WdIzSbdMWNckPXaYL5H4kHv7H2eJAbKaPzf+28OyA6TIyHwArGfGZbAN4G6kzbkjUyU2iVRUFwy7VWBDiW4SKrktnjPcz/3YFjWtg4CmefTRtA57/s0P/HibFdyBHuizvu+/MNP5aZP0F5PP0O5loC3cAAAAAElFTkSuQmCC"}});
//# sourceMappingURL=0.f35a8dbd1a7c6fe6814c.js.map