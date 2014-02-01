function CourtInit() {   
    
    return new Court("#f00", 1);
}

function Court(courtColor, courtOpacity) {
    
    var paper = Raphael(0, 0, 500, 500);

    var court = paper.rect(50, 50, 300, 300);
    court.attr("stroke", courtColor).attr("stroke-opacity", courtOpacity);
    court.id = "court";
    
    var line = paper.path("M50 150H350");
    line.attr("stroke", courtColor).attr("stroke-opacity", courtOpacity);
    line.id = "frontLine";
    
    var frontLeftPosition = paper.rect(50, 50, 100, 100);
    frontLeftPosition.attr("fill", "yellow").attr("stroke-width", "0").attr("fill-opacity", "0");
    frontLeftPosition.id = "FrontLeft";
    
    var frontMiddlePosition = paper.rect(150, 50, 100, 100);
    frontMiddlePosition.attr("fill", "black").attr("stroke-width", "0").attr("fill-opacity", "0");
    frontMiddlePosition.id = "FrontMiddle";
    
    var frontRightPosition = paper.rect(250, 50, 100, 100);
    frontRightPosition.attr("fill", "green").attr("stroke-width", "0").attr("fill-opacity", "0");
    frontRightPosition.id = "FrontRight";
    
    var backLeftPosition = paper.rect(50, 150, 100, 200);
    backLeftPosition.attr("fill", "blue").attr("stroke-width", "0").attr("fill-opacity", "0");
    backLeftPosition.id = "BackLeft";
    
    var backMiddlePosition = paper.rect(150, 150, 100, 200);
    backMiddlePosition.attr("fill", "red").attr("stroke-width", "0").attr("fill-opacity", "0");
    backMiddlePosition.id = "BackMiddle";
    
    var backRightPosition = paper.rect(250, 150, 100, 200);
    backRightPosition.attr("fill", "brown").attr("stroke-width", "0").attr("fill-opacity", "0");
    backRightPosition.id = "BackRight";
    
    return paper;
}
