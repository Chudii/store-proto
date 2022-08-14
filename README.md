# Store (NFT Marketplace) Prototype

Given the task of making a prototype for a store for the my second project for PerScholas, I've decided to make a mini marketplace for NFTs. This main objective of the project is to practice & display my experience with CRUD and NodeJS. As of today, NFTs have begun to see a major decline, however the concept of making trades with an aesthetic image to represent the the token has always fascinated me. Hence welcome to...


<p align="center">
   <img src="./public/images/medusa-head-icon.png" width="100px"/>
</p>


### Medusa's Lair
### The world's first reimagined NFT marketplace.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisities 

* NodeJS & NPM
* MongoDB

## Installation

Fork &/or Clone down this repository. You will need `node` installed.
```
git clone https://github.com/Chudii/store-proto.git
```
Then install the NPM packages
```
npm install
```
To Start Server:
```
npm start
```
To Visit App: 
`localhost:3000/api/v1/nfts`

## Built With
* [express](https://www.npmjs.com/package/express) - web framework for Node
* [React](https://reactjs.org/) - library template engine
* [passport](https://www.passportjs.org/) - Simple, unobtrusive authentication for Node.js
* [bcryptjs](https://www.npmjs.com/package/bcryptjs) - password database protection through hashing
* [mongoose](https://mongoosejs.com/) - MongoDB object modeling tool designed to work in an asynchronous environment
* [connect-mongo](https://www.npmjs.com/package/connect-mongo) - MongoDB session store for Connect

## Routes

   VERB 		 | 		  PATH 		 |  	 DESCRIPTION
------------ | ------------- | -------------------
GET | /api/v1/nfts/ | index of NFTs |
GET | /api/v1/nfts/:id | show page for selected NFT |
GET | /api/v1/nfts/new | page to add NFT |
GET | /api/v1/nfts/:id/edit | page to edit an NFT |
GET | /api/v1/nfts/login | login page |
GET | /api/v1/nfts/register | register page |
GET | /api/v1/nfts/profile | profile page |
GET | /api/v1/nfts/logout | logout route |
GET | /api/v1/nfts/:id/receipt | receipt page | 
POST | /api/v1/nfts/login | add login details |
POST | /api/v1/nfts/ | add a NFT |
PUT | /api/v1/nfts/:id | edit/update an NFT |
PUT | /api/v1/nfts/:id/checkout | update NFTs & profile data |
DELETE | /api/v1/nfts/:id | delete an NFT |

## Roadmap

- [x] Add Index & Show Page
- [x] Add New & Edit Page
- [x] Optional: Add Login & Register
- [x] Optional: Add Profile Page
- [x] Optional: Add Checkout Page
- [x] Optional: Add Receipt Page
- [ ] Optional: Add Digital Wallet

## Contact

Chudi Ibida - [LinkedIn](https://www.linkedin.com/in/chudi-ibida/), [GitHub](https://github.com/Chudii/store-proto)


Project Link - [https://github.com/Chudii/store-proto](https://github.com/Chudii/store-proto)

## Acknowledgements

* [Pexels](https://www.pexels.com/) - NFT Images
* [Art Station](https://www.artstation.com/) - NFT Images
