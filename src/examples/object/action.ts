import { Objects } from "../../utils/constants"

export function runActionChecks(): void {
    let object = getObjectFromGUID(Objects.square)
    let bag = getObjectFromGUID(Objects.bag)
    let deck = getObjectFromGUID(Objects.deck)
    let dice = getObjectFromGUID(Objects.dice)
    let book = getObjectFromGUID(Objects.pdf)
    if (object !== undefined
        && bag !== undefined
        && deck !== undefined
        && book !== undefined
        && dice !== undefined) {
        print('Action functions')
        spawnObject({
            type: 'Card',
            position: Vector(0, 5, 0),
            rotation: Vector(0, 0, 0),
            scale: Vector(1, 1, 1),
            sound: true,
            snap_to_grid: false,
            callback_function: (spawned: GObject) => {
                print(object?.addAttachment(spawned))
                print(object?.removeAttachment(0))
            }
        })
        print(object.addContextMenuItem('label item', (color: ColorLiteral, pos: Vector, object: GObject) => {
            print(`context clicked by ${color}, ${pos}, ${object.guid}`)
            object.clearContextMenu()
        }))
        spawnObject({
            type: 'Card',
            position: Vector(0, 5, 0),
            rotation: Vector(0, 0, 0),
            scale: Vector(1, 1, 1),
            sound: true,
            snap_to_grid: false,
            callback_function: (spawned: GObject) => {
                print(spawned.addToPlayerSelection('White'))
                Wait.frames(() => {
                    spawned.destruct()
                }, 2)
            }
        })
        spawnObject({
            type: 'Card',
            position: Vector(0, 5, 0),
            rotation: Vector(0, 0, 0),
            scale: Vector(1, 1, 1),
            sound: true,
            snap_to_grid: false,
            callback_function: (spawned: GObject) => {
                Wait.frames(() => {
                    let objects = [
                        spawned.clone({}),
                        spawned.clone({
                            position: Vector(0, 5, 0),
                            snap_to_grid: false,
                            callback: 'clonedObjectGlobal',
                            params: {
                                test: 'one'
                            },
                            callback_owner: Global
                        }),
                        spawned.clone({
                            position: Vector(0, 5, 0),
                            snap_to_grid: false,
                            callback_function: clonedObject
                        })
                    ]
                    Wait.frames(() => {
                        // Waiting to see the callback functions run
                        for (let obj of objects) {
                            destroyObject(obj)
                        }
                    }, 2)
                }, 1)
            }
        })
        print('1----')
        print(deck.deal(1))
        print(deck.deal(1, 'Green'))
        print(deck.deal(1, 'Green', 1))
        // Having weird issues with this, i think its just tabletop simulator but the typing is correct
        // print(deck.dealToColorWithOffset(Vector(-2, 0, 5), true, 'White'))
        print(deck.cut())
        print(deck.cut(2))
        print('2----')
        print(object.destroyAttachment(0))
        print(object.destroyAttachments())
        print(object.drop())
        print(object.flip())
        print('3----')
        print(object.highlightOff('White'))
        print(object.highlightOn('Blue'))
        print(object.highlightOn('White', 5))
        print('4----')
        print(object.jointTo(bag, {
            type: 'Fixed'
        }))
        print(object.jointTo(bag, {
            type: 'Spring'
        }))
        print(object.jointTo(bag, {
            type: 'Hinge'
        }))
        print(object.jointTo(bag, {
            type: 'Spring',
            collision: true,
            break_force: 1000,
            break_torque: 1000,
            spring: 50,
            damper: 0.1,
            max_distance: 10,
            min_distance: 1
        }))
        print(object.jointTo(bag, {
            type: 'Hinge',
            collision: true,
            break_force: 1000,
            axis: Vector(1, 1, 1),
            anchor: Vector(1, 1, 1),
            break_torque: 1000,
            motor_force: 100,
            motor_velocity: 10,
            motor_free_spin: true
        }))
        print('5----')
        spawnObject({
            type: 'Card',
            position: Vector(0, 5, 0),
            rotation: Vector(0, 0, 0),
            scale: Vector(1, 1, 1),
            sound: true,
            snap_to_grid: false,
            callback_function: (spawned: GObject) => {
                print(`Put object ${bag?.putObject(spawned)}`)
            }
        })
        print(object.randomize())
        print(object.randomize('White'))
        print(object.unregisterCollisions())
        print(object.registerCollisions(true))
        print(object.registerCollisions())
        print('6----')
        print(dice.reload())
        print(object.removeFromPlayerSelection('White'))
        print(object.reset())
        print(object.roll())
        print(dice.roll())
        print('7----')
        print(object.shuffle())
        print(bag.shuffle())
        print(object.shuffleStates())
        print(book.shuffleStates())
        print('8----')
        print(object.split())
        print(object.split(2))
        print(object.spread())
        print(object.spread(5))
        print('9----')
        print(object.takeObject())
        print(object.takeObject({}))
        print(object.takeObject({
            position: Vector(0, 5, 0),
            rotation: Vector(0, 0, 0),
            flip: true,
            // guid: 'test', Only guid or index, not both
            index: 0,
            top: true,
            smooth: true,
            callback_function: (spawned: GObject) => {
                print(spawned.addToPlayerSelection('White'))
                Wait.frames(() => {
                    spawned.destruct()
                }, 2)
            }
        }))
        print(object.takeObject({
            position: Vector(0, 5, 0),
            rotation: Vector(0, 0, 0),
            flip: true,
            // guid: 'test', Only guid or index, not both
            index: 0,
            top: true,
            smooth: true,
            callback: 'takeObjectGlobal',
            params: {
                test: 'one'
            },
            callback_owner: Global
        }))
    }
}

function clonedObject(object: GObject): void {
    print(`cloned ${object.name}, ${object.locked}`)
}

(_G as any).clonedObjectGlobal = (object: GObject, params: any): void => {
    print(`Global call cloned ${object.name}, ${object.locked}, ${params.test}`)
}

(_G as any).takeObjectGlobal = (object: GObject, params: any): void => {
    print(`Global call taken ${object.name}, ${object.locked}, ${params.test}`)
    object.destruct()
}