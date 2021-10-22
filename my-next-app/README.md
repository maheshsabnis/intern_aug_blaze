# Using Next.js
1. Pust all Styles inside the 'styles' folder
2. Put all 'pages' folder or by creating sub-folder of name 'components'
3. Put all services in the 'api' folder OR create a seperate folder named 'services' and add all code for external calls in it
4. From The Command Prompt run the following command
     - npm run build
        - This will generate a Production Build
     - npm run start
        - The Production Build will be used to execute the application
     - npm run dev
        - Start the Development server to run the application
5. Adding a page in 'pages' directory or its sub-directory will create a new page object (a component) into the build     
6. In-bulit support for routing
    - Link Component
        - USed to link components of pages like <a> tag
        - <Link>
            - next/link
7. Sharing Data Across Pages using Router
    - next/router object model available
    - 'withRouter' (Depricated)
        - a component that contains the component to route
    - The 'useRouter' hook used to share data across components                         
8. Uaing the 'getStaticProps()' method
    - This function will be invoked during the build time on server-side
    - THis function is not called on clientg-side
    - Method runs at Build Time, Once the JSON Data is available, it generates a 'Static HTML' on server
    - When to use this method?
        - The data is required for rendering immedialty the page is available for build ahead of any request initiated by user
        - The need is that the data is required for all the pages and to be cached for faster rendering of the HTML on browser
            - JSON and HTML both will be ready immediately
9. USing Dynamic Routing
    -  THis is a mechanism of generating the routes dynamically based on Query Parameters
    - THis is useful when you want to jump to a component conditionally or based on varying data
        - e.g.<Link href="/components/data/[value]">
                <a>go to page [value].js</a>
        </Link>            
    - Advantages of Dynamic Routing is that, the comnponent to navaigate to is decided based on the value selected    



    "https://apiapptrainingnewapp.azurewebsites.net/api/Products"    