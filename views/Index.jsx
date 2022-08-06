const React = require('react')

class Index extends React.Component {
    render() {
        const { nfts } = this.props

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
                    {nfts.map((nft) => {
                        return (
                            <img src={`${nft.img}`}></img>
                        )
                    })}
                </div>
            </body>
            </html>
        )
    }
}

module.exports = Index