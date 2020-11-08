
# Redis-Monitor

> A web visualization redis monitoring program. Performance optimized and very easy to install and deploy, base on Express and sqlite. the monitor data.

Nodejs implementation of https://github.com/NetEaseGame/redis-monitor

## How to Use ?

1. Install npm packages

	> **npm install**

2. Run the Server
	
	> **npm start**

Then visit [127.0.0.1:3002/](http://127.0.0.1:3002/) 



## CONTRIBUTE 

### DIRECTORY 

	/src

   > - /middleware : Contains the files which contains the nessecay middlewares for the project
   > 
   > - /model  : Contains the database initialization , queries.
   > 
   > - /model/store : Contains the SQLLITE database file
   > 
   > - /redis :  Contains the file to manage the redis server running 
   > 
   > - /static : [FrontEnd] Contains Reactjs files which needs to be bundled
   > 
   > - /template : [FrontEnd] Contains the HTML files in which React bundle is linked
   > 
   > - /utils : Contains the Utility functions to prevent writing redundant code

### FILES 

    /src
> - /app.js: Contains the code for endpoints and express server
> - /middleware/cache.js : Contains the code for maintaining cache middleware
> 
> - /middleware/timelog.js : Contains the code to count the ms an endpoint takes to finish
> 
> - /model/database.js  : Contains the code for initializing the sqllite database.
> 
> - /model/query.js : Contains the code to run queries on SQLLITE database file
> 
> - /redis/monitor.js :  Contains the code to return the info data from redis server
> 



 
## LICENSE

MIT 


