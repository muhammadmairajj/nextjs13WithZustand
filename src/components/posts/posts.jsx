"use client";
import React, { useState } from "react";
import { usePostsStore } from "@/store/Posts";
import styles from "./posts.module.css";

function Posts() {
  const { posts, addPost, editPost, deletePost } = usePostsStore();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [postId, setPostId] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  const handleAddPost = (event) => {
    event.preventDefault();

    if (!title || !description) return;
    const newPost = {
      id: Date.now(),
      title,
      description,
    };
    addPost(newPost);
    setTitle("");
    setDescription("");
  };

  const EditAPost = (id) => {
    const post = posts.filter((post) => post.id === id)[0];
    setTitle(post.title);
    setDescription(post.description);
    setPostId(id);
    setIsEdit(true);
  };

  const handleEditPost = (event) => {
    event.preventDefault();

    const updatedPost = {
      id: postId,
      title, 
      description
    }
    console.log(updatedPost.id, updatedPost);
    editPost(updatedPost.id, updatedPost);
    setTitle('');
    setDescription('');
    setIsEdit(false);
  }

  const handleDeletePost = (postId) => {
    deletePost(postId);
  }

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <input
          type="text"
          className={styles.input}
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          className={styles.input}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button
          className={styles.button}
          onClick={isEdit ? handleEditPost : handleAddPost}
        >
          {isEdit ? "Edit Post" : "Add New Post"}
        </button>
      </form>
      {posts ? (
        posts.map((post) => {
          return (
            <div className={styles.post} key={post.id}>
              <h3 className={styles.title}>{post.title}</h3>
              <p className={styles.description}>{post.description}</p>
              <button
                className={styles.editButton}
                onClick={() => EditAPost(post.id)}
              >
                Edit
              </button>
              <button className={styles.deleteButton}
              onClick={() => handleDeletePost(post.id)}>Delete</button>
            </div>
          );
        })
      ) : (
        <p>No Posts Found.</p>
      )}
    </div>
  );
}

export default Posts;
