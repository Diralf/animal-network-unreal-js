/// <reference path="typings/ue.d.ts">/>
// ; typing info for auto-completion in Visual Studio Code

"use strict"

function main() {
    // create a new actor
    // ; new ActorClass(world{World}, location{Vector}, rotation{Rotator})
    let actor = new TextRenderActor(GWorld,{X:300,Y:300, Z:300},{Yaw:180});

    // initialie its text render component
    actor.TextRender.SetHorizontalAlignment('EHTA_Center');
    actor.TextRender.SetText('Hello World 1');

    // clean up the mess
    return function () {
        actor.DestroyActor()
    }
}

// bootstrap to initiate live-reloading dev env.
try {
    module.exports = () => {
        let cleanup = null

        // wait for map to be loaded.
        process.nextTick(() => cleanup = main());

        // live-reloadable function should return its cleanup function
        return () => cleanup()
    }
}
catch (e) {
    require('bootstrap')('helloWorld')
}