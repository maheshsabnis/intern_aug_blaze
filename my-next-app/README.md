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
        - <LInk>
            - next/link
7. Sharing Data Across Pages using Router
    - next/router object model available
    - 'withRouter' (Depricated)
        - a component that contains the component to route
    - The 'useRouter' hook used to share data across components                         