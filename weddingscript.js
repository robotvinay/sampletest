
 function setVideo() {
            var videoSource = 'https://raw.githubusercontent.com/robotvinay/sampletest/main/harish_weds_mani_video_invitation.mp4';
            var videoHTML = `
                <video controls muted autoplay loop>
                    <source src='${videoSource}' type='video/mp4'/>
                </video>
            `;
            document.getElementById('wedding-video').innerHTML = videoHTML;
        }

setVideo();
