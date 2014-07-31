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
    localStorage["start_activity"] = JSON.stringify("no");
}

//读取活动位置  return position
Activity.get_activity_position = function(activity_name){
    if(localStorage.length!=0){
        var stored_activity_name = Activity.getActivityName();
        for(var n=0;n<stored_activity_name.length;n++){
            if(activity_name==stored_activity_name[n]){
                return n;
            }
        }
    }
}

//存储新建活动状态
Activity.create_activity_status = function (){
    if(!localStorage.getItem("activity_status"))
    {
        var status = ["notstart"];
        localStorage["activity_status"] = JSON.stringify(status);
    }
    else{
        var activity_status = [];
        activity_status = JSON.parse(localStorage["activity_status"]);
        activity_status.push("notstart");
        localStorage["activity_status"] = JSON.stringify(activity_status);
    }
}

//修改活动状态
Activity.changeActivityStatus = function(position,status){
    var activity_status = JSON.parse(localStorage["activity_status"]);
    if(status =="start"){
        activity_status[position] = "start";
    }
    else{
        activity_status[position] = "finish";
    }
    localStorage["activity_status"] = JSON.stringify(activity_status);
}

//读取活动状态
Activity.getActivityStatus = function(position){
    var activity_status = JSON.parse(localStorage["activity_status"]);
    return activity_status[position];
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
    var name_status = [activity_name,"start"];
 //   localStorage.setItem("start_activity",activity_name);
    localStorage["start_activity"] = JSON.stringify(name_status);
    var position = Activity.get_activity_position(activity_name);
    Activity.changeActivityStatus(position,"start");
    return "finish";
}

//活动结束
Activity.finish = function (activity_name) {
    if(confirm('确认要结束本次报名吗？'))
    {
        var name_status = [activity_name,"finish"];
        //   localStorage.setItem("start_activity",activity_name);
        localStorage["start_activity"] = JSON.stringify(name_status);
    //    localStorage.setItem("start_activity","no");
        var position = Activity.get_activity_position(activity_name);
        Activity.changeActivityStatus(position,"finish");
        return "start";
    }
    return "finish";
}

//读取开始活动的名称
Activity.getStartActivityName = function(){
    return JSON.parse(localStorage["start_activity"]);
}

//判断活动是否开始
Activity.isStarted = function (activity_name){
    if(activity_name==Activity.getStartActivityName())
    {
        return true;
    }
    return false;
}