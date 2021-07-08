import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Post from './Post/Post';
import useStyles from './styles';
import { selectIds } from '../../reducers/postReducer';

const Posts = ({ setCurrentId }) => {
    
    const postIds = useSelector(selectIds);
    const fetchStatus = useSelector(state => state.posts.status); 
    const error = useSelector(state => state.posts.error);
    const classes = useStyles();

    let content;

    if(fetchStatus === 'fetching'){
        content = <CircularProgress />
    } 
    else if(fetchStatus === 'succeeded'){
        content = (
            <Grid className={classes.container} container alignItems='stretch' spacing={3}>
                {postIds.map(postId => 
                    <Grid key={postId} item xs={12} sm={6}>
                        <Post postId={postId} setCurrentId={setCurrentId} />
                    </Grid>
                )}
            </Grid>
        )
    }
    else if(fetchStatus === 'failed'){
        content = <div>{error}</div>
    }
    
    return (
       <>{content}</>     
    );
}

export default Posts;
