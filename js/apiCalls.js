//first wait for API libraries to load
//then:
function onLoad(){
	document.addEventListener("deviceready", onDeviceReady, false);
}

//device APIs are available

function onDeviceReady(){
	// Now safe to use Device APIs
	console.log(navigator.camera);
	alert('Device is ready!');
	//set up a variable to ensure you can't do anything unless
	//device is actually ready
}

function TakePhotosUsingCamera() {
	TakePhoto(Camera.PictureSourceType.CAMERA);
}

function TakePhotosFromLibrary() {
	TakePhoto(Camera.PictureSourceType.PHOTOLIBRARY);
}

function onSuccess(imageData){

      // Get image handle
      //
      var smallImage = document.getElementById('myImage1');
      // Unhide image elements
      //
      smallImage.style.display = 'block';
      // Show the captured photo
      // The inline CSS rules are used to resize the image
      //
      smallImage.src = "data:image/jpeg;base64," + imageData;
}

function onFail(message){

	alert("Failed because " + message);
}



function TakePhoto(sourceType) {

	var camOptions = {
		quality: 50,
		destinationType: Camera.DestinationType.DATA_URL,
		sourceType: sourceType,
		correctOrientation: true,
	};
	
	navigator.camera.getPicture(onSuccess, onFail, camOptions);
}