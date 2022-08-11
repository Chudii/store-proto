const React = require('react')

class Register extends React.Component {
    render() {
        return (
            <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>NFT Index</title>
                <link rel="stylesheet" href="/css/login.css"></link>
            </head>
            <body background='/images/cave-background.jpg'>
                <div>
                    <header>
                        <div className='top-corner'>
                            <a className='loginAnchor' href='/api/v1/nfts/profile'>
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
                        <div className='shop'>
                            <h2>Create Account</h2>
                            <form action='/api/v1/nfts/register' method="POST">
                                Username <input className='inputBars' type='text' name='username' autoComplete='off'/><br/>
                                Password <input className='inputBars' type='password' name='password' autoComplete='off'/><br/>
                                <input className='register' type='submit' name='' value='Sign Up'/>
                            </form>
                        </div>
                    </div>
                </div>
            </body>
            </html>
        )
    }
}

module.exports = Register