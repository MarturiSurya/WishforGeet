document.getElementById('toggleButton').addEventListener('click', function() {
    document.body.classList.toggle('white'); 
    if (document.body.classList.contains('white')) {
        document.getElementById('toggleButton').style.display = 'none'; 
        document.getElementById('greeting').style.display = 'block';
        displayGreeting();
    }
});

function displayGreeting() {
    const name = "Geet"; 
    document.getElementById('name').textContent = name;

    setTimeout(() => {
        document.getElementById('name').style.opacity = 1;
    }, 1000);

    setTimeout(() => {
        const message = "I wanted to do something truly special for you, something that goes beyond just a simple wish.";
        document.getElementById('message').textContent = message;
        document.getElementById('message').style.opacity = 1;
    }, 4000); 

    setTimeout(() => {
        const fullMessage = "So, I created something just for you! Let's celebrate your amazing day in a way that's as unique as you are!";
        document.getElementById('message').textContent = fullMessage;
    }, 9000); 

    setTimeout(() => {
        document.getElementById('celebrateButton').style.opacity = 1;
        document.getElementById('celebrateButton').style.display = 'block';
        celebrateButton.style.visibility = 'visible'; 
        celebrateButton.style.pointerEvents = 'auto'; 
    }, 14000); 
    
}
document.getElementById('celebrateButton').addEventListener('click', function() {
    document.body.classList.add('full-screen-background');
    document.getElementById('greeting').style.display = 'none'; 
    document.getElementById('celebrateButton').style.display = 'none'; 
    document.getElementById('playMusicButton').classList.remove('hidden'); 

    setTimeout(() => {
        document.getElementById('photoFrame').style.display = 'block'; 
    }, 500);

    setTimeout(() => {
        document.getElementById('capImage').style.display = 'block';
    }, 700); 

    setTimeout(() => {
        showBirthdayMessages(); 
    }, 7000);

    setTimeout(() => {
        document.getElementById('cutCakeButton').style.display = 'block'; 
    }, 15000); 
});

document.getElementById('playMusicButton').addEventListener('click', function() {
    const music = document.getElementById('birthdayMusic');
    music.play(); 
    this.style.display = 'none'; 
});

function showBirthdayMessages() {
    const messageContainer = document.getElementById('birthdayMessages');
    messageContainer.style.opacity = 1;  
    console.log('Birthday messages showing!');

    const messages = document.querySelectorAll('.message');
    messages.forEach((message, index) => {
        setTimeout(() => {
            message.style.opacity = 1;
            message.style.transform = 'translateX(0)'; 
        }, index * 1500);
    });
}

document.getElementById('cutCakeButton').addEventListener('click', function() {
    window.location.href = "cake_cutting.html";
});

