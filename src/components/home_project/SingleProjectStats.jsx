import React from 'react';
import './SingleProjectStats.css';
import closingBracket from '../../assets/images/closingBracket.png';

function SingleProjectStats({tagList, title, description,stats}) {
    return (
        <div className="singleProjectStats">
           
            <div className="mainContent">
                <div className="leftSection">
                <div className="tagContainer">
                    {tagList.map(tag => {
                        return <div className="tag">{tag}</div>
                    })}
            </div>
            <div>
                    <h1 className="mainTitle">{title}</h1>
                    <p className="subtitle">■ {description}</p>
                    </div>
                </div>
                <div className="rightSection mt-10">
                    <div class="statisticContainer"style={{display:'flex', justifyContent:'space-between', gap:'70px'}}>
                        {stats.map(stat=>{
                            return(
                                <div className="statistic">
                                    <p className="statisticValue">{stat.number}</p>
                                    <p className="statisticLabel">{stat.text}</p>
                                </div>
                            )
                        })}                   
                    </div>
                    <div className="brace">
                        <img src={closingBracket}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SingleProjectStats;
