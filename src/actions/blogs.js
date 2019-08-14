import uuid from 'uuid';
import database from '../firebase/firebase';

//ADD_Blog> Action Creator
export const addBlog= (blog) => ({
    type:'ADD_BLOG',
    blog
});

export const startAddBlog= (blogData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {
            title ='',
            description = '',
            createdAt = 0
        } = blogData;

        const blog = {title, description,createdAt};

       return database.ref(`users/${uid}/blogs`).push(blog).then((ref)=> {
            dispatch(addBlog({
                id: ref.key,
                ...blog
                    }));
                });     
      };
};

//REMOVE_BLOG
export const removeBlog= ({id}) => ({
    type: 'REMOVE_BLOG',
    id
});

//START_REMVOE_BLOG
export const startRemoveBlog= ({ id } = {} ) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
           return database.ref(`users/${uid}/blogs/${id}`).remove().then(()=> {
            dispatch(removeBlog({ id }));
        });     
    };
};

// EDIT_BLOG
export const editBlog= (id, updates) => ({
    type: 'EDIT_BLOG',
    id,
    updates
  });
  
  export const startEditBlog = (id, updates) => {
      
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
      return database.ref(`users/${uid}/blogs/${id}`).update(updates).then(() => {
        dispatch(editBlog(id, updates));
      });
    };
  };
  
//SET_BLOGS
export const setBlogs = (blogs) => ({
    type: 'SET_BLOGS',
    blogs
});

//START_SET_BLOG
    //1.fetch all Blogdata at once
    //2. Parse that data into an array
    //3. Dispatch SET_BLOG

export const startSetBlogs= () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const blogs = [];     
        return database.ref(`users/${uid}/blogs`).once('value').then((snapshot) => {
            snapshot.forEach((childSnapshot) => {
            
                blogs.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()         
                });
                // console.log(blogs);
            });  
            dispatch(setBlogs(blogs));
        });    
      };
};
