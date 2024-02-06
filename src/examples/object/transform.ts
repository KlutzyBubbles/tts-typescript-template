import { Objects } from "../../utils/constants"

export function runTransformChecks(): void {
    let object = getObjectFromGUID(Objects.square)
    if (object !== undefined) {
        print('Transform functions')
        print(object.addForce(Vector(0, 1, 0)))
        //print(object.addForce(Vector(0, 1, 0), ForceType.Acceleration))
        print(object.addForce(Vector(0, 1, 0), 4))
        print(object.addTorque(Vector(0, 1, 0)))
        //print(object.addTorque(Vector(0, 1, 0), ForceType.Acceleration))
        print(object.addTorque(Vector(0, 1, 0), 4))
        print(object.getAngularVelocity())
        print(object.getBounds())
        print(object.getBoundsNormalized())
        print(object.getPosition())
        print(object.getPositionSmooth())
        print(object.getRotation())
        print(object.getRotationSmooth())
        print(object.getScale())
        print(object.getTransformForward())
        print(object.getTransformRight())
        print(object.getTransformUp())
        print(object.getVelocity())
        print(object.getVisualBoundsNormalized())
        print(object.isSmoothMoving())
        print(object.positionToLocal(Vector(1, 1, 1)))
        print(object.positionToWorld(Vector(1, 1, 1)))
        print(object.rotate(Vector(0, 90, 0)))
        print(object.scale(Vector(1, 1, 1)))
        print(object.setAngularVelocity(Vector(0, 0, 0)))
        let pos = object.getPosition()
        let rot = object.getRotation()
        print(object.setPosition(pos))
        print(object.setPositionSmooth(pos))
        print(object.setPositionSmooth(pos, false))
        print(object.setPositionSmooth(pos, false, true))
        print(object.setRotation(rot))
        print(object.setRotationSmooth(rot))
        print(object.setRotationSmooth(rot, false))
        print(object.setRotationSmooth(rot, false, true))
        print(object.setScale(Vector(1, 1, 1)))
        print(object.setVelocity(Vector(0, 0, 0)))
        print(object.translate(Vector(1, 1, 1)))
    }
}