# Digital-Resume-Azure                                        -by Sneha Patil
## Introduction:
Cloud Resume is a multiple-step resume project where the main idea revolves around creating an online version of your resume in Azure to get a hands-on practice of the cloud services; that you can use in job interviews as a way to build and discuss your cloud skills. This project is inspired by the Cloud Resume Challenge introduced started by Forrest Brazeal in April 2020. The outcome is to create a 100% Azure-hosted version of your resume and build skills with Azure.
The aim is to build digital cloud resume which can be handy, avoids confusion and saves time. This can be also be easily shared on our social medias which opens up for different opportunities. 

## What have I built?

![build](https://user-images.githubusercontent.com/77928409/147826398-e9f81b93-1855-4058-b112-2a6a202102d8.png)

In this project, I’m going to build my own resume which would be integrated into GitHub and hosted on Microsoft Azure with Blob Storage, Azure Functions and CosmosDB. I will also create my own webpage with HTML and CSS and would develop a CI/CD workflow with GitHub. Finally, at the end would be deploying a static web app with a serverless database. The blob storage, holds my static website (my resume) for which I have used HTML, CSS and JavaScript. The JavaScript is used to implement a visitor counter. Not only will it be used to display that information, but also to call an API, which I have implemented with an Azure function. This Azure function interacts with Azure Cosmos DB, which is the database service used to store the website's visitor counter information. Also, I have used Azure CDN to enable features like HTTPS and custom domain support for my static site that is deployed on Azure blob storage. Finally, for all the CI/CD tooling, I have used GitHub.

Azure Prerequisites:
1)	Azure account: Used to deploy our website and our Azure functions.
2)	.NET Core 3.1 SDK: Cross platform, open source, framework used for Azure functions development.
3)	Azure functions core tools: Used to develop Azure functions locally on my own machine.
4)	Visual Studio Code: Used for both our front-end and back-end programming.
5)	Azure Cli: Used for a set of commands helpful to create and manage Azure resources.
6)	C# extension: Used for tools and support for programming in Cli.


## Section 1:  Building the Frontend

![section1](https://user-images.githubusercontent.com/77928409/147826443-b4ecce1b-4817-4de4-b29c-d9163a1aa155.png)
 
1)	Setting up my version control: I created this GitHub Repository, cloned it on my machine. Cloning it on my machine makes it easy to update my changes on GitHub.
2)	Build HTML and implement counter: On Visual Studio Code, I built the HTML code (attached in the frontend folder- index.html) for my resume and wrote the JavaScript code for the visitor counter (attached in the frontend folder- main.js).  
 
![section1 1](https://user-images.githubusercontent.com/77928409/147826471-c93aaeea-20a6-4fd8-9e74-c40e77b0f57a.png)

![section1 2](https://user-images.githubusercontent.com/77928409/147826503-2994849a-c0d5-410f-9ec5-d899e1f6ce11.png)

3)	Test locally and push changes to GitHub: Test my website locally and then updated the changes on this GitHub Repository. 
For updating the changes, I used commands as follows in Visual Studio (Git Bash Terminal) :

 -	git add -A
 -	git commit -m “Update”
 -	git push


## Section 2:  Building the Backend
 
 ![section2](https://user-images.githubusercontent.com/77928409/147826527-761f1c5a-8646-4e46-aabc-2ce8d700a52d.png)
 
1)	Setting up my Cosmos DB resources: Here first I created a resource group in which I created my Cosmos DB account. Inside the Cosmos DB account, I created a new database which consist of the container and the items. The container has the id and visitor’s counts (number of times, people visited my resume website)  
 
 ![section2 1](https://user-images.githubusercontent.com/77928409/147826560-cb8e4182-659d-47b8-aa53-101c71781e65.png)
 
 ![section2 2](https://user-images.githubusercontent.com/77928409/147826581-1dd41fe3-f8ed-4478-b13a-08613e692d7e.png)

2)	Setting up my Azure Function:  I created Azure Functions inside of Visual Studio Code to interact with our Cosmos DB counter data. Functions has these things called bindings that allow us to connect other resources to our function. So, I connected the Azure Cosmos DB bindings to my newly created function, and then viewed my counter data via the function. (Function code is attached in the backend folder ->api-> Resume.cs)
    
    Steps to create Azure Function in VS Code:
-	Downloaded Azure Functions extension
-	Create new project- chose ‘#C’ for language; ‘.NetCore6’ and HttpTrigger 
-	Named it and gave default function name and did set the access rights as ‘Function’. After this is created it gave this URL below as an output.
 
 ![section2 3](https://user-images.githubusercontent.com/77928409/147826596-96f3f09a-5134-4cd1-87ea-0e468653069a.png)
 
After this is done, I did run the command in my terminal: 

dotnet add package Microsoft.Azure.WebJobs.Extensions.CosmosDB --version 3.0.10 

-	Then, updated local.settings.json file with Primary Connection String in my Azure Cosmos DB account.  (attached in the backend folder ->api-> local.settings.json)
-	 Added a #C class file to describe counter object. (attached in the backend folder ->api-> Counter.cs)
-	Updated Resume.cs function to connect the Counter.cs counter created. 
-	Test locally: Function gets enabled locally and also the counter data in the browser. Further in the main.js I updated the API URL with the functions local URL. Then, ran the function locally. Checked the index.html to make sure whether the counter data can actually be viewed. 


## Section 3: Deploying to Azure

![section3](https://user-images.githubusercontent.com/77928409/147826634-333369e2-8c8a-40af-8ae2-cea829a26967.png)
 
1)	Deploy my Azure Function: Here I deployed Azure Function to Azure, grabbed it’s URL and updated my JavaScript code with it.
 
 ![section3 1](https://user-images.githubusercontent.com/77928409/147826653-349bf76c-e490-4b6b-a04d-c317206469d4.png)
 
After this I also enabled the CORS setting on Azure portal to allow the user to use the wildcard.   

![section3 2](https://user-images.githubusercontent.com/77928409/147826684-08a1ccca-e700-4149-90a7-8ed84006faa6.png)

2)	Deploy to Blob Container: I deployed my static website to my storage blob container. Also, blob storage hosting is extremely affordable and that's pretty ideal when one has a static site, like in my case, my resume. 
Steps to create Azure Blob Storage in VS Code:
-	Downloaded Azure Storage Extension
-	Chose appropriate name, resource group, region and index.html (index document)
-	After getting deployed it popped up the website
-	Added this website URL in CORS to enable the visitor counter on the website
 
3)	Setup Azure CDN: I did setup my own domain from DNS provider. Further created the Azure CDN for HTTPS and custom domain support in the Azure Blob Storage. Finally visited my website via my own domain. I have used Azure CDN for a couple of things in my project. First, it's going to cache the content of my website and this is going to label low latencies to my website from anywhere in the world. Also, it can provision TLS SSL certificates for my website, which would enable HTTPS support. It also allows to map a custom domain for our site. 

![section3 3](https://user-images.githubusercontent.com/77928409/147826732-c256dcc5-0e73-4486-a07a-14ddbe7eecfb.png)

After this is deployed, I again added this my domain URL in the CORS to enable the visitor counter on the website.

**Here I used the concept of caching and purging:**

  i.	Caching is the process of storing copies of files in a cache, or temporary storage location, so that they can be accessed more quickly. 
  
  ii.	Purging is the process of removing cached content before the predetermined expiry date. 
  
  iii.	Purge as part of my CI/CD is a good practice as visitors get most up-to-date assets. 
 
 
 ## Section 4: Building CI/CD Pipeline
 
 ![section4](https://user-images.githubusercontent.com/77928409/147826769-14f0e314-917a-4572-a419-24a3e871383c.png)
 
CI/CD stands for continuous integration and continuous delivery. There are sort of four major areas here. So, Version Control, which in my case, I’m using git and GitHub to track and manage, changes to my code. Then there's Continuous Integration. So once my code is in, a version control, it'll go through a series of tests to validate the code. Then third is Continuous Delivery. Once it's passed those tests, it's placed in an area that it's ready to be pushed to production. Usually, people will have to manually go in and push the change to production. And the last optional step is the Continuous Deployment step, which once it reaches continuous delivery, it can automatically be pushed to production without anyone having to intervene and actually push a button there. 
Before I started with this, I updated all my changes on GitHub by using the git commands.

1)	Create frontend workflow: I created this so that it makes it easy to make changes at the frontend in the future. GitHub workflow is responsible for deploying the frontend of my project. (above file- .github/workflows->frontend.main.yml) I created this ‘.github’ directory using Visual Studio Code. 
I used commands as follows:
-	mkdir .github
-	mkdir workflows
-	touch frontend.main.yml
-	touch backend.main.yml
Further, first thing I did is generated a secret, that I then saved it in my GitHub Repository. For that I used the Azure CLI. 

I ran this command in it:
- az ad sp create-for-rbac --name "Name" --role Contributor --scopes/subscriptions/{SubID}/resourceGroup/{ResourceGroup} –sdk -auth
This provided some JSON and I copied all of that and pasted it in my GitHub Repository settings in Secrets option.
 
 ![section4 1](https://user-images.githubusercontent.com/77928409/147826815-cf1a0a8c-0526-4750-9cc9-4f23e71e7382.png)
 
   Then I wrote the code for the frontend in workflows and updated it on my GitHub Repository. 
   After that, it can be seen in the actions tab on my GitHub that the frontend is deployed successfully. Whatever changes I would make at the frontend later, would be updated      directly on my website after this.
  
 ![section4 2](https://user-images.githubusercontent.com/77928409/147826836-1593a85e-61e9-47ae-8551-379cfec6855b.png)

2)	Implement unit testing: I tested my Azure Functions code as part of its deployment workflow. (tests files are attacked above inside the backend folder)


3)	Create backend workflow: I created this so that it makes it easy to make changes at the backend in the future. GitHub workflow is responsible for deploying the frontend of my project. (above file- .github/workflows->backend.main.yml) Then I wrote the code for the backend in workflows and updated it on my GitHub Repository. After that, it can be seen in the actions tab on my GitHub that the backend is deployed successfully (just as frontend). Whatever changes I would make at the backend later, would be updated directly in my backend files after this. (Right now, it is empty since I have not made any changes at the backend yet)

![section4 3](https://user-images.githubusercontent.com/77928409/147826869-5ab3ed0b-55f1-40dd-bb06-08ea1c76d116.png)

## Conclusion: 
Thus, I successfully made my cloud resume using Azure. This helped me understand about the full-stack software development, version control, infrastructure as code, automation, continuous integration and delivery, cloud services and “serverless”, application security, and networking. 

![fin](https://user-images.githubusercontent.com/77928409/147828372-e1020b0c-8244-48bc-8f8e-c87a7c6ed702.png)

## Thank you.

