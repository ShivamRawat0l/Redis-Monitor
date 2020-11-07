# Redis-Monitor

> A web visualization redis monitoring program. Performance optimized and very easy to install and deploy, base on Express and sqlite. the monitor data.

Nodejs implementation of https://github.com/NetEaseGame/redis-monitor

## How to Use ?

1. Install npm packages

	> **npm install**

2. Run the Server
	
	> **npm start**

3. start webserver

	> **redis-monitor start**

Then visit [127.0.0.1:3002](http://127.0.0.1:9527/) 

## Why

There are so many redis monitor code in github, why do this?

Because I clone so many program, but all exist difficult, cause by below:

 - My kownleage is pool.
 - The config not easy, I have do many thing to run the code, and I need to rewrite some code on my dev environment.
 - Incompatible versions, I can run to monitor redis 2.6, but not work with 2.8.
 - Start up not easy, some project, I need to run a data collection process, and a web process.
 - Performance Loss, when I open 10 browser tab, the monitor of other projects can exec 10 command per second.


## LICENSE

MIT @hustcc
