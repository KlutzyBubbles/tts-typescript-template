export function runExamples(): void {
    print('Wait examples')
    let id = Wait.condition(() => {
        print('Wait function done')
    }, () => {
        return true
    })
    print(Wait.condition(() => {
        print('Wait function done')
    }, () => {
        return false
    }, 2, () => {
        print('Timeout function')
    }))
    print(Wait.frames(() => {
        print('Frames 1 function')
    }))
    print(Wait.frames(() => {
        print('Frames 5 function')
    }, 5))
    print(Wait.time(() => {
        print('Time function')
    }, 1))
    print(Wait.time(() => {
        print('Time2  function')
    }, 1, 2))
    print(Wait.stop(id))
    print(Wait.stopAll())
    print('2-----')
}
