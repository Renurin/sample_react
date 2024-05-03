import React from "react";
import { Helmet } from "react-helmet-async";

export default function SEO(title, description) {
    return(
        <Helmet>
            <SEO title={'Home'} description={'This is a home description'}></SEO>
            <title>{title}</title>
        </Helmet>

    )
}