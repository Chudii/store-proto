const React = require('react')

class Receipt extends React.Component {
    render() {
        const { nft, user } = this.props
        const today = new Date()

        return (
            <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>NFT Index</title>
                <link rel="stylesheet" href="/css/receipt.css"></link>
            </head>
            <body background='/images/cave-background.jpg'>
                <div className="receipt">
                    <div className='row'>
                        <div className='left'>
                            <img src='/images/medusa-head.png'></img>
                            <h1>MEDUSA'S LAIR</h1>
                        </div>
                        <div className='right'>
                            <p>NFT Voucher #: srhjkbfguALSdgjkbSJd</p>
                            <p>Created: {`${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`}</p>
                            <p>Date User Joined: {`${user.joined.getMonth() + 1}/${user.joined.getDate()}/${user.joined.getFullYear()}`}</p> 
                        </div>
                    </div>
                    <div className='row'>
                        <div className='left'>
                            <p>Fulfiled by Medusa's Lair</p>
                            <p>My Receipt</p>
                            <p>Single Payment</p>
                        </div>
                        <div className='right'>
                            <p>ML Corp.</p>
                            <p>{user.username}</p>
                            <p>MedusasLair@gmail.com</p>
                        </div>
                    </div>
                    <div className='row label'>
                        <h4>Payment Method</h4>
                        <h4>Price</h4>
                    </div>
                    <div className='row'>
                        <p>USD</p>
                        <p>{nft.price} USD per Stock</p>
                    </div>
                    <div className='row label'>
                        <h4>Item</h4>
                        <h4>Total Price</h4>
                    </div>
                    <div className='row'>
                        <p>{nft.name} ({user.itemAmount[(user.itemAmount.length - 1)].quantity})</p>
                        <p>{nft.price * user.itemAmount[(user.itemAmount.length - 1)].quantity} USD</p>
                    </div>
                    <a href='/api/v1/nfts'>
                        <button>Return Home</button>
                    </a>
                    
                </div>
            </body>
            </html>
        )
    }
}

module.exports = Receipt