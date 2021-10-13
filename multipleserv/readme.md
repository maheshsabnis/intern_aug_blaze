# managing multiple Microservices on-premises
- Docker-Compose is a tool provided by docker engine for following
    - Validate and Build Images
    - Connect to Docker ENgine to access 
        - Process Space
        - Memory
        - Network Resources
    - This tool is responsible for managing lifecycle of all running images using 'docker-compose up' command
        - This command validate dockerfile, build image, start container, load image into the container, expose port from the container, manage dependencies across images using network e.g. accessing database running in other image     
    - The 'docker-compose down', command used to release all resources occupied by image
- The docker-compose.yml must be at the root level        


# Using Kubernetes

1. Its a Open Source Cluster Manager  for Microservices Based Apps
    - Node: A VM that contains the Microservice Apps using PODs
        - Manage All Pods
        - COntarol Replicas of all Pods using Kubernetes Controllers
    - POD: a Logic Unit of Containers
        - Manage all COntainers and Load Balancing between them
        - Takes an internal IP Address from Node and configure it to each COntainer
        - This internal IP (CLUSTER IP) will be used for communication across containers
        - Each Container provides an Internal Port for communications
            - The POD configures a public port to communicate to the Microservice from client. This public port is provided by the Node to POD 
        - The Public IP (EXTERNAL IP) is assigned by Kubernetes so that the request from outside is accepted
            - Client ---> Uses Public IP to Call the Service 
                - http://[PUBLIC-ADDRESS]:[PUBLIC-PORT]/[URL-PATH]
            - The Node target to the POD using kubernetes apiserver and map the request to the Private IP and  private port of the container inside the pod
            - The COntainer Accepts the request and process it and generate the response     
        - If the Container is down, the request is routed to the Container replica either in same of different POD internally using the Kubernetes Cluster Service    
    - Container: Its is Host for Image
    - Image: A Microservice Executable
2. Important Kubernetes Commands
    - To Get list of nodes
        - kubectl get nodes
    - get list of pods
        - kubectl get pods
            - This commn will list all pods with their names
    - get description of a specific pod
        - You need this if any service is not working as per the expectations
            - kubectl describe pod [POD-NAME]     
    - get list of all microservices currently deployeed
        - kubectl get services    OR kubectl get svc
        - List all services and watch changes e.g. wait for an external ip to be allocated to the service
            - kubectl get svc -w      
    - Creating POD using configuration aka deployment.yml or deployment.yaml, any file name can be allowed
        - kubectl apply -f [DEPLOYMENT].yml
            - Define POD NAme with its selector, this is used by Kunernetes
            - Define Replicas (optional) default value is 1
            - Define Specifications
                - Define COntainer
                    - name
                    - image to put in container
                    - resources
                        - limits CPU
                        - Memory
                    - PORT, the port that is defined in docker file
    - define the service    
        - service.yaml or service.yml [ANY-FILE-NAME].yml
            - metadata lable
                - the service name
            - specifications
                - port
                    - External port
                - targetPort: the port exposed by container
                - selector
                    - The POD that host the service
                - type
                    - LoadBalancer, used to allow public access to the service
                    - ClusterIP
                        - the internal service, but the ingress or any other gateway is mandotory to configure to access these services         
    - apply deployment
           - This will create POD, create a container and fetch image in it
           - allocate CPU and Memory
           - Expose the PORT
        - kubectl apply -f deployment.yml
    - apply service
            - activate the service for public access
                - Assing external IP and PORT
        - kubectl apply -f service.yml

    - To remove service and deployment
        - First Delete the service
            - kubectl delete -f service.yml
        - Delete the deployment
            - kubectl delete -f deployment.yml         


