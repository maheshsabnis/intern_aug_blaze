# Working with Microservices with Node.js and Docker

Docker
    - Install Docker Desktop from
        - https://www.docker.io
    - Please create the Docekr ID
        - https://hub.docker.com
# The Docker Image Management
    - Use Docker Commands, to be executed from the COmmand Prompt or Terminal Window (Linux / Mac) or PowerShell Window or Git Bash

    - Login on Docker Hub (Mandatory)
        - docker login
            - USed to connect to https://hub.docker.com to PUSH and PULL images
        - docker logout
            - recommended for the public machine or the laptop which will be shaed across different developers
   - TO list all images currently available on locak machine as well as on the remove repository (https://hub.docker.com)
         - docker images
   - To list all containers currently available, this will list all containers those are running as well as not running
        - docker ps   
   - List only running containers
        - docker ps -a

# Docker commands for creating aka building image
    - docker build . -t [IMAGE-NAME]:[TAG]
        - Command MUST be executed from the path where the 'dockerfile' is present 
            - dockerfile, this is the file that contains all image configurations e.g. Image OS Type, Image Runtime Reuirements, the Dependency Information, Code to Build , Port, application execution command, etc.    
        - . , represent the Current Path from where the dockerfile is loaded and read
        - -t , the switch for applying tag name to iamge, i.e. the unique identification of image with version
        - IMAGE_NAME, the lower case name for the image
    - Run the Docker Image in the container
        - docker run  -p [LOCAL-MACHINE-PORT]:[PORT-EXPOSED-BY-IMAGE]  [IMAGE-NAME]:[TAG] --name [CONTAINER-NAME-THAT-HOST-THE-IMAGE]
            - -p, the switch to map the local machine to port with the port exposed from the container. The container port is defined in 'dockerfile'
            - --name, this is manadaory so that we know which container is created
# Removing the Image
    - Stop the container
        - docker stop [CONTAINER-NAME | CONTAINER-ID]
    - Remove the container
        - docker rm [CONTAINER-NAME | CONTAINER-ID]
    - Remove the image
        - docker rmi [IMAGE-NAME:TAG | IMAGE-ID]

# PUST the IMage on the repository (Docker HUB, AWS Elastic Container Registry [ECR])
    - Login on Repository using 'docker login'
    - Tag the image using the repostory username
        - docker tag [IMAGE-NAME:TAG] [REPOSITOTY-USER-NAME/IMAGE-NAME:TAG]
    - Push the image
        - docker push [REPOSITOTY-USER-NAME/IMAGE-NAME:TAG]
# Pulling the image
    - Login on Repository using 'docker login'
    - Pull the image
        - docker pull    [REPOSITOTY-USER-NAME/IMAGE-NAME:TAG]          


# Creating a Node.js + Express Microservice

1. Add a 'dockerfile' and '.dockerignore' file in the root of the application to be dockerized
    - dockerfile
        - contain all configuration to be added in image
    - .dockerifnore    
        - contains all those settings or path that are not added in image
        - generally the node_modules folder is not copied into the image


# Challanges in Implementation [None of the following is headche of Developer]
1. How to manage multiple Microservices and establish Communicaiton across them?
    - On-Premises
        - Docker Engine with Docker Networking to manage multiple Microservices and communication across them
            - We implement this using 'docker-compose' tool and 'docker-compose.yml'
        - Use the Kubernetese Service
            - deployment.yml and service.yml
            - minikube
            - microk8s (This is alos used for production for middle-scale apps)   
    - On-Cloud
        - Azure Kubernetes Service aka AKS
        - Elastick Kubernetes Service aka EKS
        - Google Kubernetes Service aka GKS 
2. How to design a common gateway for multiple Microservices?
    - Create a gateway using the coding approach
        - express-gateway, a free open-source package to create gateway
            - Good for On-Premises, can be used in cloud but recommended that use the gateway provided by cloud
    - Kubernetes Gateway services
        - ingress
        - istio gateway when using microk8s
    - EKS with API Gateway on AWS                    
3. What about the data persistence for the Microservices?
    - The database must be on the Publically accessible server on premises
        - Please do not use docker images for database for production 
    - For Cloud use
        - RDS with MySQL
        - DynamoDB
4. What about the security?
    - JWT
    - Cloud Security Authentication (Not a reponsibility of developer)
5. What about the failure recovery?
    - Just Create a new IMage in On-Premises
    - For Kubernetes in CLoud create backup servers using configuration