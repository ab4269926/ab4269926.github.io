$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(500, 200, 20, 300);
    createPlatform(400, 600, 400, 20);
    createPlatform(800, 200, 20, 400);
    createPlatform(650, 470, 20, 10);
    createPlatform(450, 470, 20, 10);

    // TODO 3 - Create Collectables
    createCollectable("myItem", 650, 170, 0.5, 0.7);
    createCollectable("myItem", 450, 170, 0.5, 0.7);
    createCollectable("myItem", 1300, 170, 0.5, 0.7);



    
    // TODO 4 - Create Cannons
    createCannon("right", 560, 1000);
    createCannon("top", 200, 500);
    createCannon("top", 1000, 700);
    createCannon("top", 1100, 710);
    createCannon("top", 1200, 720);
    createCannon("top", 1300, 735);
    createCannon("top", 400, 1000);
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
