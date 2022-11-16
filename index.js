
// i need to understand this for loop //
// vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv //
function tile(url, left, bottom, width, height){
    for(let h = 0; h < height; h++){
        for(let w = 0; w < width; w++){
            newImage(url, left + w*100, bottom+h*100)
        }
    }
}

let horizon = window.innerHeight / 1.75
let heightOfSky = window.innerHeight-horizon
let heightOfGrass = horizon

tile('assets/sky.png', 0, horizon, window.innerWidth/100, heightOfSky/100)
tile('assets/grass.png', 0, 0, window.innerWidth/100, heightOfGrass/100)
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^  //


function newImage(url, left, bottom) {
    let object = document.createElement('img')
    object.src = url
    object.style.position = 'fixed'
    object.style.left = left + 'px'
    object.style.bottom = bottom + 'px'
    document.body.append(object)
    return object
}

newImage('assets/green-character.gif', 100, 100)
newImage('assets/pine-tree.png', 450, 200)
newImage('assets/tree.png', 200, 300)
newImage('assets/pillar.png', 350, 100)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png', 500, 425)


newImage('assets/pine-tree.png', 650, 340)
newImage('assets/tree.png', 800, 400)
newImage('assets/pine-tree.png', 850, 200)
newImage('assets/tree.png', 600, 250)


// for fun
newImage('assets/boulder.png', 850, 800)
newImage('assets/pine-tree.png', 850, 850)
newImage('assets/rock.png', 860, 850)
newImage('assets/rock.png', 955, 825)
newImage('assets/red-character.gif', 895, 1025)
newImage('assets/staff.png', 920, 1030)
newImage('assets/castle.png', 1564, 361)
newImage('assets/castle.png', 1500, 335)
newImage('assets/castle.png', 1628, 335)
newItem('assets/dragon.png', 1564, 500)
newImage('assets/fire3.png', 990, 990)
newImage('assets/fire3.png', 1130, 920)
newImage('assets/fire3.png', 1300, 850)
newImage('assets/fire2.png', 1400, 700)
// end fun



function newItem(url, left, bottom) {
    let object = newImage(url, left, bottom)

    object.addEventListener('dblclick', () => {
        object.remove()
    })
}

newItem('assets/sword.png', 500, 405)
newItem('assets/shield.png', 165, 185)
newItem('assets/staff.png', 600, 100)

