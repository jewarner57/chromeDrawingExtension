var s = function (sketch) {
    sketch.setup = function () {
        document.body.style['userSelect'] = 'none';

        //let h = document.body.clientHeight;

        let canvas = sketch.createCanvas(sketch.windowWidth, sketch.windowHeight);

        canvas.position(0, 0);
        canvas.style('pointer-events', 'none');

        sketch.clear();
    };

    sketch.draw = function () {
        sketch.colorMode(sketch.HSB);
        sketch.stroke(sketch.map(sketch.mouseX, 0, sketch.width, 0, 360), 100, 100);
        sketch.strokeWeight(4);
        if (sketch.mouseIsPressed) {
            sketch.line(sketch.mouseX, sketch.mouseY, sketch.pmouseX, sketch.pmouseY);
        }
    };
};

var myp5 = new p5(s);
