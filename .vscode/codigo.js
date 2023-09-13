function toggleMode(){
  const body = document.body
  body.classList.toggle('light')

  const img = document.querySelector("#profile img")

  if (body.classList.contains('light')){
   img.setAtribute("src", "./assets/avatar-light.png")
  } else {img.setAtribute("src","./assets/avatar.png")
    }
  }