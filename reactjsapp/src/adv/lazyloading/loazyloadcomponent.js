import React, {Fragment, Suspense} from 'react';

// lazy loading of the component
const DepartmentComponent = React.lazy(()=> import('./../../hooksapps/useStatecomponent/departmentcomponent'));
const LazyLoadComponent=()=>{
  
    return (
        <Fragment>
            {/* If the Department Component takes time to load then the fallback UI will be executed */}
            <Suspense fallback={<div className="container">Please wait.....</div>}>
                <section>
                    <DepartmentComponent/>
                </section>
            </Suspense>
        </Fragment> 
    );
};

export default LazyLoadComponent;