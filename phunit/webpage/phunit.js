
/* constant settings*/
const CALIBRATION_TIME = 180;

/* all gauge settings */
var gaugephSetting = {
    min: 0,
    max: 14.0,
    dialStartAngle: 180,
    dialEndAngle: 0,
    label: function (value) {
        return Math.round(value * 100) / 100;
    },
    color: function (value) {
        if (value < 5) {
            return "red";
        } else if (value < 6.2) {
            return "orange";
        } else if (value < 7.2) {
            return "green";
        } else if (value < 7.5) {
            return "orange";
        } else {
            return "red";
        }
    }
}

var gaugekhSetting = {
    min: 0,
    max: 10,
    dialStartAngle: 180,
    dialEndAngle: 0,
    label: function (value) {
        return Math.round(value * 10) / 10;
    },
    color: function (value) {
        if (value < 2) {
            return "red";
        } else if (value < 4) {
            return "orange";
        } else if (value < 6) {
            return "green";
        } else {
            return "red";
        }
    }
}

var gaugeco2Setting = {
    min: 0,
    max: 50,
    dialStartAngle: 180,
    dialEndAngle: 0,
    label: function (value) {
        return Math.round(value * 10) / 10;
    },
    color: function (value) {
        if (value < 12) {
            return "blue";
        } else if (value < 35) {
            return "green";
        } else {
            return "yellow";
        }
    }
}

var gaugetempSetting = {
    min: 0,
    max: 40,
    dialStartAngle: 180,
    dialEndAngle: 0,
    label: function (value) {
        return Math.round(value * 10) / 10;
    },
    color: function (value) {
        if (value < 21) {
            return "wheat";
        } else if (value < 25) {
            return "green";
        } else {
            return "wheat";
        }
    }
}

var gaugeTimerSetting = {
    max: CALIBRATION_TIME,
    dialStartAngle: -90,
    dialEndAngle: -90.001,
    value:CALIBRATION_TIME,
    label: function (value) {
        return Math.round(value * 100) / 100;
    }
}
