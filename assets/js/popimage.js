function showPopupOnDesktop(imageSrc, event) {
    if (window.innerWidth >= 768) { // Only show popup on screens wider than 768px
        openPopup(imageSrc, event);
    }
}


    function openPopup(imageSrc, event) {
        document.getElementById('largeImage').src = imageSrc; // Set the image source
        document.getElementById('popupImage').style.display = 'block'; // Show the popup
        movePopup(event); // Set initial position
    }

    function movePopup(event) {
        const popup = document.getElementById('popupImage');

        const popupHeight = popup.offsetHeight;
        const cursorX = event.pageX + 20; // 20px to the right of the cursor
        const cursorY = event.pageY - (popupHeight / 2);
        popup.style.left = cursorX + 'px';
        popup.style.top = cursorY + 'px';
    }

    function closePopup() {
        document.getElementById('popupImage').style.display = 'none'; // Hide the popup
    }


    function showImageOnMobile(imageSrc) {
        if (window.innerWidth < 768) { // For mobile screens only
            window.open(imageSrc, '_blank'); // Opens the image in a new tab on mobile
        }
    }