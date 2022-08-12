const React = require('react')

class Receipt extends React.Component {
    render() {
        const { nft, user } = this.props
        return (
            <div>
                It Works! {user.username}
                <img src={nft.img}></img>
            </div>
        )
    }
}

module.exports = Receipt