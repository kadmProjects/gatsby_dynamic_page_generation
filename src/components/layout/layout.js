import React from "react";
import "./layout.css"
import SEO from './seo';

const Layout = (props) => {

    return (
        <>
            <SEO title="Home" />
            <main>{ props.children }</main>
        </>
    )
}

Layout.propTypes = {
  //children: PropTypes.node.isRequired,
}

export default Layout
