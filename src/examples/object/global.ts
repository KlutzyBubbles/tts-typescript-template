import { Objects } from "../../utils/constants"

export function runGlobalChecks(): void {
    let object = getObjectFromGUID(Objects.square)
    let chip = getObjectFromGUID(Objects.chip)
    if (object !== undefined
        && chip !== undefined) {
        print('Global functions')

        let decals: AddDecalParameters[] = [{
            name: "API Icon",
            url: "https://api.tabletopsimulator.com/img/TSIcon.png",
            position: Vector(0, 5, 0),
            rotation: Vector(90, 0, 0),
            scale: Vector(1, 1, 1),
        }, {
            name: "API Icon",
            url: "https://api.tabletopsimulator.com/img/TSIcon.png"
        }]
        print(object.addDecal(decals[0]))
        print(object.addDecal(decals[1]))
        print('1----')
        print(object.call('redSquareFunc'))
        print(object.call('redSquareFunc', {
            value: 'test value'
        }))
        print(object.getDecals())
        print('2----')
        // print(object.getLuaScript()) // just floods console
        print(object.getSnapPoints())
        print(object.getTable('table'))
        print(object.getVar('var'))
        print(object.setTable('table', { test: 'table' }))
        print(object.setVar('var', 6))
        print(object.getTable('table'))
        print(object.getVar('var'))
        print('3----')
        print(object.getVectorLines())
        print(object.setDecals(decals))
        print(chip.setLuaScript(''))
        let snapPoints: SnapPoint[] = [{}, {
            position: Vector(5, 2, 5)
        }, {
            position: Vector(5, 2, 5),
            rotation: Vector(0, 180, 0),
            rotation_snap: true
        }, {
            position: Vector(-3, 2, 0),
            rotation: Vector(0, 45, 0),
            rotation_snap: true,
            tags: ['meeple']
        }]
        print(object.setSnapPoints(snapPoints))
        let vectorLines: VectorLineParameter[] = [{
            points: [
                Vector(5, 1, 5),
                Vector(-5, 1, -5)
            ],
            color: Color(1, 1, 1),
            thickness: 0.5,
            rotation: Vector(0, 0, 0)
        }, {
            points: [
                Vector(-5, 1, 5),
                Vector(5, 1, -5)
            ],
            color: Color(0, 0, 0),
            thickness: 0.5,
            rotation: Vector(0, 0, 0)
        }, {
            points: [
                Vector(10, 5, 10),
                Vector(-10, 5, -10)
            ],
        }, {
            points: [
                Vector(-10, 5, 10),
                Vector(10, 5, -10)
            ],
        }]
        print(object.setVectorLines(vectorLines))
        print('4----')
        
        print(Global.addDecal(decals[0]))
        print(Global.addDecal(decals[1]))
        print('5----')
        print(Global.call('globalFunc'))
        print(Global.call('globalFunc', {
            value: 'test value'
        }))
        print(Global.getDecals())
        // print(Global.getLuaScript()) // just floods console
        print(Global.getSnapPoints())
        print('6----')
        print(Global.getTable('table'))
        print(Global.getVar('var'))
        print(Global.setTable('table', { test: 'table' }))
        print(Global.setVar('var', 6))
        print(Global.getTable('table'))
        print(Global.getVar('var'))
        print('7----')
        print(Global.getVectorLines())
        print(Global.setDecals(decals))
        // print(Global.setLuaScript('')) // Dont actually run this lmao, just to see syntax
        print(Global.setSnapPoints(snapPoints))
        print(Global.setVectorLines(vectorLines))
    }
}