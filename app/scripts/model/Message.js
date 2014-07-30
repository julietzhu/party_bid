/**
 * Created by julia on 14-7-29.
 */
function Message(){}
//Message去掉所有空格，变成统一模式
Message.dropSpace = function(message)
{
    if(message==""){
        return "";
    }
    else{
        var new_message ="";
        for(var n= 0;n<message.length;n++)
        {
            if(message.charAt(n)!=" "){
                new_message = new_message +message.charAt(n);
            }
        }
        return new_message;
    }
}

//判断活动是否是以bm开头，不考虑大小写，如果是，则合法，返回true
Message.isRightMessage = function(message){
    if(message.substr(0,2).toUpperCase()=="BM")
    {
        return true;
    }
    return false;
}

//读取短信中的姓名
Message.getMessageName = function(message){
    var name = message.substr(2,message.length-11-2);
    return name;
}
//读取短信中的电话号码
Message.getMessagePhone = function(message){
    var phone = message.substr(message.length-11,message.length);
    return phone;
}

//判断电话号码是否重复
Message.judgePhoneNumber = function(phoneNumber){
    var startActivityName = Activity.getStartActivityName();
    var phone_number = localStorage.getItem("join_"+startActivityName+"_phone_number")||[];
    if(phone_number.length==0) {
        return "noExists";
    }
    else{
        var join_phone_Number = JSON.parse(localStorage["join_"+startActivityName+"_phone_number"]);
        for(var n=0;n<join_phone_Number.length;n++)
        {
            if(phoneNumber==join_phone_Number[n])
            {
                return false;//重复
            }
        }
        return true;//不重复
    }
}

//存储报名者姓名
Message.savePeopleName = function (peopleName) {
    var startActivityName = Activity.getStartActivityName();
    var join_people_name;
    if (localStorage.getItem("join_" + startActivityName + "_people_name") == null) {
        join_people_name = [];
    }
    else {
        join_people_name = JSON.parse(localStorage["join_" + startActivityName + "_people_name"]);
    }
    join_people_name.push(peopleName);
    localStorage["join_" + startActivityName + "_people_name"] = JSON.stringify(join_people_name);
}

//存储报名者电话
Message.savePhoneNumber = function (phoneNumber){
    var startActivityName = Activity.getStartActivityName();
    console.log(Message.judgePhoneNumber(phoneNumber));
    if(Message.judgePhoneNumber(phoneNumber)==false)
    {
        return "false";
    }
    else
    {
        if(Message.judgePhoneNumber(phoneNumber)=="noExists")
        {
            var join_phone_number = [];
        }
        else{
            var join_phone_number = JSON.parse(localStorage["join_"+startActivityName+"_phone_number"]);
        }
        join_phone_number.push(phoneNumber);
        localStorage["join_"+startActivityName+"_phone_number"] = JSON.stringify(join_phone_number);
        return "true";
    }
}

////读取localStorage报名者姓名
Message.getPeopleName = function()
{
    var startActivityName = Activity.getStartActivityName();
    var join_people_name = JSON.parse(localStorage["join_"+startActivityName+"_people_name"]);
    return join_people_name;
}

//读取localStorage报名者电话
Message.getPhoneNumber = function()
{
    var startActivityName = Activity.getStartActivityName();
    var join_phone_number = JSON.parse(localStorage["join_"+startActivityName+"_phone_number"]);
    return join_phone_number;
}
