export function runExamples(): void {
    print('Physics examples')
    print(Physics.play_area)
    Physics.play_area = 0.5
    print(Physics.getGravity())
    print(Physics.setGravity(Vector(0, 1, 0)))
    print(Physics.cast({}))
    print(Physics.cast({
        origin: Vector(0, 0, 0),
        direction: Vector(0, 0, 0),
        type: 1,
        size: Vector(0, 0, 0),
        orientation: Vector(0, 0, 0),
        max_distance: 10,
        debug: false
    }))
    print(Physics.cast({
        origin: Vector(0, 0, 0),
        direction: Vector(0, 0, 0),
        type: CastType.Sphere,
        size: Vector(0, 0, 0),
        orientation: Vector(0, 0, 0),
        max_distance: 10,
        debug: false
    }))
    print('1-----')
}
