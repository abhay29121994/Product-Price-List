function expandBox(boxNumber) {
    // Close all boxes first
    const allBoxes = document.querySelectorAll('.box');
    allBoxes.forEach(box => {
        box.classList.remove('expanded');
        box.querySelector('.content').style.display = 'none';
    });

    // Expand the selected box
    const selectedBox = document.getElementById(`box${boxNumber}`);
    selectedBox.classList.add('expanded');
    selectedBox.querySelector('.content').style.display = 'block';
}
