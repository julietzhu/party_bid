/**
 * Created by julia on 14-7-29.
 */
//活动相关函数

function Activity(){
}

//判断活动名称是否重复，重复返回true
Activity.judgeActivityName = function(stored_activity_name){
    if(localStorage.length!=0)
    {
        var storedNames = [];
        storedNames = JSON.parse(localStorage["activity_name"]);
        for(var n=0;n<storedNames.length;n++)
        {
            if (storedNames[n]==stored_activity_name)
            {
                return true;
            }
        }
    }
    return false;
}

//存储活动名称
Activity.save = function(create_activity_name)
{
    var activity_name = [];
    if(localStorage.length==0){
        activity_name.push(create_activity_name);
    }
    else{
        activity_name = JSON.parse(localStorage["activity_name"]);
        activity_name.push(create_activity_name);
    }
    localStorage['activity_name'] = JSON.stringify(activity_name);
}

//读取活动名称
Activity.getActivityName = function(){
    if(localStorage.length!=0)
    {
        var getName = [];
        getNames = JSON.parse(localStorage["activity_name"]);
        return getNames;
    }
}

//活动开始
Activity.start = function (activity_name) {
    localStorage.setItem("start_activity",activity_name);
    return "finish";
}

//活动结束
Activity.finish = function () {
    if(confirm('确认要结束本次报名吗？'))
    {
        localStorage.setItem("start_activity","no");
        return "start";
    }
    return "finish";
}

//读取开始活动的名称
Activity.getStartActivityName = function(){
    return localStorage.getItem("start_activity");
}

//判断活动是否开始
Activity.isStarted = function (activity_name){
    if(activity_name==Activity.getStartActivityName())
    {
        return true;
    }
    return false;
}