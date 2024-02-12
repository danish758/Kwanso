# Project setup
--> Add .env file in the root folder. Add following line in the env file
    REACT_APP_BASE_URL=https://randomuser.me/api

--> npm install
--> npm start
--> make sure that you are in the root folder.
# Code Structure
<!-- pages -->
--> pages folder contain all the pages in the app. In our case, there are two pages. So it contains two files.
<!-- components -->
--> components folder contains all the components other than pages. For instance, all the components that are used in the users page are placed inside src/components/users folder.
<!-- routing -->
--> App.tsx is the main routing file.
# Libraries Used
--> Some third party libraries are used like MUI,tailwind,axios.
# Users Page
--> Data is fetched using axios. Gender filter and Pagination has been applied.
--> By default, I have set 6 number of users which being fetched at a time. There are a lot pages in the api, only 10 pages are utilized.
--> For loading, Skeleton is used.
# Search
--> There is not any search functionality in the api(backend), so it is added  on client-side. Searches cover user first name, last name, email, cell, or date of birth.
# User Detail/Profile page
--> In user profile page, different information about the user is given. On hover on different icons, coresponding data is shown. It looks quite amazing.





