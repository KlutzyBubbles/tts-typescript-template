export function runExamples(): void {
    print('Timer examples')
    print(Timer.create({
        identifier: 'timer1',
        function_name: 'timerGlobalFunc'
    }))
    print(Timer.create({
        identifier: 'timer2',
        function_name: 'timerGlobalFunc',
        function_owner: Global,
        parameters: {
            test: 'test value'
        },
        delay: 0,
        repetitions: 1
    }))
    print(Timer.create({
        identifier: 'timerdestroy',
        function_name: 'timerGlobalFunc'
    }))
    print(Timer.destroy('timerdestroy'))
    print('1-----')
}

(_G as any).timerGlobalFunc = (params?: { test?: string }) => {
    print(`Timer function ${params?.test}`)
}

