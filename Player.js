function Player(name, startingLocation, startingX, startingY) {
    "use strict";
    
    this.id = name;
    this.Location = startingLocation;
    this.Position = {X: startingX, Y: startingY};
    this.StartPosition = {X: 0, Y: 0};
    this.SetStartPosition = GetPlayerStartPosition;
    this.Rotate = Rotate;
    
    function GetPlayerStartPosition(courtPosition) {
        var x = courtPosition.attr("x");
        var y = courtPosition.attr("y");
        var width = courtPosition.attr("width");
        var height = courtPosition.attr("height");
        
        var centerX = x + (width/2);
        var centerY = y + (height/2);
        
        this.StartPosition = {X:centerX, Y:centerY};
    }
    
    function Rotate() {   
        switch (this.Location) {
            case "FrontLeft":
                this.Location = "FrontMiddle";
                break;
            case "FrontMiddle":
                this.Location = "FrontRight";
                break;
            case "FrontRight":
                this.Location = "BackRight";
                break;
            case "BackRight":
                this.Location = "BackMiddle";
                break;
            case "BackMiddle":
                this.Location = "BackLeft";
                break;
            case "BackLeft":
                this.Location = "FrontLeft";
                break;
            default:
                this.Location = "Bench";
                break;
        }
    }
}