export function runExamples(): void {
    print('Vector examples')
    let vector: Vector = Vector(1, 1, 1)
    vector = Vector([1, 1, 1])
    vector = Vector(Color.Blue)
    vector = Vector(Color.blue)
    vector = Vector(Color.BLUE)
    vector = Vector({
        x: 1,
        y: 1,
        z: 1
    })
    vector = Vector({
        1: 1,
        2: 1,
        3: 1
    })
    vector = Vector.new(1, 1, 1)
    vector = Vector.new([1, 1, 1])
    vector = Vector.new({})
    vector = Vector.new(Color.blue)
    vector = Vector.new(Color.BLUE)
    vector = Vector.new({
        x: 1,
        y: 1,
        z: 1
    })
    vector = Vector.new({
        1: 1,
        2: 1,
        3: 1
    })


    let [x, y, z] = vector.get()
    print(`${x}, ${y}, ${z}`)

    let [anotherA, anotherB, anotherC] = vector.get()
    print(`${anotherA}, ${anotherB}, ${anotherC}`)

    print(vector.copy())

    print(vector.setAt('x', 1))
    print(vector.setAt('y', 1))
    print(vector.setAt('z', 1))
    print(vector.set(undefined, 1, undefined))
    print(vector.set(1, 1, 1))
    print('1-------')

    print(vector.add(Vector([1, 1, 1])))
    print(vector.sub(Vector([1, 1, 1])))
    print(vector.scale(Vector([1, 1, 1])))
    print(vector.scale(1))
    print(vector.clamp(1))
    print('2-------')

    print(vector.normalize())
    print(vector.project(Vector([1, 1, 1])))
    print(vector.projectOnPlane(Vector([1, 1, 1])))
    print(vector.reflect(Vector([1, 1, 1])))
    print(vector.inverse())
    print('3-------')

    print(vector.moveTowards(Vector([1, 1, 1]), 0.5))
    print(vector.rotateTowards(Vector([1, 1, 1]), 45))
    print(vector.rotateTowardsUnit(Vector([1, 1, 1]), 45))
    print(vector.rotateTowardsUnit(Vector([1, 1, 1]).normalize(), 45))
    print('4-------')

    print(vector.rotateOver('x', 45))
    print(vector.rotateOver('y', 45))
    print(vector.rotateOver('z', 45))
    print('5-------')



    print(Vector.min(vector, Vector([1, 1, 1])))
    print(Vector.max(vector, Vector([1, 1, 1])))
    print(Vector.between(vector, Vector([1, 1, 1])))
    print(vector.dot(Vector([1, 1, 1])))
    print(Vector.dot(vector, Vector([1, 1, 1])))
    print('6-------')

    print(vector.magnitude())
    print(Vector.magnitude(Vector([1, 1, 1])))
    print(Vector.magnitude(vector))
    print(vector.sqrMagnitude())
    print(Vector.sqrMagnitude(Vector([1, 1, 1])))
    print(Vector.sqrMagnitude(vector))
    print('7-------')

    print(vector.distance(Vector([1, 1, 1])))
    print(Vector.distance(vector, Vector([1, 1, 1])))
    print(vector.sqrDistance(Vector([1, 1, 1])))
    print(Vector.sqrDistance(vector, Vector([1, 1, 1])))
    print(vector.equals(Vector([1, 1, 1]), 0.5))
    print(Vector.equals(vector, Vector([1, 1, 1]), 0.5))
    print('8-------')

    print(vector.string())
    print(vector.string('prefixer'))
    print(Vector.string(vector))
    print(Vector.string(vector, 'prefixer'))
    print(vector.angle(Vector([1, 1, 1])))
    print(Vector.angle(vector, Vector([1, 1, 1])))
    print('9-------')

    print(vector.cross(Vector([1, 1, 1])))
    print(Vector.cross(vector, Vector([1, 1, 1])))
    print(vector.lerp(Vector([1, 1, 1]), 0.25))
    print(Vector.lerp(vector, Vector([1, 1, 1]), 0.25))
    print(vector.normalized())
    print(Vector.normalized(Vector([1, 1, 1])))
    print(Vector.normalized(vector))
    print('10-------')

    let [orthoA, orthoB, orthoC] = vector.orthoNormalize()
    print(`${orthoA}, ${orthoB}, ${orthoC}`)
    print(vector.orthoNormalize())
    print(vector.orthoNormalize(Vector([1, 1, 1])))
    let [orthoD, orthoE, orthoF] = vector.orthoNormalize()
    print(`${orthoD}, ${orthoE}, ${orthoF}`)
    print(Vector.orthoNormalize(vector))
    print(Vector.orthoNormalize(vector, Vector([1, 1, 1])))
    print(Vector.orthoNormalize(Vector([1, 1, 1])))
    print('11-------')

    print(vector.heading('x'))
    print(vector.heading('y'))
    print(vector.heading('z'))
    print(vector.heading())
    print(Vector.heading(Vector([1, 1, 1]), 'y'))
    print(Vector.heading(vector, 'z'))
    print(Vector.heading(vector))
    print('12-------')
}
