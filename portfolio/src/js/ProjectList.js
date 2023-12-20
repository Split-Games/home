var project1 = new Project("project-1", "Rise Of Anura", "../../img/Thumbnail.png", 
`
<div class="paragraph">
   Currently in the works, <strong>Rise Of Anura</strong> is my first attempt at creating a full fledged game. 
   Where you help your village expell the forces of evil.
</div>
<br>
<div class="paragraph center">
    <iframe class="youtube" height="520px" src="https://youtube.com/embed/KtiOlSKM3hE?si=uP1Svb9_ZQEQEwY1" frameborder="0" allowfullscreen></iframe>
</div>
<div class="list">
    Main features :
    <ul>
        <li>Procedural Worlds</li>
        <li>Frogified Combat</li>
        <li>Unique class based weapons</li>
        <li>Co-Op</li>
        <li>And FROGS... LOTS OF FROGS</li>
    </ul>
</div>
<div class="paragraph center">
    <img class="pc-screenshot" src="../../img/riseofanura_main_pond.png" alt="Rise Of Anura Main Pond" />
    <img class="pc-screenshot" src="../../img/riseofanura_village.png" alt="Rise Of Anura Village" />
    <img class="pc-screenshot" src="../../img/riseofanura_portal_world.png" alt="Rise Of Anura Portal World" />
</div>
`, "#23bd69", true, true);

var project2 = new Project("project-2", "BlockyBounce", "../../img/blockybounce-icon.png", 
`
<div class="paragraph">
   Released in Summer of 2020 on Appstore and Playstore, <strong>BlockyBounce</strong> is my first widely launched video game. 
   Created to appeal to a younger audience.
</div>
<div class="list">
    Main features :
    <ul>
        <li>Childish Artstyle</li>
        <li>Simple Mechanics</li>
        <li>Jump to new heights and complete against friends</li>
        <li>Purchase new skins with in-game currency or in-app purchases</li>
        <li>Unity Ads</li>
    </ul>
</div>
<div class="paragraph center">
        <img class="phone-screenshot" src="../../img/blockybounce_home.jpg" alt="BlockyBounce Main Screen" />
        <img class="phone-screenshot" src="../../img/blockybounce_ingame.jpg" alt="BlockyBounce In Game" />
    </div>
`, "#5a78af", true);

var project3 = new Project("project-3", "Turtle TD", "../../img/turtleTD_title_screen.png", 
`
<div class="paragraph">
   One of my final projects for school, <strong>TurtleTD</strong> is a game based on the popular BloonsTD franchise. 
   Except instead of monkeys popping balloons with darts, turtles chuck their eggs to destroy the bottles of water before 
   they make it to the water.
</div>
<div class="list">
    Main features :
    <ul>
        <li>Tons Of Upgrades</li>
        <li>Unique Turtles</li>
        <li>40 Waves of plastic bottles ending with a massive jug that you must take down</li>
        <li>2 Maps</li>
        <li>Local Leaderboards</li>
    </ul>
</div>
<div class="paragraph center">
    <img class="pc-screenshot" src="../../img/turtleTD_mid_game.png" alt="TurtleTD Mid Game" />
    <img class="pc-screenshot" src="../../img/turtleTD_end_game.png" alt="TurtleTD End Game" />
    <img class="pc-screenshot" src="../../img/turtleTD_map2.png" alt="TurtleTD Map Wacky Waves" />
</div>
`, "#e48246");

var project4 = new Project("project-4", "Mini Planet Tycoon", "../../img/miniplanets_splash.png", 
`
<div class="paragraph">
   My very first Unity project, <strong>Mini Planet Tycoon</strong> made for BlackThornProds GAME JAM #2.
   Where I ranked 206th, not bad for my first attempt. This game was inspired by Adventure Capitalist.
</div>
<div class="list">
    Main features :
    <ul>
        <li>Chill quick idle game</li>
        <li>Custom Sprites</li>
        <li>Made in a week</li>
    </ul>
</div>
<div class="paragraph center">
    <img class="pc-screenshot" src="../../img/miniplanets_ice.png" alt="Mini Planet Tycoon Start Game" />
    <img class="pc-screenshot" src="../../img/miniplanets_mid.png" alt="Mini Planet Tycoon Second Unlock" />
    <img class="pc-screenshot" src="../../img/miniplanets_end.png" alt="Mini Planet Tycoon End Game" />
</div>
`, "#383838");

var projects = [project1, project2, project3, project4];

$(document).ready(function() 
{
    initGames();
});


function initGames()
{
    var projectCode = '';
    projects.forEach(function (project) {
        var classWH = '';
        var backgroundURL = `url(${project.iconUrl})`;

        if(project.isWide)
            classWH += 'wide ';
        if(project.isHigh)
            classWH += 'high ';


        projectCode += `
        <div id="${project.id}" onclick="showDetails('${encodeURIComponent(JSON.stringify(project))}')" class="project-item ${classWH}">
        <div class="project-item-image" style="background-image: ${backgroundURL}">
    
        </div>
        <div class="title-bar" style="background-color: ${project.accentColor}">
            <div class="title-text">
                ${project.name}
            </div>
            </div>
        </div>
        `;
    });

    document.getElementById('projects-list').innerHTML = projectCode;
}

function showDetails(obj)
{
    var project = JSON.parse(decodeURIComponent(obj));
    var popup = 
    `
    </div>
        <div class="dialog" style="background-color: ${project.accentColor}">
            <h1 class="dialog-title"> ${project.name} </h1>
            <div onclick="closeOverlay()" class="dialog-close"><i class="fa fa-times fa-lg fa-fw"></i></div>
            <div class="dialog-content">
            <div>${project.htmlDescription}</div>
            <div class="dialog-bottom">
            <a onclick="closeOverlay()" class="dialog-close-button">Close</a>
            </div>
            </div>
        </div>
    </div>
    `;
    document.getElementById('popup').innerHTML = popup;
    window.scrollTo(0,0);
    document.getElementById('popup').style.display = "block";
}

function closeOverlay()
{
    document.getElementById('popup').style.display = "none";
}