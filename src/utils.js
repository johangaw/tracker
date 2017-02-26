const send = (method, uri, data) => {
    return new Promise((resolve, reject) => {
        const client = new XMLHttpRequest();
        client.open(method, uri, true);
        client.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
        
        client.onload = function () {
            if (this.status >= 200 && this.status < 300) {
                resolve(JSON.parse(client.response));
            } else {
                reject({
                    status: this.status,
                    statusText: client.statusText
                });
            }
        };
        
        client.onerror = function () {
            reject({
                status: this.status,
                statusText: client.statusText
            });
        };

        client.send(JSON.stringify(data))
    })
}




module.exports = {
    Position : {
        post: pos => {
            return send('POST' ,'/api/v1/positions', pos);
        }
    }
}