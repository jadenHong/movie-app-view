import React from 'react';
import { Link } from 'react-router-dom';

export const ListDetail = ({ detailInfo }) => {
    console.log(detailInfo)




    return (
        <div>
            {
                detailInfo ?

                    <div className="detail">
                        < div > <h3>Title: </h3>{detailInfo.title}</div >
                        <div><h3>Description: </h3>{detailInfo.description}</div>
                        <div><h3>Created: </h3>{detailInfo.created}</div>
                        <Link to={{
                            pathname: `/editList/${detailInfo.id}`,
                            state: {
                                id: detailInfo.id,
                                title: detailInfo.title,
                                description: detailInfo.description,
                                created: detailInfo.created,

                            }
                        }}>Edit</Link>
                    </div >

                    :

                    <div>
                        <h4>Please click on a List</h4>
                    </div>

            }
        </div>
    )
}