class Form{
    constructor(){
  }
  
  display(){
      var title = createElement("h2")
      title.html("Racing Cars")
      title.position(130,50)
      
      var input = createInput("Enter Name")
      var button = createButton("Start")
      var greeting = createElement("h3")
      
      input.position(130,100)
      button.position(250,200)

      button.mousePressed(function(){
          input.hide()
          button.hide()
          var name = input.value()

          playerCount++
          player.update(name)
          player.updateCount(playerCount)

          greeting.html("Hello " + name)
          greeting.position(130,100)

      })
  }
}