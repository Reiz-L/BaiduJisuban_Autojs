var shortvideo = {};

shortvideo.launch = function(){
    var img_shortvideo_icon = images.read("/sdcard/JB/img/视频.jpg");

    app.launchApp("百度极速版");
    threads.start(function(){
        requestScreenCapture();
        sleep(3000);
        var p = images.findImage(captureScreen(), img_shortvideo_icon);
        if(p){
            click(p.x,p.y);
            toastLog("点击了视频图标");
            sleep(1000);
            toastLog("开始自动看视频，每15秒钟滑动一次,总共滑动100次");
            for(var i=0 ; i < 100 ; i++ ){
                swipe(device.width / 2, 2000, device.width / 2, 100, 2000);
                toastLog("第"+ i +"次滑动");
                sleep(15000);
            }
        }
        else{
            toastLog("找不到视频图标");
            engines.myEngine().forceStop();
        }
    });
}

module.exports = shortvideo;