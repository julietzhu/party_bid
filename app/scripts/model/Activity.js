/**
 * Created by julia on 14-7-29.
 */
//活动相关函数
//判断活动名称是否重复，重复返回true
function Activity(){
}
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
