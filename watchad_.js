var watchad_ = {};

watchad_.launch = function (){
    
    if(files.exists("/sdcard/JB/img")){
        var img_redbag = images.read("/sdcard/JB/img/红包.jpg");
        
        //var img_看广告再得 =  images.read("/sdcard/JB/img/看广告再得.jpg");
        //var img_宝箱广告叉 = images.read("/sdcard/JB/img/宝箱广告叉.png");
        app.launchApp("百度极速版");
        threads.start(function(){
            requestScreenCapture();
            sleep(3000);
            var p = images.findImage(captureScreen(), img_redbag);
            if(p){
                toastLog("点击 红包，坐标:x=" + p.x + ",y=" + p.y);
                click(p.x,p.y);
                //sleep(1000);
                //click("看广告赚钱");
            }
            else{
                toastLog("没找到图标文件！结束");
                engines.stopAll();
            }
            sleep(1000);

            
        });
        
    }
    else{
        toastLog("请确定脚本文件的完整性，缺少图标");
    }
}

watchad_.close_ad = function(){
    threads.start(function(){
        var img_cha = images.read("/sdcard/JB/img/叉.png");
        sleep(32000);
        var cha = images.findImage(captureScreen(),img_cha);
        if(cha){
            click(cha.x,cha.y);
            toastLog("看完并关闭了广告");
            return true;
        }
        else{
            toastLog("找不到叉");
            return false;
        }
    });
    
}

watchad_.next_ad = function(){
    threads.start(function(){
        var img_zaikanyige = images.read("/sdcard/JB/img/再看一个.jpg");
        var zaikanyige = images.findImage(captureScreen(),img_zaikanyige);
        if(zaikanyige){
            click(zaikanyige.x,zaikanyige.y);
            toastLog("再看一个");
            //sleep(32000);
            return true;//再看
        }
        else{
            click("残忍离开");
            toastLog("点击了残忍离开");
            return false;//离开
        }
    });
    
}

watchad_.again_ad = function(){
    threads.start(function(){
        var img_看广告再得 = images.read("/sdcard/JB/img/看广告再得.jpg");
        var img_宝箱广告叉 = images.read("/sdcard/JB/img/宝箱广告叉.png");
        var kggzaide = images.findImage(captureScreen(),img_看广告再得);
        if(kggzaide){
            click(kggzaide.x,kggzaide.y);
            toastLog("点击看广告再得");
            sleep(32000);
            return true;
        }
        else{
            var box_cha = images.findImage(captureScreen(),img_宝箱广告叉);
            if(box_cha){
                click(box_cha.x,box_cha.y);
                toastLog("点击宝箱广告叉");
                return true;
            }
            else{
                toastLog("找不到宝箱广告叉");
                return false;
            }  
        }
    });
    
}

module.exports = watchad_;
