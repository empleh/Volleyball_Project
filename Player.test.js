var playerTestTarget = {
    player: undefined,
    BeforeEachTest: function() {
        this.player = new Player("Kimberly", "FrontLeft", 0, 0);
    }
};

test("PlayerStartingLocationIsFrontLeft", function () {
    playerTestTarget.BeforeEachTest();
    
    var expected = "FrontLeft";
    var actual = playerTestTarget.player.Location;
    
    equal(actual, expected);
});

test("PlayerFirstMovesToFrontMiddle", function () {
    playerTestTarget.BeforeEachTest();
    
    playerTestTarget.player.Rotate();
    
    var expected = "FrontMiddle";
    var actual = playerTestTarget.player.Location;
    
    equal(actual, expected);
});

test("PlayerMovesThroughPositions", function () {
    playerTestTarget.BeforeEachTest();
    
    var positions = ["FrontLeft", "FrontMiddle", "FrontRight", "BackRight", "BackMiddle", "BackLeft"];
    
    for (var i = 0; i < positions.length; i++){
        var expected = positions[i];
        var actual = playerTestTarget.player.Location;
        
        equal(actual, expected);
        
        playerTestTarget.player.Rotate();
    }
    
    var expectedEnd = "FrontLeft";
    var actualEnd = playerTestTarget.player.Location;
    
    equal(actualEnd, expectedEnd);
});