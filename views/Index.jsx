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
                    <header>
                        <img src={'/images/medusa-head.png'}></img>
                        <div className="text">
                            <h1>MEDUSA'S LAIR</h1>
                            <h3>The world's first reimagined NFT marketplace.</h3>
                        </div>
                    </header>
                    <div className='navigation'>
                        <nav>
                            <a href={'#'}>LATEST PRODUCTS</a>
                            <a href={'#'}>BRANDS</a>
                            <a href={'#'}>SHOP</a>
                            <a href={'#'}>CREDITS</a>
                        </nav>
                    </div>
                    <div className='shop'>
                        <div className='legend'>
                            <ul>
                                <li>
                                    <strong>SHOP</strong>
                                </li>
                                <li>
                                    <details>
                                        <summary>Category</summary>
                                    </details>
                                </li>
                                <li>
                                    <details>
                                        <summary>Price Range</summary>
                                    </details>
                                </li>
                                <li>
                                    <details>
                                        <summary>Shipping</summary>
                                    </details>
                                </li>
                            </ul>
                        </div>
                        <div className='products'>
                            {nfts.map((nft) => {
                                return (
                                    <div className="product">
                                        <img src={`${nft.img}`}></img>
                                        <h3 className='productName'>
                                            {nft.name}
                                        </h3>
                                        <h3 className='productPrice'>
                                            $25
                                        </h3>
                                        <button className='productButton'>Add to Cart</button>
                                    </div>

                                )
                            })}
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

module.exports = Index