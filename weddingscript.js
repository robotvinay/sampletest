
 function setVideo() {
            var videoSource = 'https://raw.githubusercontent.com/robotvinay/sampletest/main/harish_weds_mani_video_invitation.mp4';
            var videoHTML = `
                <video controls muted autoplay loop>
                    <source src='${videoSource}' type='video/mp4'/>
                </video>
            `;
            document.getElementById('wedding-video').innerHTML = videoHTML;
        }

 function setIframeSize() {
        var iframe = document.getElementById('youtube-iframe');
        var container = document.getElementById('wedding-video');
        var containerWidth = container.offsetWidth;

        // Set different dimensions based on screen width breakpoints
        if (window.innerWidth <= 600) {
            iframe.style.width = '100%';
            iframe.style.height = '200px';
        } else if (window.innerWidth <= 1024) { 
            iframe.style.width = '800px'; // Set your predefined width for large devices
            iframe.style.height = '450px'; // Set your predefined height for large devices
        } else {
            iframe.style.width = '100%'; // Default width for other devices
            iframe.style.height = '315px'; // Default height for other devices
        }
    }
