# Dynamic Routing


- WHen the Link uses 'href' for '/blog/first', the folder 'blog' will be searched, if found, then either 'first' folder or 'first' component will be searched, if 'first' folder is found then the route navigation will start looking for component in 'first' folder. If the 'first' component is found then the component will be loaded. But, if no folder or component is foun then the 'index.js' will be looked for, and if found, it will be loaded and executed else error will be shown

- If the 'index.js' has a router query, then for '/blog/first', the 'first' will be taken as 'query parameter'

``` javascript
-  <Link
            href="/blog/[id]/[discussion]"
            as={`/blog/${id}/first-discussion`}
          >
            <a>First Discussion Comment</a>
          </Link>

```
- /blog/[id]/[discussion]
    - This will look for [id] sub-folder inside the 'blog' folder and will look for component [discussion].js
    - If found, the component will be lo0aded based on 
        - `/blog/${id}/first-discussion`
            - The value for  [discussion] is first-discussion



1. `pages/blog/[id]/index.js`
    - match with
        - `/blog/first`
2. `pages/blog/[id]/[discussion].js`
    - match with
        - `/blog/first/first-discussion`        