var app = {};
app.debug = false;
app.version = '7.4.0';
app.basePath = '';
app.theme = 'jianmo';
app.themeGlobalScript = 'theme/global-script';
app.jsPaths = {"theme":"\./themes\/jianmo\/js","customwebbundle":"\./bundles\/customweb\/js","customadminbundle":"\./bundles\/customadmin\/js","topxiawebbundle":"\./bundles\/topxiaweb\/js","topxiaadminbundle":"\./bundles\/topxiaadmin\/js","classroombundle":"\./bundles\/classroom\/js","materiallibbundle":"\./bundles\/materiallib\/js","sensitivewordbundle":"\./bundles\/sensitiveword\/js","permissionbundle":"\./bundles\/permission\/js","orgbundle":"\./bundles\/org\/js"};

app.crontab = '/common/crontab';

var CKEDITOR_BASEPATH = app.basePath + '/js/ckeditor/4.6.7/';
var CLOUD_FILE_SERVER = "";

app.config = {"api":{"weibo":{"key":""},"qq":{"key":""},"douban":{"key":""},"renren":{"key":""}},"cloud":{"video_player":"http:\/\/cdn.staticfile.org\/GrindPlayerCN\/1.0.2\/GrindPlayer.swf","video_player_watermark_plugin":"http:\/\/cdn.staticfile.org\/GrindPlayerCN\/1.0.2\/Watermake-1.0.3.swf","video_player_fingerprint_plugin":"http:\/\/cdn.staticfile.org\/GrindPlayerCN\/1.0.2\/Fingerprint-1.0.1.swf"},"loading_img_path":"\/assets\/img\/default\/loading.gif?7.4.0"};

app.arguments = {};
app.controller = 'index';


app.uploadUrl = '/images';
app.imgCropUrl = '/images';
app.lessonCopyEnabled = '1';
app.cloudSdkCdn = '';
app.mainScript = './js/app.js?7.4.0';
app.lang = 'zh_CN';