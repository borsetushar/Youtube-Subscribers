          Youtube Subscribers Backend Project
                   
         This Project is a backend Application Project which is creates using Node.js and MongoDb For managing Youtube subscribers. You            can find many API's for retriving the Users data based on the different criteria.

        Features : 

            The API "/subscribers" fetches the list of subscriber with the details.
            The API "/subscribers/names" fetches all the subscribers with only two fiels which are name and subscribedChannel.
            The API "/subscribers/:Id" fetches the Subscriber Details based on the Id.

        Technologies Used : 

            Node.js : JavaScrip Run time for building the server side apps.
            Express.js : Web App framework for creating a server.
            MongoDB : NOSQL Database for storing the client's Data.
            Mongoose : Object data Modling (ODM) Library for mongoDB.
            JavaScript : The Programming language use for Server-side Logic.   
            
         Installation :
          
            01.Clone the Repo : https://github.com/borsetushar/Youtube-Subscribers.git
            02.Navigate to the Project directory : cd youtube-subscribers
            03.Install the dependencies with the npm Install
            04.Configure the MongoDB connection by setting the DATABASE_URL environment variable in a .env file:
               DATABASE_URL=mongodb://0.0.0.0:27017/youtube_subscribers
            05.Create a database : node createDatabase.js   
            06.Start the server : nodemon index.js   
            
         Usage :
         
            01.Make sure the server is running by following the installation instructions.
            02.Use an API testing tool like Postman or cURL to send requests to the available endpoints.
            03.For example, to retrieve all subscribers, send a GET request to http://localhost:3000/subscribers.

            04.Customize the API calls based on your requirements and integrate them into your frontend application or any other system                 that interacts with subscriber data.
            
         API EndPoints : 
         
         Get All Subscribers :
          Endpoint: /subscribers
          Method: GET
          Description: Retrieve a list of all subscribers.
          Response:
          Status Code: 200 (OK)
          Body: An array of subscriber objects, each containing the following properties:
          id: The unique identifier of the subscriber.
          name: The name of the subscriber.
          subscribedChannel: The channel the subscriber has subscribed to.

         Get Subscribers with Name and Subscribed Channel :
          Endpoint: /subscribers/names
          Method: GET
          Description: Fetch a list of subscribers with their name and subscribed channel.
          Response:
          Status Code: 200 (OK)
          Body: An array of subscriber objects, each containing the following properties:
          name: The name of the subscriber.
          subscribedChannel: The channel the subscriber has subscribed to.
          
         Get Subscriber by ID :
          Endpoint: /subscribers/:id
          Method: GET
          Description: Retrieve subscriber details based on their ID.
          Parameters:
          id: The unique identifier of the subscriber.
          Response:
          Status Code: 200 (OK)
          Body: An object representing the subscriber with the following properties:
          id: The unique identifier of the subscriber.
          name: The name of the subscriber.
          subscribedChannel: The channel the subscriber has subscribed to.
