import React, { useEffect, useState } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getPosts } from './reducers/postReducer';
import memories from './images/memories.png';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './styles';

const App = () => {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();
    
    //removing currentID as a useEffect dep. ensures updates to posts render correctly
    //originally currentID was a dep. to inform <Form /> when a user wanted to edit a
    //post, but currentID propogates automatically from <Post /> to <App /> where
    //<Form /> can use it immediately. Once setCurrentId is called in <Post />, the
    //currentId travels up the mutual parent <App /> and <Form /> uses it without 
    //needing to 'listen' for the change to currentId.
    useEffect(() => {
        dispatch(getPosts());
    },[dispatch]);

    return (
        <Container maxWidth='lg'>
            <AppBar className={classes.appBar} position='static' color='inherit'>
                <Typography className={classes.heading} variant='h2' align='center'>Memories</Typography>
                <img className={classes.image} src={memories} alt='memories' height='60'/>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid className={classes.mainContainer} container justify='space-between' spacing={3}>
                        <Grid item xs={12} md={7}>
                            <Posts setCurrentId={setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={7} md={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId} />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App;