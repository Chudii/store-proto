// app.get('/api/v1/nfts/change-password', (req, res) => {
//     res.render('Change-Pasword')
// })

// // USER ROUTE
// app.post('/api/v1/nfts/change-password', async (req, res) => {
//     const { token, newPassword: plainTextPassword } = req.body

//     if (!plainTextPassword || typeof plainTextPassword !== 'string') {
//         return res.json({ status: 'error', error: 'Invalid Password' })
//     }

//     if (plainTextPassword.length < 6) {
//         return res.json({ status: 'error', error: 'Password is too small. Should be at least 6 characters' })
//     }

//     try {
//         const user = jwt.verify(token, secret)
//         const _id = user.id
        
//         const password = await bcrypt.hash(plainTextPassword, 10)

//         await User.updateOne(
//             { _id },
//             {
//                 $set: { password }
//             }
//         )
//         res.json({ status: 'ok' })
//     } catch (error) {
//         res.json({ status: 'error ', error: 'Some error'})
//     }
    

//     res.json({ status: 'ok' })
// })


