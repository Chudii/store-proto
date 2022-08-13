const React = require('react')

class Checkout extends React.Component {
    render() {
        const { nft, user } = this.props
        return (
            <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Medusa's Lair | Checkout</title>
                <link rel="stylesheet" href="/css/show.css"></link>
                <link rel="shortcut icon" type="image/x-icon" href="/images/medusa-head-icon.png" />
            </head>
            <body background='/images/cave-background.jpg'>
                <div>
                    <header>
                        <div className='top-corner'>
                            <a className='loginAnchor' href='/api/v1/nfts/profile'>
                                <h3 className='username'>{user.username}</h3>
                                <img className='login-avatar' src='/images/login-avatar.png'></img>
                            </a>
                        </div>
                        <a href='/api/v1/nfts'>
                            <img src='/images/medusa-head.png'></img>
                        </a>
                        <div className="text">
                            <h1>MEDUSA'S LAIR</h1>
                            <h3>The world's first reimagined NFT marketplace.</h3>
                        </div>
                    </header>
                    <div className="middle">
                        <div className='navigation'>
                            <nav>
                                <a href={'/api/v1/nfts'}>HOME</a>
                                <a href={'/api/v1/nfts/new'}>MINT NFT</a>
                                <a href={'#'}>SHOP</a>
                                <a href={'#'}>CREDITS</a>
                            </nav>
                        </div>
                        <div className='shop'>
                            <div className="product">
                                <img src={`${nft.img}`}></img>
                                <h3 className='productName'>
                                    {nft.name}
                                </h3>
                                <h3 className='productPrice'>
                                    Offer Price per Stock: ${nft.price}
                                </h3>
                                <h3 className='stock'>
                                    Stock Remaining: {nft.quantity}
                                </h3>
                                <div className='buttons'>
                                    <h3>Quantity: </h3>
                                    <form action={`/api/v1/nfts/${nft.id}/checkout?_method=PUT`} method='POST'>
                                        <input className='inputBars' name="quantity" type='number' min={0} max={nft.quantity}/>
                                        <div className='buttonDiv'>
                                            <button type='submit' className='productButton' name=''>Purchase Stocks</button>
                                        </div>
                                    </form>
                                    
                                    
                                    
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className='footer'>
                        <div className="col-1">
                            <h3>USEFUL LINKS</h3>
                            <a href='#'>About</a>
                            <a href='#'>Services</a>
                            <a href='#'>Contact</a>
                            <a href='#'>Shop</a>
                            <a href='#'>Blog</a>
                        </div>
                        <div className="col-2">
                            <h3>NEWSLETTER</h3>
                            <form>
                                <input type='text' placeholder='Your Email Address' required/>
                                <br></br>
                                <button type='submit'>SUBSCRIBE NOW</button>
                            </form>
                        </div>
                        <div className="col-3">
                            <h3>CONTACT</h3>
                            <p>Newark, NJ</p>
                            <p>chudiibida3@gmail.com</p>
                            <a href='https://linkedin.com/in/chudi-ibida'>My LinkedIn</a>
                            <a href='https://github.com/Chudii'>My Github</a>
                        </div>
                    </div>
                </div>
            </body>
            </html>
        )
    }
}

module.exports = Checkout
