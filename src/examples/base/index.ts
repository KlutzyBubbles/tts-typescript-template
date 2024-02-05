import { Objects } from "../../utils/constants"

export function runExamples(): void {
    context()
    copyPaste()
    startLuaCoroutine(Global, 'baseExampleCoroutine')
    printToAll('Blue message', stringColorToRGB('Blue'))
    print(`Players seated [${getSeatedPlayers().join(', ')}]`)
    setLookingForPlayers(false)
    runHotkeys()
    broadcastToAll('broadcast to all')
    broadcastToAll('broadcast to all color string', 'Blue')
    broadcastToAll('broadcast to all color', Color(0.5, 0.5, 1, 0.75))
    broadcastToColor('broadcast to white', 'White')
    broadcastToColor('broadcast to white color string', 'White', 'Blue')
    broadcastToColor('broadcast to white color', 'White', Color(1, 1, 1, 0.5))
    log('log message clear')
    log('log message label', 'label')
    log('log message label tag', 'label', 'tag1 tag2')
    print(logString('logstring clear'))
    print(logString('logstring label', 'label'))
    print(logString('logstring label tags', 'label', 'tag1 tag2'))
    print(logString('logstring label tags consise', 'label', 'tag1 tag2', true))
    print(logString('logstring label tags consise display', 'label', 'tag1 tag2', true, true))
    log('nostyle', undefined, 'style')
    logStyle('style', 'Blue')
    log('style blue', undefined, 'style')
    logStyle('style', Color(0, 1, 0))
    log('style green', undefined, 'style')
    logStyle('style', Color(0, 1, 0), '[prefix]')
    log('style prefix', undefined, 'style')
    logStyle('style', Color(0, 1, 0), '[prefix]', '[postfix]')
    log('style pre post fix', undefined, 'style')
    printToAll('all message no color')
    printToAll('all message with color', Color(0, 1, 0))
    printToAll('all message with color string', 'Blue')
    printToColor('color message no color', 'White')
    printToColor('color message with color', 'White', Color(0, 1, 0))
    printToColor('color message with color string', 'White', 'Blue')
    /*
    let val = [promiseExample(true)]
    Promise.all(val).then((value) => {
        print(`Promise done [${value.join(',')}]`)
    }).catch((e) => {
        print(`Error gggg ${e}`)
    })
    */
}

/*
* Promises KIND OF work, but im getting weird behaviour where
* when resolving a promise, the promise also errors with
* "bad argument #1 to 'type' (value expected)"
* might be better to stick to callbacks
async function promiseExample(result: boolean): Promise<void> {
    print('Runing promise test')
    return new Promise((resolve, reject) => {
        Wait.time(() => {
            if (result) {
                return resolve()
            }
            return reject('error')
        }, 1)
    })
}
*/

function runHotkeys(): void {
    print('Adding example hotkey')
    addHotkey('hotkey be cleared', exampleHotkeyFunc, true)
    print(`clearing hotkeys ${clearHotkeys()}`)
    addHotkey('Example hotkey', exampleHotkeyFunc, true)
    print(`showing hotkeys ${showHotkeyConfig()}`)
}

function exampleHotkeyFunc(color: ColorLiteral, hoveredObject: GObject | undefined, pointer: Vector, isKeyUp: boolean): void {
    print(`exampleHotkeyFunc(${color}, ${pointer}, ${isKeyUp})`)
    if (hoveredObject === undefined) {
        print('Hovered object undefined')
    } else {
        print(hoveredObject.name)
    }
}

function waitFor(frames: number) {
    for (let i = 0; i < frames; i++) {
        coroutine.yield(0)
    }
}

(_G as any).baseExampleCoroutine = (): number => {
    print('Base example coroutine')
    runSpawnObject()
    waitFor(4)
    runSpawnObjectData()
    waitFor(4)
    runSpawnObjectJSON()
    return 1
}

function context(): void {
    clearContextMenu()
    addContextMenuItem('Custom Menu Item', contextClicked, true, true)
}

function contextClicked(color: ColorLiteral, position: Vector): void {
    print(`Custom context was clicked by ${color} at ${position}`)
}

function copyPaste(): void {
    let object = getObjectFromGUID(Objects.square) as GObject
    copy([object])
    let pasted = paste({
        position: Vector(0, 5, 0),
        snap_to_grid: false
    })
    for (let obj of pasted) {
        destroyObject(obj)
    }
}

function runSpawnObject(): void {
    print(`Spawning good object`)
    // callback_function overrides callback
    let objects = [spawnObject({
        type: '3DText',
        position: Vector(0, 5, 0),
        rotation: Vector(0, 0, 0),
        scale: Vector(1, 1, 1),
        sound: true,
        snap_to_grid: false,
        callback: 'spawnedObjectGlobal',
        params: {
            test: 'one'
        },
        callback_owner: Global,
        // callback_function: spawnedObject
    }),
    spawnObject({
        type: 'Card',
        position: Vector(0, 5, 0),
        rotation: Vector(0, 0, 0),
        scale: Vector(1, 1, 1),
        sound: true,
        snap_to_grid: false,
        callback_function: spawnedObject
    })]
    Wait.frames(() => {
        // Waiting to see the callback functions run
        for (let obj of objects) {
            destroyObject(obj)
        }
    }, 1)
    /*
    * While it looks like the following will work because of the try catch, the spawnObject function will throw an error that cant be caught
    try {
        print(`Spawning bad object`)
        object = spawnObject({
            type: 'NoExist' as CustomObjectType,
            position: Vector(0, 5, 0),
            rotation: Vector(0, 0, 0),
            scale: Vector(1, 1, 1),
            sound: true,
            snap_to_grid: false,
            callback: 'spawnedObjectGlobal',
            params: {
                test: 'one'
            },
            callback_owner: Global,
            callback_function: spawnedObject
        })
        destroyObject(object)
    } catch (e) {
        print(`This should print because the object type doesnt exist ${e}`)
    }
    */
}

function runSpawnObjectData(): void {
    print(`Spawning data object`)
    let objects = [spawnObjectData({
        data: {
            Name: 'rpg_BEAR',
            Transform: {
                posX: 0,
                posY: 3,
                posZ: 0,
                rotX: 0,
                rotY: 180,
                rotZ: 0,
                scaleX: 2,
                scaleY: 2,
                scaleZ: 2
            },
            ColorDiffuse:{
                r: 0.3,
                g: 0.5,
                b: 0.8
            },
            Locked: true
        },
        callback: 'spawnedObjectGlobal',
        params: {
            test: 'data'
        },
        callback_owner: Global
    }), spawnObjectData({
        data: {
            Name: 'rpg_BEAR',
            Transform: {
                posX: 0,
                posY: 3,
                posZ: 0,
                rotX: 0,
                rotY: 180,
                rotZ: 0,
                scaleX: 2,
                scaleY: 2,
                scaleZ: 2
            },
            ColorDiffuse:{
                r: 0.3,
                g: 0.5,
                b: 0.8
            }
        },
        callback_function: spawnedObject
    })]
    Wait.frames(() => {
        // Waiting to see the callback functions run
        for (let obj of objects) {
            destroyObject(obj)
        }
    }, 1)
}

function runSpawnObjectJSON(): void {
    print(`Spawning json object`)
    let objects = [spawnObjectJSON({
        json: `{
            "Name": "rpg_WYVERN",
            "Transform": {
                "posX": 0,
                "posY": 3,
                "posZ": 0,
                "rotX": 0,
                "rotY": 180,
                "rotZ": 0,
                "scaleX": 2,
                "scaleY": 2,
                "scaleZ": 2
            },
            "ColorDiffuse": {
                "r": 0.3,
                "g": 0.5,
                "b": 0.8
            },
            Locked: true
        }`,
        callback: 'spawnedObjectGlobal',
        params: {
            test: 'data'
        },
        callback_owner: Global
    }), spawnObjectJSON({
        json: `{
            "Name": "rpg_WYVERN",
            "Transform": {
                "posX": 0,
                "posY": 3,
                "posZ": 0,
                "rotX": 0,
                "rotY": 180,
                "rotZ": 0,
                "scaleX": 2,
                "scaleY": 2,
                "scaleZ": 2
            },
            "ColorDiffuse": {
                "r": 0.3,
                "g": 0.5,
                "b": 0.8
            }
        }`,
        callback_function: spawnedObject
    })]
    Wait.frames(() => {
        // Waiting to see the callback functions run
        for (let obj of objects) {
            destroyObject(obj)
        }
    }, 1)
}

function spawnedObject(object: GObject): void {
    print(`Spawned ${object.name}, ${object.locked}`)
}

(_G as any).spawnedObjectGlobal = (object: GObject, params: any): void => {
    print(`Global call Spawned ${object.name}, ${object.locked}, ${params.test}`)
}
