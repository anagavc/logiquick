# LogiQuick Courier Management  Web Application
A courier management web application for a logistics firm using Next.js for the user interface components, Sanity.io as a headless CMS, Tailwind CSS for styling of the components and the Redux Toolkit for state management.

Payments for shipments are processed with Stripe and successful shipments are saved to the database attached with details of the shipment made and a tracking number assigned to the customer to monitor the status of their shipment.

The content for the application is managed by Sanity's headless management system and can be updated from the sanity studio. 

The user has a user panel from were they can track their shipments history and also schedule new shipments

For the icons, the Material UI library icons were used as they have a low build size, the slides on the reviews section were made with the Swiper Js library and the validation of forms are done with the aid of the react-hook-form library.

It is rendered on the server side using Next.js and the token for the logged in users is created and signed using JsonWebToken and the passwords are hashed with the Advanced Encryption Standard provided by the CryptoJs library.`

## Demo

`The link to the live website:`

https://logiquick.vercel.app
## Tech Stack

**Client:** Nextjs, Redux Toolkit, Tailwind CSS, Stripe, Sanity.io

## Features

- Stripe payment processing
- State management with the Redux Toolkit
- Tailwind CSS
- Server Side Rendering with Next
- Authentication using JWT
- Admin & User Login System




## Installation

Make sure you have Node.js installed and then proceed to execute this command in the terminal

```bash
  npm i
```
    
## Environment Variables

Create an account on mongodb.com and create a new cluster, then set the env value of:

```javascript
CONNECTION_URL = to the name of yout atlas database

```

For management of the sessions, set an env variable

```javascript
AUTH_SECRET = any_secret_key_of_your_choice

```


## Usage/Examples

`A courier management solution using stripe for payment processing`
## Screenshots
`The Hero Section`
![header](https://user-images.githubusercontent.com/84836053/183034832-82920166-9bdb-49fe-b5d3-a0b44952ec6c.png)

`The Login Section`
![login](https://user-images.githubusercontent.com/84836053/183034975-c83670d4-7254-4c38-8a95-84118a57ed68.png)


`The Contact Section`
![contact](https://user-images.githubusercontent.com/84836053/183035024-4c91a13a-3f3f-4f2a-9266-98721804f102.png)



`The Staff Page`
![team](https://user-images.githubusercontent.com/84836053/183035109-fe447b74-5d12-4c59-8bb6-c09d46f38356.png)


`The Services section`
![servicesPage](https://user-images.githubusercontent.com/84836053/183035173-6ca98f51-80d6-4e37-bf88-7b137c6d335d.png)


## Contributing

Contributions are highly appreciated!

`Kindly send a pull request and I will review them with immediate effect`

