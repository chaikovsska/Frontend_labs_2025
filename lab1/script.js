document.addEventListener('DOMContentLoaded', () => {
    const element1 = document.getElementById('target-element-6');
    const element2 = document.querySelector('#target-element-7-next');

    const class1 = 'color1';
    const class2 = 'color2'; 

    let clicked1 = false;
    let clicked2 = false;

    function clearClasses(element) {
        if (element) element.classList.remove(class1, class2);
    }

    function swapClasses() {
        const temp = element1.className;
        element1.className = element2.className;
        element2.className = temp;
    }

    element1.addEventListener('click', () => {
        if (!clicked1) {
            clearClasses(element1);
            element1.classList.add(class1);
            clicked1 = true;
        } else {
            if (!clicked2) {
                clearClasses(element1);
                clicked1 = false;
            } else {
                swapClasses();
            }
        }
    });

    element2.addEventListener('click', () => {
        if (!clicked2) {
            clearClasses(element2);
            element2.classList.add(class2);
            clicked2 = true;
        } else {
            if (!clicked1) {
                clearClasses(element2);
                clicked2 = false;
            } else {
                swapClasses();
            }
        }
    });



    const imgContainer = document.getElementById('image-container');
    const addBtn = document.getElementById('add-btn');
    const enlargeBtn = document.getElementById('enlarge-btn');
    const shrinkBtn = document.getElementById('shrink-btn');
    const removeBtn = document.getElementById('remove-btn');

    const defaultWidth = 400;
    const defaultSrc = "assets/city-barcelona.jpg";
    const step = 50;

    const getAddedImages = () => imgContainer.querySelectorAll('.added-image');

    const getLastAddedImage = () => {
        const added = getAddedImages();
        return added[added.length - 1] || null;
    };


    addBtn.addEventListener('click', () => {
        const newImage = document.createElement('img');
        newImage.className = 'added-image';
        newImage.src = defaultSrc;
        newImage.alt = "Photo of Barcelona";
        newImage.width = defaultWidth;
        newImage.style.display = "block";
        newImage.style.marginTop = "10px";
        imgContainer.appendChild(newImage);
    });


    enlargeBtn.addEventListener('click', () => {
        const image = getLastAddedImage();
        if (image) {
            image.width += step;
        }
    });


    shrinkBtn.addEventListener('click', () => {
        const image = getLastAddedImage();
        if (image) {
            image.width = Math.max(50, image.width - step);
        }
    });


    removeBtn.addEventListener('click', () => {
        const image = getLastAddedImage();
        if (image) {
            image.remove();
        }
    });
});
