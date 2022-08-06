const React = require('react')

class New extends React.Component {
    render() {
        return (
            <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>NFT Index</title>
                <link rel="stylesheet" href="/css/index.css"></link>
            </head>
            <body>
                <div>
                    <h1>New NFT</h1>
                    <form action="/api/v1/nfts" method="POST">
                        Name: <input type="text" name="name"/>
                        Quantity: <input type="number" name="quantity"/>
                        Image: <input type="text" name="img"/>
                        <input type="submit" name="" value="Add NFT"/>
                    </form>
                </div>
            </body>
            </html>
        )
    }
}

module.exports = New