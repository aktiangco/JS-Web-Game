
// i need to understand this for loop //
// vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv //
// function tile(url, left, bottom, width, height){
//     for(let h = 0; h < height; h++){
//         for(let w = 0; w < width; w++){
//             newImage(url, left + w*100, bottom+h*100)
//         }
//     }
// }

// let horizon = window.innerHeight / 1.75
// let heightOfSky = window.innerHeight-horizon
// let heightOfGrass = horizon

// tile('assets/sky.png', 0, horizon, window.innerWidth/100, heightOfSky/100)
// tile('assets/grass.png', 0, 0, window.innerWidth/110, heightOfGrass/100)
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^  //



const inventory = newInventory()
move(inventory).to(0, 0)

const character = newImage('assets/green-character/static.gif')

function handleDirectionChange(direction){
    if(direction === null){
        character.src = 'assets/green-character/static.gif'
    }
    if(direction === 'west'){
        character.src = 'assets/green-character/west.gif'
    }
    if(direction === 'north'){
        character.src = 'assets/green-character/north.gif'
    }
    if(direction === 'east'){
        character.src = 'assets/green-character/east.gif'
    }
    if(direction === 'south'){
        character.src = 'assets/green-character/south.gif'
    }
}
move(character).withArrowKeys(100, 250, handleDirectionChange)






move(newImage('assets/pine-tree.png')).to(450, 200)
move(newImage('assets/tree.png')).to(200, 300)
move(newImage('assets/pillar.png')).to(350, 100)
move(newImage('assets/crate.png')).to(150, 200)
move(newImage('assets/well.png')).to(500, 425)
move(newItem('assets/sword.png')).to(500, 405)
move(newItem('assets/shield.png')).to(165, 185)
move(newItem('assets/staff.png')).to(600, 100)

