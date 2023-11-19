import { Routes, Route } from "react-router-dom"
import CollectionPageComponent from "../../page-components/collections/collection.page-component"
import HomePageComponent from "../../page-components/home/home.page-component"
function RoutesComponent() {
    return (
        <>
            {/** Here we are defining the routes */}
            <Routes>
                <Route index element={<HomePageComponent />} />
                <Route path="/collection" element={<CollectionPageComponent />} />
            </Routes >
        </>
    )
}

export default RoutesComponent