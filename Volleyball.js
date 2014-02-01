$(document).ready(function(){
    var container = CourtInit();
    var court = container.getById("court");
    
    var firstPlayer = new Player("Kimberly", "FrontLeft", 0, 0);
    DrawPlayer(firstPlayer, court, container);
    
    $("#btnRotate").on("click", function(){
        RemovePlayer(container.getById(firstPlayer.id));
        firstPlayer.Rotate();
        DrawPlayer(firstPlayer, court, container);
    });
});

function DrawPlayer(player, court, container) {
    var playerRadius = 10;
    
    player.SetStartPosition(container.getById(player.Location));

    var circle = container.circle(player.StartPosition.X,
                                    player.StartPosition.Y,
                                    playerRadius);
    circle.id = player.id;
}

function RemovePlayer(playerElement) {
    playerElement.remove();   
}