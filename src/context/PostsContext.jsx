

import React,{ createContext } from 'react';
import { blogData } from '../BlogData';

const PostsContext = createContext(blogData);

export  function BlogDataProvider  ({children})  {

    return(
        <PostsContext.Provider
            value={{blogData }}>
            {children}
        </PostsContext.Provider>
        
    );
};

export default PostsContext;

