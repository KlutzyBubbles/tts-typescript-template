export function runExamples(): void {
    print('Grid examples')
    print(Grid.type)
    print(Grid.show_lines)
    print(Grid.color)
    print(Grid.opacity)
    print(Grid.thick_lines)
    print(Grid.snapping)
    print(Grid.offsetX)
    print(Grid.offsetY)
    print(Grid.sizeX)
    print(Grid.sizeY)
    Grid.type = 1
    Grid.type = GridType.Rectangles
    Grid.show_lines = true
    Grid.color = Color.BLACK
    // Grid.color = { r: 1, g: 1, b: 1 } // works in lua, but use the next line instead
    Grid.color = Color({ r: 1, g: 1, b: 1 })
    Grid.color = Color([0, 0, 0])
    Grid.thick_lines = false
    Grid.snapping = 1
    Grid.snapping = SnapMethod.Both
    Grid.offsetX = 0
    Grid.offsetY = 0
    Grid.sizeX = 20
    Grid.sizeY = 20
}
