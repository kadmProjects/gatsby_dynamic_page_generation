import React from "react"
import Layout from './../components/layout/layout';
import TopLayout from './../components/layout/topLayout/topLayout';
import LeftLayout from './../components/layout/leftLayout/leftLayout';
import RightLayout from './../components/layout/rightLayout/rightLayout';
import MiddleLayout from './../components/layout/middleLayout/middleLayout';
import BottomLayout from './../components/layout/bottomLayout/bottomLayout';
import ToolsList from '../components/toolsList';

const getComponentListForTheSection = (section) => {
    let { components } = section;
    let itemsArray = [];
    for (const component in components) {
        if (components.hasOwnProperty(component)) {
            let cmpnt =  components[component];
            let { type, data, styles, id } = cmpnt;
            Object.keys(ToolsList).map((item, index) => {
                if (type === item) {
                    let componentData = {
                        id: id,
                        data: data,
                        styles: styles,
                        ComponentItem: ToolsList[item]
                    }
                    itemsArray.push(componentData);
                }
                return itemsArray;
            });
        }
    }

    return itemsArray;
}

const pageTemplate = (props) => {
    const { pageContext } = props;
    const { page } = pageContext;
    const { layout } = page;
    const {
        sectionTop,
        sectionBottom,
        sectionLeft,
        sectionRight,
        sectionMiddle 
    } = layout;

    let topLayoutComponentsToRender = getComponentListForTheSection(sectionTop).map((item, index) => {
        let { ComponentItem, id } = item;
        return <ComponentItem key={id} data={ item } />
    })
    
    let bottomLayoutComponentsToRender = getComponentListForTheSection(sectionBottom).map((item, index) => {
        let { ComponentItem, id } = item;
        return <ComponentItem key={id} data={ item } />
    })
    
    let leftLayoutComponentsToRender = getComponentListForTheSection(sectionLeft).map((item, index) => {
        let { ComponentItem, id } = item;
        return <ComponentItem key={id} data={ item } />
    })
    
    let rightLayoutComponentsToRender = getComponentListForTheSection(sectionRight).map((item, index) => {
        let { ComponentItem, id } = item;
        return <ComponentItem key={id} data={ item } />
    })
    
    let middleLayoutComponentsToRender = getComponentListForTheSection(sectionMiddle).map((item, index) => {
        let { ComponentItem, id } = item;
        return <ComponentItem key={id} data={ item } />
    })

    return (
        <Layout data={ page }>
            <TopLayout data={ sectionTop }>
                { topLayoutComponentsToRender }
            </TopLayout>
            <LeftLayout data={ sectionLeft }>
                { leftLayoutComponentsToRender }
            </LeftLayout>
            <RightLayout data={ sectionRight }>
                { rightLayoutComponentsToRender }
            </RightLayout>
            <MiddleLayout data={ sectionMiddle }>
                { middleLayoutComponentsToRender }
            </MiddleLayout>
            <BottomLayout data={ sectionBottom }>
                { bottomLayoutComponentsToRender }
            </BottomLayout>
        </Layout>
    )
}

export default pageTemplate
