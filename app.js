
function getColor() {

    let letters = '1234567890ABCDEF';
    let color = '#';
    let container = document.getElementById('container');
    let clrList = document.getElementById('clrList');          //clr - color
    let hex = document.getElementById('hex');
    let clrBtn = document.getElementById('clrBtn');
    let addBtn = document.getElementById('addBtn');
    let rmvBtn = document.getElementById('rmvBtn');             //rmv - remove
    let favList = document.getElementById('favList');           //fav - favorite


    //Generating a random color and printing on the page
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    hex.innerText = color;
    container.style.backgroundColor = color;
    

    // Collecting generated colors to the colorlist at the bottom of the page
    clrBlock = document.createElement('div');
    clrBlock.innerHTML =
        (`<div id="${color}"class="clrBlock" style="background-color: ${color};">
                    ${color}</div>`);
    clrList.appendChild(clrBlock);

    
    //Picking one of the generated colors and printing on the page
        clrBlock.addEventListener('click', () => {
        container.style.backgroundColor = color;
        hex.innerText = color;
    
    })


    //Removing all collected colors
    rmvBtn.addEventListener('click', () => {
        clrList.innerHTML = "";
    })


    //Adding a color to the favorite list
    addBtn.addEventListener('click', () => {        
        favList.appendChild(clrBlock);
    })

}
    clrBtn.addEventListener('click', getColor);
   

    //Removing all selected colors
    rmvFavBtn.addEventListener('click', () => {
    favList.innerHTML = "";
})