//notify_message_received({"messages":[{"create_date":"Tue Jan 15 15:28:44 格林尼治标准时间+0800 2013","message":"bm仝键","phone":"18733171780"}]})
//notify_message_received({"messages":[{"create_date":"Tue Jan 15 15:28:44 格林尼治标准时间+0800 2013","message":"jj308","phone":"18733171780"}]})
var native_accessor = {
    send_sms: function (phone, message) {
//        native_access.send_sms({"receivers":[{"name":'name', "phone":phone}]}, {"message_content":message});
        console.log(phone, message);
    },

    receive_message: function (json_message) {
        if (typeof this.process_received_message === 'function') {
            this.process_received_message(json_message);
        }
    },

    process_received_message: function (json_message) {
        var changeMessage = json_message.messages[0].message+json_message.messages[0].phone;
        var message = Message.dropSpace(changeMessage);
        if(Message.isRightMessage(message)==true){
            var phoneNumber = Message.getMessagePhone(message);
            var activity_name = Activity.getStartActivityName();
            if(typeof(activity_name)!="object"){
                native_accessor.send_sms(phoneNumber,"活动尚未开始，请稍候")
            }
            else if(activity_name[1]=="finish"){
                native_accessor.send_sms(phoneNumber,"Sorry,活动报名已经结束");
            }
            else{
                if(Message.judgePhoneNumber(phoneNumber)==true||Message.judgePhoneNumber(phoneNumber)=="noExists")
                {
                    var name = Message.getMessageName(message);
                    Message.savePeopleName(name);
                    Message.savePhoneNumber(phoneNumber);
                    var sign_up_scope = angular.element("#sign_up").scope();
                    console.log(sign_up_scope);
                    sign_up_scope.$apply(function () {
                        sign_up_scope.initiate();
                    })
                    native_accessor.send_sms(phoneNumber,"恭喜！报名成功");
                }
                else{
                    console.log("电话号码重复");
                }
            }
        }
        else{
            console.log("格式不正确");
        }
    }
};

function notify_message_received(message_json) {
    //console.log(JSON.stringify(message_json));
    //JSON.stringify(message_json);
    //alert(JSON.stringify(message_json.messages));
    native_accessor.receive_message(message_json);
    //phone_number=message_json.messages[0].phone;
}
