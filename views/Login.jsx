const React = require('react')

class Login extends React.Component {
    render() {
        const { message } = this.props

        return (
            <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Medusa's Lair | Login</title>
                <link rel="stylesheet" href="/css/login.css"></link>
                <link rel="shortcut icon" type="image/x-icon" href="/images/medusa-head-icon.png" />
            </head>
            <body background='/images/cave-background.jpg'>
                <div>
                    <header>
                        <a className='loginAnchor' href='/api/v1/nfts/login'>
                            <img className='login-avatar' src='/images/login-avatar.png'></img>
                        </a>
                        <a href='/api/v1/nfts'>
                            <img src='/images/medusa-head.png'></img>
                        </a>
                        <div className="text">
                            <h1>MEDUSA'S LAIR</h1>
                            <h3>The world's first reimagined NFT marketplace.</h3>
                        </div>
                    </header>
                    {(message.length > 0) ? <p className='errorMessage'>{message}</p> : null }
                    <div className="middle">
                        <div className='shop'>
                            <h2>Sign In</h2>
                            <form action='/api/v1/nfts/login' method="POST">
                                Username <input className='inputBars' type='text' name='username' autoComplete='off'/><br/>
                                Password <input className='inputBars' type='password' name='password' autoComplete='off'/><br/>
                                <input className='login' type='submit' name='' value='Sign In'/>
                            </form>
                            <a className='newMember' href='/api/v1/nfts/register'>New Member</a>
                        </div>
                    </div>
                </div>
            </body>
            </html>
        )
    }
}

module.exports = Login