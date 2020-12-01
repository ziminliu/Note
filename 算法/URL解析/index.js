// https://www.google.com/search?q=js+%E7%AE%97%E6%B3%95%E9%A2%98&oq=js+%E7%AE%97%E6%B3%95%E9%A2%98&aqs=chrome..69i57j69i64.6493j0j15&sourceid=chrome&ie=UTF-8
const url =
  "https://www.google.com/search?name=zimin&age=21&querySite=https%3A%2F%2Fwww.baidu.com";
function urlEncode(url) {
    const [,params] = url.split('?')
    const datas ={};
    params.split('&').forEach(item=>{
        const [name,data] = item.split('=')
        datas[name] =data;
    })
    return datas;
}
console.log(JSON.parse(decodeURI(JSON.stringify(urlEncode(url)))));