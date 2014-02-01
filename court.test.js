var courtTestTarget = {
    court: undefined,
    player: undefined,
    BeforeEachTest: function() {
        this.court = new Court(0);
        this.player = new Player("Kimberly", "FrontLeft", 0, 0);
    }
};

test("PlayerStartingPotionIsCorrectRotatingAroundCourt", function () {
    courtTestTarget.BeforeEachTest();
    
    var positions = [{X: 100, Y:100},
                     {X: 200, Y:100},
                     {X: 300, Y:100},
                     {X: 300, Y:250},
                     {X: 200, Y:250},
                     {X: 100, Y:250},
                     {X: 100, Y:100}];
    for (var i = 0; i < positions.length; i++) {
        courtTestTarget.player.SetStartPosition(courtTestTarget.court.getById(courtTestTarget.player.Location));
    
        var expectedX = positions[i].X;
        var actualX = courtTestTarget.player.StartPosition.X;
        
        var expectedY = positions[i].Y;
        var actualY = courtTestTarget.player.StartPosition.Y;
        
        equal(actualX, expectedX);
        equal(actualY, expectedY);
        
        courtTestTarget.player.Rotate();
    }
    

});