export function runExamples(): void {
    let color: Color = Color(1, 1, 1)
    color = Color(1, 1, 1, 0)
    color = Color([1, 1, 1])
    color = Color([1, 1, 1, 0])
    color = Color(Color.Blue)
    color = Color(Color.blue)
    color = Color(Color.BLUE)
    color = Color({
        r: 1,
        g: 1,
        b: 1
    })
    color = Color({
        "1": 1,
        "2": 1,
        "3": 1
    })
    color = Color({
        r: 1,
        g: 1,
        b: 1,
        a: 0
    })
    color = Color({
        "1": 1,
        "2": 1,
        "3": 1,
        "4": 0
    })
    color = Color.new(1, 1, 1)
    color = Color.new(1, 1, 1, 0)
    color = Color.new([1, 1, 1])
    color = Color.new([1, 1, 1, 0])
    color = Color.new(Color.Blue)
    color = Color.new(Color.blue)
    color = Color.new(Color.BLUE)
    color = Color.new({
        r: 1,
        g: 1,
        b: 1
    })
    color = Color.new({
        "1": 1,
        "2": 1,
        "3": 1
    })
    color = Color.new({
        r: 1,
        g: 1,
        b: 1,
        a: 0
    })
    color = Color.new({
        "1": 1,
        "2": 1,
        "3": 1,
        "4": 0
    })
    color = Color.fromString('Blue')
    color = Color.fromString('blue')
    color = Color.fromString('BLUE')
    color = Color.Blue
    color = Color.BLUE
    color = Color.blue
    color.setAt('r', 1)
    color.setAt('g', 1)
    color.setAt('b', 1)
    color.setAt('a', 0)
    // color.setAt('s', 0)
    color.setAt(1, 1)
    color.setAt(2, 1)
    color.setAt(3, 1)
    color.setAt(4, 0)
    // color.setAt(5, 0)
    color.set(1, 1, 1)
    color.set(1, 1, 1, 0)
    // color.set(1, 1)
    let [r, g, b, a] = color.get()
    print(`${r}, ${g}, ${b}, ${a}`)
    let [anotherA, anotherB, anotherC, anotherD] = color.get()
    print(`${anotherA}, ${anotherB}, ${anotherC}, ${anotherD}`)
    print('1--------')
    color = color.copy()
    print(color.toHex())
    print(color.toHex(true))
    print(color.toString())
    print(color.toString(0.3))
    print(color.equals(Color.white))
    print(color === Color.white)
    print(color.equals(Color.Blue, 0.5))
    print(color.lerp(Color.Black, 0.5))
    print(color.dump())
    print(color.dump('prefixer'))
    print(Color.dump(color))
    print(Color.dump(color, 'prefixer'))
    print(Color.list.length)
    print(Color.Add('TestColor', Color(0.69, 0.69, 0.69, 0.69)))
    print(Color.dump(Color.TestColor ?? Color.White))
    print(Color.noexist)
}
