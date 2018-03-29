var Bench;
var Squat;
var DeadLift;
var OverheadPress;
var BarbellRow;

function showProgram() {

    //get the lifts
    Bench = document.getElementById('bench').value * 0.9;
    Squat = document.getElementById('squat').value * 0.9;
    DeadLift = document.getElementById('deadlift').value * 0.9;
    OverheadPress = document.getElementById('overheadpress').value * 0.9;
    BarbellRow = document.getElementById('barbellrow').value * 0.9;

    localStorage["Bench"] = Bench;
    localStorage["Squat"] = Squat;
    localStorage["Deadlift"] = DeadLift;
    localStorage["OverheadPress"] = OverheadPress;
    localStorage["BarbellRow"] = BarbellRow;
}