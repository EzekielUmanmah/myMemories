import React, { useState, useEffect } from 'react';
import { Container, Grid, Grow } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import Posts from '../Posts/Posts';
import Form from '../Form/Form';

import { getPosts } from '../../reducers/postReducer';
import useStyles from './styles';

const Home = () => {
    const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();
    const classes = useStyles(); 

    useEffect(() => {
        dispatch(getPosts());
    },[dispatch]);

    return (
        <Grow in> 
            <Container>
                <Grid className={classes.mainContainer} container justify='space-between' alignItems='stretch' spacing={3}>
                    <Grid item xs={12} md={7}>
                        <Posts setCurrentId={setCurrentId} />
                    </Grid>
                    <Grid item xs={12} sm={7} md={4}>
                        <Form currentId={currentId} setCurrentId={setCurrentId} />
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    )
}

export default Home;