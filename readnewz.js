var readnewz = {};

readnewz.launch = function(){
    var img_主页 = images.read("/sdcard/JB/img/主页.jpg");

    app.launchApp("百度极速版");
    threads.start(function(){
        requestScreenCapture();
        sleep(3000);
        var p = images.findImage(captureScreen(),img_主页);
        if(p){
            click(p.x,p.y);
            toastLog("点击了主页");
            sleep(1000);
            toastLog("开始自动看新闻，每5秒钟滑动一次,总共滑动100次");
            for(var i=0 ; i < 100 ; i++ ){
                swipe(device.width / 2, 2000, device.width / 2, 100, 2000);
                toastLog("第"+ i +"次滑动");
                sleep(5000);
            }
            toastLog("任务结束");
            engines.myEngine().forceStop();
        }
        else{
            toastLog("没有找到主页图标");
            engines.myEngine().forceStop();
        }
    });
}

module.exports = readnewz;