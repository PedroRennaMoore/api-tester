import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import GetPage from "./pages/getPage"
import PostPage from "./pages/postPage";
import UpdatePage from "./pages/updatePage";
import DeletePage from "./pages/deletePage";
import Header from "./components/header";

const AppRouter = () => {
    return(
        <Router>
            <Routes>
                <Route exact path="/" element={<Header children={<GetPage />} />}/>
                <Route exact path="/post" element={<Header children={<PostPage />} />}/>
                <Route exact path="/update" element={<Header children={<UpdatePage />} />}/>
                <Route exact path="/delete" element={<Header children={<DeletePage />} />}/>
            </Routes>
        </Router>
    )
}

export default AppRouter;