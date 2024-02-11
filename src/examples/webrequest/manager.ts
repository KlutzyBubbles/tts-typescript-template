export function runManagerChecks(): void {
    print('Manager checks')
    WebRequest.custom('https://httpbin.org/image/jpeg', 'GET', true, 'data?', {}, (_request) => {
        print('Get 1')
    })
    print('1----')
    WebRequest.get('https://httpbin.org/get', (_request) => {
        print('Get 2')
    })
    print('2----')
    WebRequest.delete('https://httpbin.org/delete', (_request) => {
        print('Delete 1')
    })
    print('3----')
    WebRequest.head('https://httpbin.org/image/jpeg', (_request) => {
        print('Head 1')
    })
    print('4----')
    WebRequest.post('https://httpbin.org/post', {
        number: 1,
        string: 'string',
        boolean: false
    }, (request) => {
        print('Post 1')
        print(request.response_code)
        print(request.text)
    })
    print('5----')
    WebRequest.put('https://httpbin.org/put', 'data to put', (_request) => {
        print('Put 1')
    })
    print('6----')
}
