;(function(){
    $.ajaxPrefilter(function(option){
       option.url ='http://www.liulongbin.top:3007'+ option.url
        //判断有/my的都加头部headers
       if(option.url.indexOf('/my')!==-1){
             option.headers={
            Authorization:localStorage.getItem('token') || ''
           }
       }
       //验证是否有token 没有就退出
       option.complete =function(res){
        if(res.responseJSON.status ===1){
             localStorage.removeItem('token')
              location.href = './login.html'
        }
     }
    })
})()