// Selecting elements
let balloon = document.getElementById('balloon');
const pumpButton = document.getElementById('pumpButton');
let spark = document.getElementById('spark');
// Balloon inflation variables
let balloonSize = 2; // Initial width and height
let maxSize = 100; // Maximum size before it floats

function burst(id){
    id.addEventListener('click',()=>{
        id.style.height='0px';
        id.style.width="0px";
    })

}
function move(id){
    burst(id)
   
    // let c = 0;
    // let cl = id.offsetWidth;
    // let cr = id.offsetHeight;

    
    // while(c<10){
    //     id.style.top=cl-10+'px';
    //     id.style.left=cr-10+'px';
    //     console.log('working')
    //     c+=1
    //     setTimeout(10000)
    // }
    // Select the balloon and game container elements by their IDs
const gameContainer = document.getElementById('gameContainer');


// Animation settings
const duration = 10000; // 10 seconds total duration
const fps = 60;         // Frames per second
const interval = 1000 / fps; // Time per frame in ms
const speed = 2; // Pixels per frame, adjust as needed

// Function to start a straight-line animation in a random direction
function animateBalloon() {
    // Generate a random angle in radians
    const angle = Math.random() * 2 * Math.PI;
    const dx = Math.cos(angle) * speed; // X direction speed
    const dy = Math.sin(angle) * speed; // Y direction speed

    let startTime = performance.now();
    let elapsedTime = 0;

    function update() {
        let currentTime = performance.now();
        elapsedTime = currentTime - startTime;

        if (elapsedTime < duration) {
            // Calculate the next position
            const x = id.offsetLeft + dx;
            const y = id.offsetTop + dy;

            // Get the boundaries of gameContainer
            const containerRect = gameContainer.getBoundingClientRect();
            const balloonRect = id.getBoundingClientRect();

            // Check if the balloon is within bounds and adjust if needed
            if (
                x >= 0 &&
                y >= 0 &&
                x + balloonRect.width <= containerRect.width &&
                y + balloonRect.height <= containerRect.height
            ) {
                id.style.left = `${x}px`;
                id.style.top = `${y}px`;
            } else {
                // Restart the animation in a new random direction if it hits the edge
                startTime = performance.now();
                animateBalloon();
                return;
            }

            // Request the next frame
            requestAnimationFrame(update);
        } else {
            // Restart the animation in a new random direction after 10 seconds
            startTime = performance.now();
            animateBalloon();
        }
    }

    update(); // Start the animation
}

// Start the balloon animation
animateBalloon();
}

let id = balloon
let bc = 1;
pumpButton.addEventListener('click',()=>{
    if(balloonSize < maxSize){
        balloonSize += 20;
        id.style.width = balloonSize + 'px';
        id.style.height = (balloonSize * 1.5) + 'px';
        id.style.bottom = id.offsetHeight-20+'px';
    }
    else{
        move(id)
        setTimeout(1000);
        let newb = document.createElement('div');
        newb.className='ballons';
        balloonSize=0
        newb.id='ballon'+bc
        let rand = Math.ceil(Math.random()*26)
        let bimage = document.createElement('img');
        bimage.className='bimg';
        bimage.setAttribute('src',"./image/ballon"+rand+".png");
        newb.appendChild(bimage);
        document.getElementById('gameContainer').appendChild(newb);
        id=newb;
        bc+=1
    }
})
// Inflate balloon on pump button click
// pumpButton.addEventListener('click', () => {
//     if (balloonSize < maxSize) {
//         balloonSize += 20;
//         balloon.style.width = balloonSize + 'px';
//         balloon.style.height = (balloonSize * 1.5) + 'px';
//     }
//     if (balloonSize >= maxSize) {
//         balloon.classList.add('floating'); // Start floating when max size is reached
//     }
// });

// // Burst balloon on tap
// balloon.addEventListener('click', () => {
//     if (balloonSize >= maxSize) {
//         balloon.classList.remove('floating');
//         balloon.classList.add('burst'); // Apply burst animation
//         setTimeout(() => {
//             // Reset balloon after bursting
//             balloon.classList.remove('burst');
//             balloonSize = 80;
//             balloon.style.width = balloonSize + 'px';
//             balloon.style.height = (balloonSize * 1.5) + 'px';
//         }, 500);
//     }
// });
