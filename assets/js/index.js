
    topUserInfo()
    function topUserInfo() {
        $.ajax({
            type: 'get',
            url: '/my/userinfo',
            success: function (res) {

                if (res.status !== 0) {
                    return layer.msg(res.message)
                }
                //成功后渲染头像
                let username = res.data['username']
                let nickname = res.data['nickname']
                let user_pic = res.data['user_pic']
                let name = nickname || username
                let text_avatar = name[0].toUpperCase()
                if (nickname) {
                    $('.userinfo .text-p').html(`欢迎 ${nickname}`)
                } else {
                    $('.userinfo .text-p').html(`欢迎 ${username}`)
                }
                if (user_pic) {
                    $('.layui-nav-img')
                        .attr('src', user_pic)
                        .show()
                    $('.text-avatar').hide()
                } else {
                    $('.layui-nav-img')
                        .hide()
                    $('.text-avatar').html(text_avatar).show()
                }
            }


        })
    }
  

    //退出功能
    $('#icon-tuichu').click(function () {
        layer.confirm('是否退出登录?', { icon: 3, title: '提示' }, function (index) {
            localStorage.removeItem('token')
            location.href = './login.html'
            layer.close(index);
        });

    })


