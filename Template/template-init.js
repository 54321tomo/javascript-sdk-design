//Vexile Vars
var LibVer = 1;
var ai = "";
var dd = false;
//Vexile SDK Library
(function (window) {
    var VexSDK = {};

    VexSDK.init = function (ai, de, vr) {
        if(vr == LibVer){
            if(ai != ""){
                if(de){
                    dd = true;
                }
                
                return true;
                
            }   
            else{
                new Error("[Vexile SDK][ERROR] You must supply your App-Key.");return false;}
        }
        else{
            new Error("[Vexile SDK][ERROR] The SDK Version "+vr+" is outdated.");return false;}
    };
    
    VexSDK.UI = function (t) {
        if(t == 1){
            if(dd){ console.log("[Vexile SDK][Debug] Creating the Vexile Login Button."); }
            var par = element.parentNode;
            var it = document.createElement('vexile-lg');
            it.innerHTML="<span class='VEX_I'></span>Login";
            par.replaceChild(it, element);
            it.appendChild(element);
            if(dd){ console.log("[Vexile SDK][Debug] Added the Vexile Login Button to the Parent Node."); }
        }else if(t == 2){
            if(dd){ console.log("[Vexile SDK][Debug] Creating the Vexile Share Button."); }
            var par = element.parentNode;
            var it = document.createElement('vexile-shr');
            it.innerHTML="<span class='VEX_I'></span>Share";
            par.replaceChild(it, element);
            it.appendChild(element);
            if(dd){ console.log("[Vexile SDK][Debug] Added the Vexile Share Button to the Parent Node."); }
        }else{ new Error("[Vexile SDK][ERROR] This UI type is invalid."); }
    };

    window.VexSDK = VexSDK;

})(window, undefined);
//Vexile API
(function (window) {

    var Vex = {};

    Vex.getUserLogin = function () {
        return false;
    };
    
    Vex.share = function (ca, txt) {
        if(ca){
            return false;
        }
        else{
            alert("Failed to post to Vexile");
        }
    };

    window.Vex = Vex;

})(window, undefined);
