import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbDownAltOutlined';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import useStyles from './styles';
import { useDispatch, useSelector } from 'react-redux';

import { deletePost, likePost } from '../../../actions/posts';
import { selectPostById  } from '../../../reducers/postReducer';

const Post = ({ postId, setCurrentId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const post = useSelector(state => selectPostById(state, postId));
    const user = JSON.parse(localStorage.getItem('profile'));

    const Likes = () => {
        if (post.likes.length > 0) {
          return post.likes.find((like) => like === (user?.result?.googleId || user?.result?._id))
            ? (
              <><ThumbUpAltIcon fontSize="small" />&nbsp;{post.likes.length > 2 ? `You and ${post.likes.length - 1} others` : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}` }</>
            ) : (
              <><ThumbUpAltOutlined fontSize="small" />&nbsp;{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}</>
            );
        }
    
        return <><ThumbUpAltOutlined fontSize="small" />&nbsp;Like</>;
      };

    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={post.selectedFile || 'https://cdn.iconscout.com/icon/premium/png-256-thumb/lightening-19-775890.png'} title={post.title} />
            <div className={classes.overlay}>
                <Typography variant='h6'>{post.name}</Typography>
                <Typography variant='body2'>{moment(post.createdAt).fromNow()}</Typography>    
            </div>
            {(user?.result._id || user?.result.googleId) === post.creator && 
                <div className={classes.overlay2}>
                    <Button style={{color: 'white'}} size='small' onClick={() => setCurrentId(postId)}>
                        <MoreHorizIcon fontSize='default' />
                    </Button>
                </div>}
            <div className={classes.details}>
                <Typography variant='body2' color='textSecondary' component='h2'>{post.tags.map(tag => `#${tag} `)}</Typography>
            </div>
            <Typography className={classes.title} variant='h5' gutterBottom component='h2'>{post.title}</Typography>
            <CardContent>
                <Typography variant='body2' color='textSecondary' component='p'>{post.message}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size='small' color='primary' disabled={!user} onClick={() => dispatch(likePost(postId))}>
                    <Likes />
                </Button>
                {(user?.result._id || user?.result.googleId) === post.creator && 
                    <Button size='small' color='primary' onClick={() => dispatch(deletePost(postId))}>
                        <DeleteIcon fontSize='small'/>
                        Delete
                    </Button>}
            </CardActions>
        </Card>
    );
}

export default Post;