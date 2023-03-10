import React from 'react'
import { Helmet } from 'react-helmet'
// import "../../App.css";

const MetaData = ({ title }) => {
    return (
        <Helmet>
            <title>{`${title} - ShopIT`}</title>
        </Helmet>
    )
}

export default MetaData
