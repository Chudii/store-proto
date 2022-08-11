const React = require('react')

class Profile extends React.Component {
    render() {
        const { user } = this.props

        return (
            <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>NFT Index</title>
                <link rel="stylesheet" href="/css/profile.css"></link>
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
                            <div className='profile'>
                                <h3 className='username'>
                                    Username: {user.username}
                                </h3>
                                <h3 className='joined'>
                                    Date Joined: {`${user.joined.getMonth() + 1}/${user.joined.getDate()}/${user.joined.getFullYear()}`}
                                </h3>
                                <h3 className='purchased'>
                                    Purchased NFTs: 
                                </h3>
                            </div>
                            <div className='buttons'>
                                <a href='/api/v1/nfts/logout'><button>Logout</button></a>
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

module.exports = Profile