(function() {
    var canvas = $('#tree');

    if (!canvas[0].getContext) {
        $("#error").show();
        return false;
    }

    var width;
    var height = 680;

    if (window.innerWidth) {
        width = window.innerWidth;
    } else if ((document.body) && (document.body.clientWidth)) {
        width = document.body.clientWidth;
    }
    if (document.documentElement &&
        document.documentElement.clientHeight &&
        document.documentElement.clientWidth) {
        width = document.documentElement.clientWidth;
    }

    canvas.attr("width", width);
    canvas.attr("height", height);

    var opts = {
        seed: {
            x: width / 2 - 20,
            color: "rgb(190, 26, 37)",
            scale: 2
        },

        branch: [],
        bloom: {
            num: 1000,
            width: width,
            height: 650,
        },
        footer: {}
    }

    var tree = new Tree(canvas[0], width, height, opts);
    var seed = tree.seed;
    var foot = tree.footer;
    var hold = 1;

    canvas.click(function(e) {
        var offset = canvas.offset(),
            x, y;
        x = e.pageX - offset.left;
        y = e.pageY - offset.top;
        if (seed.hover(x, y)) {
            hold = 0;
            canvas.unbind("click");
            canvas.unbind("mousemove");
            canvas.removeClass('hand');
        }
    }).mousemove(function(e) {
        var offset = canvas.offset(),
            x, y;
        x = e.pageX - offset.left;
        y = e.pageY - offset.top;
        canvas.toggleClass('hand', seed.hover(x, y));
    });

    var seedAnimate = eval(Jscex.compile("async", function() {
        seed.draw();
        while (hold) {
            $await(Jscex.Async.sleep(10));
        }
        while (seed.canScale()) {
            seed.scale(0.95);
            $await(Jscex.Async.sleep(10));
        }
        while (seed.canMove()) {
            seed.move(0, 2);
            foot.draw();
            $await(Jscex.Async.sleep(10));
        }
    }));

    var growAnimate = eval(Jscex.compile("async", function() {
        do {
            tree.grow();
            $await(Jscex.Async.sleep(10));
        } while (tree.canGrow());
    }));

    var flowAnimate = eval(Jscex.compile("async", function() {
        do {
            tree.flower(2);
            $await(Jscex.Async.sleep(50));
        } while (tree.canFlower());
    }));

    var jumpAnimate = eval(Jscex.compile("async", function() {
        var ctx = tree.ctx;
        while (true) {
            tree.ctx.clearRect(0, 0, width, height);
            tree.jump();
            foot.draw();
            $await(Jscex.Async.sleep(25));
        }
    }));

    var runAsync = eval(Jscex.compile("async", function() {
        // $await(seedAnimate());
        // $await(growAnimate());
        $await(flowAnimate());
        // $await(moveAnimate());
        // $await(jumpAnimate());
    }));

    runAsync().start();
})();
