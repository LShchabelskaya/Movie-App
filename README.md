## Getting Started with API

This project requires to be registered on Movie API: https://www.themoviedb.org/.
After your registration is done you will get a specific API key.
It should be used as shown in the .env-sample file to display all the data.

## Project description

The app starts from the Sign Up page for new users' registration.
A simple form with important data validation is available here:

<img width="465" alt="sign_up_page" src="https://user-images.githubusercontent.com/89996418/206004312-255f14f2-6a0a-40c3-99b7-cb1a8a7208ea.png">

After signing up the Login form will be available.
It should be filled with a username/password.
The password will be saved to the Local Storage to allow you access to the All Movies page.

<img width="456" alt="log_in_page" src="https://user-images.githubusercontent.com/89996418/206006053-14940bf9-ad37-498a-9ed3-b548c1be3d7f.png">

Here the main page is:

<img width="672" alt="all_movies_page" src="https://user-images.githubusercontent.com/89996418/206006277-cd4878ce-4e01-4a5d-a140-a94c685326c8.png">

Search by name, filters by language & genre and pagination are available here as well:

<img width="671" alt="search_by_name" src="https://user-images.githubusercontent.com/89996418/206006766-a02a1365-6c44-4e79-8f0a-e21c5673157f.png">
<img width="663" alt="filters" src="https://user-images.githubusercontent.com/89996418/206006791-6e2ce691-aeda-4a57-b443-3793575f283f.png">

Сlicking on a specific movie will display a movie card with 2 options: add to favorites or go back to the movie list:

<img width="518" alt="movie_card_page" src="https://user-images.githubusercontent.com/89996418/206007139-324fa03b-fc98-463f-8bbe-682910deb25e.png">

The list of favorite movies is available on the main page by clicking the button 'Check your favorites':

<img width="635" alt="favorites_page" src="https://user-images.githubusercontent.com/89996418/206007540-603fa9b4-916c-4cd2-9f26-5741ea4e1c8a.png">

And for unidentified routes the Not Found page will be shown:

<img width="412" alt="not_found_page" src="https://user-images.githubusercontent.com/89996418/206007914-8082c7c0-8296-4980-970e-37b812ba57ef.png">


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
