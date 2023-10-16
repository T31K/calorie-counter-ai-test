// Check if the browser supports the API
if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ video: true }) // Request camera
      .then(function(stream) {
          // Assign the video stream to the video element's srcObject
          var video = document.getElementById('videoStream');
          video.srcObject = stream;

          // Play the video
          video.play();
      })
      .catch(function(error) {
          console.log("Error accessing the camera: ", error);
      });
} else {
  alert("Your browser does not support the getUserMedia API.");
}
