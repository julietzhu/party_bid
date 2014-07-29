/**
 * Created by julia on 14-7-29.
 */
//创建活动相关函数
//判断活动名称是否重复，重复返回true
function CreateActivity(){
}
CreateActivity.judgeActivityName = function(stored_activity_name){
    for(var n=0;n<localStorage.length;n++)
    {
        var storedNames = [];
        storedNames = JSON.parse(localStorage["activity_name"]);
        if (storedNames[n]==stored_activity_name) {
            return true;
        }
    }
    return false;
}
//存储活动名称
CreateActivity.save = function(create_activity_name)
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
