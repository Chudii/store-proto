# Store (NFT Marketplace) Prototype

Given the task of making a prototype for a store for the my second project for PerScholas, I've decided to make a mini marketplace for NFTs. This main objective of the project is to practice & display my experience with CRUD and NodeJS. As of today, NFTs have begun to see a major decline, however the concept of making trades with an aesthetic image to represent the the token has always fascinated me. Hence welcome to...


<p align="center">
   <img src="./public/images/medusa-head-icon.png" width="100px"/>
</p>


### Medusa's Lair
### The world's first reimagined NFT marketplace.

---

## User Login Page

[![Medusa's Lair](/public/images/medusas-lair-login.jpg)](https://youtu.be/Ss897seugBs)

### CLICK the image above to watch a video on how the site works & looks. 

---

DISCLAIMER: The lighting in the video is a bit off, but I will show images below so you can get a better visualization of what the site looks like. (& I highly recommend you clone and check it out firsthand!)

## NFT Index Page

![Index](/public/images/medusas-lair-index.jpg)

## NFT Show Page

![Show](/public/images/medusas-lair-show.jpg)

## User Profile Page

![Profile](/public/images/medusas-lair-profile.jpg)

## NFT Receipt Page

![Receipt](/public/images/medusas-lair-receipt.jpg)

---

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisities 

[![NodeJs](https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en/)

[![NPM](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/)

[![MongoDB](https://img.shields.io/badge/mongodb-47A248?style=for-the-badge&logo=mongodb&logoColor=white)]()

## Installation

Clone this repository. You will need `node` installed.
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

---

## Want to Contribute? 

(Fork &) Clone this repository. You will need `node` installed.

```
git clone https://github.com/Chudii/store-proto.git
```
Then install the NPM packages
```
npm install
```
Use this command to create a new branch:
```
git checkout -b <insert-your-branch-name>
```
And don't forget after you've made any changes to...
```
git add .
git commit -m '<insert-commit-message>'
git push origin <insert-your-branch-name>
```

---

## Built With
* [express](https://www.npmjs.com/package/express) - web framework for Node
* [React](https://reactjs.org/) - library template engine
* [passport](https://www.passportjs.org/) - Simple, unobtrusive authentication for Node.js
* [bcryptjs](https://www.npmjs.com/package/bcryptjs) - password database protection through hashing
* [mongoose](https://mongoosejs.com/) - MongoDB object modeling tool designed to work in an asynchronous environment
* [connect-mongo](https://www.npmjs.com/package/connect-mongo) - MongoDB session store for Connect

## RESTFUL Routes

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

[![LinkedIn](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/chudi-ibida/)

[![GitHub](https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Chudii)


Project Link - [https://github.com/Chudii/store-proto](https://github.com/Chudii/store-proto)

## Acknowledgements

* [Pexels](https://www.pexels.com/) - NFT Images
* [Art Station](https://www.artstation.com/) - NFT Images
