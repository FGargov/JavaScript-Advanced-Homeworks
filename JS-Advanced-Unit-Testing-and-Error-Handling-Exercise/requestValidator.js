function validateRequest(request) {
    const validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    const uriPattern = /^[A-Za-z0-9.]+$/;

    if (!request.hasOwnProperty('method') || !validMethods.includes(request.method)) {
        throw new Error('Invalid request header: Invalid Method');
    }

    if (!request.hasOwnProperty('uri') || (request.uri === '' || request.uri.match(uriPattern) === null)) {
        throw new Error('Invalid request header: Invalid URI');
    }

    if (!request.hasOwnProperty('version') || !validVersions.includes(request.version)) {
        throw new Error('Invalid request header: Invalid Version');
    }

    if (!request.hasOwnProperty('message') || /[<>'"&\\]/.test(request.message)) {
        throw new Error('Invalid request header: Invalid Message');
    }

    return request;
}

try {
    const request1 = {
        method: 'GET',
        uri: 'svn.public.catalog',
        version: 'HTTP/1.1',
        message: ''
    };

    console.log(validateRequest(request1));

    const request2 = {
        method: 'OPTIONS',
        uri: 'git.master',
        version: 'HTTP/1.1',
        message: '-recursive'
    };

    console.log(validateRequest(request2));

    const request3 = {
        method: 'POST',
        uri: 'home.bash',
        message: 'rm -rf /*'
    };

    console.log(validateRequest(request3));
} catch (error) {
    console.log(error.message);
}
