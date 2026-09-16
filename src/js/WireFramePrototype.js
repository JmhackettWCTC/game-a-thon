/**
 *  FOR WIREFRAME PROTOTYPE ONLY
 *  it isn't meant to be good code
 *  its only purpose is to make the pages work
 * **/


document.addEventListener("DOMContentLoaded", function() {
    let main = document.querySelector("main");
    printMain(main);
    let spinButton = document.querySelector("#spinButton");
    spinButton.addEventListener("click", function() {
        printSpinWheel();
    });
    let home = document.querySelector("#home");
    home.addEventListener("click", function() {
        printMain(main);
    });


    let editButton = document.querySelector("#editButton");
    if (editButton) {
        editButton.addEventListener("click", function() {
            document.body.classList.toggle("edit-mode");
        });
    }
});

function printMain(main) {
    main.innerHTML = "";
    main.innerHTML += `
<section class="card-grid">
      <div class="steam card-dvd">
          <div class="card-body">
              <h2>Steam</h2>
          </div>
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
    3
    <span class="visually-hidden">3 games</span>
  </span>
  <span class="red-x text-danger" onclick="toggleCard(this)">X</span>
      </div>

      <div class="n64 card-dvd">
          <div class="card-body">
              <h2>Nintendo 64</h2>
          </div>
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
    2
    <span class="visually-hidden">2 games</span>
  </span>
<span class="red-x text-danger" onclick="toggleCard(this)">X</span>
      </div>
</section>
`;
    let steam = document.querySelector(".steam");
    steam.addEventListener("click", function() {
        printGames(main,"steam");
    });

    let n64 = document.querySelector(".n64");
    n64.addEventListener("click", function() {
        printGames(main,"n64");
    });

}

function printGames(main,platform) {
    main.innerHTML = "";
    let games = [];
    switch (platform){
        case "steam":
            games = ['Half-Life', 'Half-Life 2', 'portal 2'];
            break;
        case "n64":
            games = ['Super Mario 64', 'GoldenEye 007'];
            break;
    }
    main.innerHTML += `
<section><button type="button" class="btn btn-outline-danger float-center m-3" id="back">Back</button></section>
<section class="card-grid">
    ${games.map(game => `<div class="${platform} card-dvd">
        <div class="card-body">
            <h2>${game}</h2>
        </div>
        <span class="red-x text-danger" onclick="toggleCard(this)">X</span>
    </div>`).join('')}
</section>
`;
    let back = document.querySelector("#back");
    back.addEventListener("click", function(){
        printMain(main)
    });

}

function printSpinWheel() {
    let main = document.querySelector("main");
    main.innerHTML = "";
    main.innerHTML += `
    <section>
        <div class="text-center">
            <h2>Spin the Wheel</h2>
        </div>
        <div id="wheel" class="text-center"></div>
        <div class="d-flex justify-content-center">
            <button type="button" class="btn btn-primary m-3" id="spin">Spin</button>
        </div>
        <section class="card-grid">
      <div class="steam card-dvd " onclick="toggleCard(this)">
          <div class="card-body" ">
              <h2>Steam</h2>
          </div>
      </div>

      <div class="n64 card-dvd" onclick="toggleCard(this)">
          <div class="card-body" ">
              <h2>Nintendo 64</h2>
          </div>
      </div>
</section>
    </section>
    `;
    let spin = document.querySelector("#spin");
    spin.addEventListener("click", function(){
        alert("I lost the pin and the wheel ran off")
    });
}
function toggleCard(card) {
   
    if (card.classList.contains('deactivate')) {
        card.classList.remove('deactivate');
    } else {
        card.classList.add('deactivate');
    }
}