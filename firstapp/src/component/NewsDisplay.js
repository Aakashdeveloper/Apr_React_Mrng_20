import React from 'react';
import LazyLoad from 'react-lazyload';

const NewsDisplay = (props) => {
    console.log(props)

    const renderList = props.datalist.map((data,index) => {
        return(
            <LazyLoad height={200} throttle={500} key={data.id}>
                <div>
                    <h3>{data.title}</h3>
                    <p>{data.feed}</p>
                    <img src={data.imageUrl} alt="j"/>
                </div>
            </LazyLoad>
            
        )
    })

    return(
        <React.Fragment>
            {renderList}
        </React.Fragment>
    )
}

export default NewsDisplay;