var username = 'renatofk@gmail.com';
var password = 'Lince1988';
var cameraId = 'e555f843-5833-f656-ca58-b7bacd1c63a7';
var systemId = '5b2f8828-7d30-4782-bb85-38b91e894b79';
var serverCloudAddress = "https://" + systemId + ".relay.vmsproxy.com";
var serverLocalAddress = "https://201.6.112.181:7001";
var serverAddress = serverCloudAddress; // serverLocalAddress;



function step1GenerateKey() {
 
    $.ajax({
 
        url: serverAddress + "/api/getNonce",
        type: "GET",
        success: function(response) {
            var realm = response.reply.realm;
            var nonce = response.reply.nonce;
            var digest = md5(username + ":" + realm + ":" + password);
            var partial_ha2 = md5("GET" + ":");
            var simplified_ha2 = md5(digest + ":" + nonce + ":" + partial_ha2);
            var authKey = btoa(username + ":" + nonce + ":" + simplified_ha2);
            step2GenerateVideoUrl(authKey); // This key can be used in URL now
        }
    });
}
 
function step2GenerateVideoUrl(authKey) {
    var cameraURL = serverAddress + '/hls/' + cameraId + '.m3u8?lo&auth=' + authKey;
    console.log(cameraURL); // this URL can be tested with VLC player for verification. VLC should not ask for additional credentials
    step3InitPlayer(cameraURL);
}
 
function step3InitPlayer(cameraURL) {
 
    var video = document.getElementById('video');
 
    if (Hls.isSupported()) {
 
        var hls = new Hls();
        hls.loadSource(cameraURL);
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED, function() {
 
            video.play();
 
        });
    }
}
 
step1GenerateKey();