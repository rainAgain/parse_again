function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    var context = "";
    if (r != null)
         context = decodeURIComponent(r[2]);
    reg = null;
    r = null;
    return context == null || context == "" || context == "undefined" ? "" : context;
}
function getQueryStriongArgs () {
  var qs = (location.search.length>0?location.search.substring(1):""),
      args = {},
      items = qs.length ? qs.split("&"):[],
      item = null,
      name = null,
      value= null,
      i = 0,
      len = items.length;
      for(i = 0;i<len;i++){
        item = items[i].split("=");
        name = decodeURIComponent(item[0]);
        value = decodeURIComponent(item[1]);
        if(name.length){
          args[name] = value;
        }
      }
      return args;
}
module.exports = getQueryStriongArgs;
module.exports.GetQueryString = GetQueryString;
