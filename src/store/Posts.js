import { create } from 'zustand';

export const usePostsStore = create((set) => ({
    posts: [
        {id: 1, title: "Post 1", description: "This is Post description 1"},
        {id: 2, title: "Post 2", description: "This is Post description 2"},
        {id: 3, title: "Post 3", description: "This is Post description 3"},
        {id: 4, title: "Post 4", description: "This is Post description 4"},
        {id: 5, title: "Post 5", description: "This is Post description 5"},
    ],
    addPost: (newPost) => {
        set((state) => {
            return { posts: [...state.posts, newPost] }
        })
    },
    deletePost: (postId) => {
        set((state) => {
           const delete_Post = state.posts.filter((post) => post.id !== postId);
           return { posts: delete_Post }
        })
    },
    editPost: (id, updatePost) => {
        set((state) => {
            const updatedPosts = state.posts.map((post) => {
                if(post.id === id) {
                    return {...post, ...updatePost}
                }
                return post;
            })
            return { posts: updatedPosts }
        })
    }
  }))