import { Routes, Route } from "react-router-dom"
import React, {Suspense} from "react";
// import CollectionPageComponent from "../../page-components/collections/collection.page-component";
import HomePageComponent from "../../page-components/home/home.page-component"

const CollectionPageComponent = React.lazy(()=>import('./../../page-components/collections/collection.page-component'));
function RoutesComponent() {
    return (
        <>
            {/** Here we are defining the routes */}
            <Routes>
                <Route index element={<HomePageComponent />} />
                <Route path="/collection" element={<Suspense fallback={<h1>Loading....</h1>}><CollectionPageComponent /></Suspense>} />
            </Routes >
        </>
    )
}

export default RoutesComponent;