
Report: Building a CRUD REST API CA

In this CA, I have successfully completed a coding project aimed at creating and hosting a functional RESTful API. The implementation involved utilizing MongoDB as the API database and Next.js as the framework to build and deploy the RESTful API. The primary focus was on implementing CRUD (Create, Read, Update, Delete) operations to provide valuable practical experience.

The objective of this assignment was to equip students with practical skills in developing their backend API, fostering a deeper understanding of backend technologies commonly used in full-stack web development. The chosen technologies for this project were MongoDB as the database and Next.js as the framework for building and hosting the API.

Technologies Used:

I chose MongoDB because I had previously used it in a personal project, giving me some familiarity with its functionality. The project was based on a tutorial found on YouTube. In the code, you will see many custom-made Tailwind CSS classes that were initially created in the tutorial. I continued building upon them, making the project my own for the CA. I prefer using MongoDB because it is easy to navigate through the website, and there are many tutorials available on how to use it.

I have two tables in my database, one for posts and one for users. User authentication is handled through Google and NextAuth Google Auth, connected to MongoDB. Similarly, for posts, users can post, edit, and delete posts, all connected with the database. Occasionally, the database shuts down due to inactivity, but restarting it resolves the issue, though it was confusing to work with at times.

Next.js:

NextAuth makes it easier to work with authentication, and Google Auth is good to understand and work with. Similarly, MongoDB has many tutorials and a wealth of information available if you encounter any issues. You can install it directly through the terminal, and it follows a plug-and-play mentality.

I believe MongoDB can be used for much more than CRUD, but I haven't delved into that yet. For CRUD operations, it is very efficient, making it easy to organize tables, create API keys, and, of course, ensuring security.

CRUD Operations:

Create (POST): The API allows the creation of new records by sending a POST request with the required data. MongoDB is used to store the newly created records.

Read (GET): Read operations were implemented to retrieve data from the MongoDB database. Different endpoints were created to fetch all records or a specific record based on parameters.

Update (PUT): Updating or editing existing records was facilitated through the implementation of PUT requests. Users could modify specific fields or update the entire record as needed.

Delete (DELETE): The API supports the deletion of records using DELETE requests. This operation removes the specified record from the MongoDB database.

Challenges and Solutions:

Many different challenges were encountered during the development process, such as handling data validation and ensuring secure API endpoints. During the deployment phase, I found it frustrating to implement the correct endpoints into the deployed Vercel app for authentication to work correctly. I also discovered that using MongoDB with authentication and CRUD together is much more effective, especially for operations like edit (PUT) and delete (DELETE) that require user identification.
