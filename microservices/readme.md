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


