var pictureSource;
var destinationType; 

var custom = 'custom1';

document.addEventListener("deviceready",onDeviceReady,false);

function onDeviceReady() {
    pictureSource = navigator.camera.PictureSourceType;
    destinationType = navigator.camera.DestinationType;
}


function onPhotoURISuccess(imageURI) {
    //$('#camera1').attr('src', imageURI);
    $('#camera1').prepend('<img src="'+imageURI+'" class="capture">');
    
    //alert(custom);
    //var img = { src: imageURI, w: 1024,h: 768 };
    window[custom].push({ src: imageURI, w: 1024,h: 768 });
    movePic(imageURI);
}

function onPhotoDataSuccess(imageURI) { 
    var imgProfile = document.getElementById('camera1');
    imgProfile.src = imageURI;
    if(sessionStorage.isprofileimage==1) {
        getLocation();
    }
    movePic(imageURI);
}

function onFail(message) {
    alert('Failed because: ' + message);
}

function movePic(file) { 
    window.resolveLocalFileSystemURI(file, resolveOnSuccess, resOnError); 
} 

function resolveOnSuccess(entry) { 
    var d = new Date();
    var n = d.getTime();
    var newFileName = n + ".jpg";
    var myFolderApp = "/mnt/sdcard/DCIM/" + custom;
    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSys) {      
        fileSys.root.getDirectory( myFolderApp, {create:true, exclusive: false},
                function(directory) {
                    entry.moveTo(directory, newFileName,  successMove, resOnError);
                },
        resOnError);
    },
    resOnError);
}

function successMove(entry) {
    sessionStorage.setItem('itempath', entry.fullPath);
}

function resOnError(error) {
    alert(error.code);
}

function capturePhoto() {
    navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 20, allowEdit: true, destinationType: destinationType.DATA_URL });
}

function getPhoto(source) {
    navigator.camera.getPicture(onPhotoURISuccess, onFail, { 
        quality: 50, 
        destinationType: destinationType.FILE_URI, 
        sourceType: source, 
        targetWidth: 1024,
        targetHeight: 768
    });
}

function onFail(message) {
    alert('Failed because: ' + message);
}

