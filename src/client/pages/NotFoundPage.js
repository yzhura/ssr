import React from "react";

const NotFoundPage = ({ staticContext = {} }) => {
    staticContext.notFound = true;
    return (
        <h1>Opps! Not found</h1>
    )
}

export default {
    component: NotFoundPage,
}