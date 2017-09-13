/**
 * Created by Administrator on 2017/9/11.
 */
require.config({
    baseUrl :"js",//���û���Ŀ¼
    paths:{         //paths�е�ÿһ��·��������Я��.js��׺��
        jquery :"lib/jquery-2.1.4",
        bootstrap:"../assets/bootstrap/js/bootstrap"
    },
    shim:{
        bootstrap:{
            deps:["jquery"]
        }
    }
});
require(["jquery"],function($){
    $(".menu .list-group").on("click","a",function(){
        var item = $(this).attr("item");
        switch (item){
            case "teacher":
                $(".main .content-container").html("讲师管理")
                break;
            case "course":
                $(".main .content-container").html("课程管理")
                break;
            case "category":
                $(".main .content-container").html("课程分类")
            case "chart":
                $(".main .content-container").html("图表统计")
        }
        $(this).addClass("active").siblings().removeClass("active");
    });
    //Ĭ�ϵ����ʦ����ť��
    //    ģ������ʦ����ť
    $(".menu .list-group a[item=teacher]").trigger("click");
    var userInfoStr = localStorage.getItem("userInfo");
    var userInfo = JSON.parse(userInfoStr);
    $(".profile img").attr("src",userInfo.tc_avatar);
    $(".profile h3").html(userInfo.tc_name);

})
