import express from 'express';
import { signupUser , loginUser } from '../controller/user-controller.js';
import { uploadImage , getImage } from '../controller/image-controller.js';
import { createPost , getAllPosts , getPost, getBlogs , getBlog } from '../controller/post-controller.js';
import { authenticateToken } from '../controller/jwt-controller.js';
import upload from '../utils/upload.js';
import { loginAdmin } from '../controller/admin-controller.js';
import { deletePost ,show , deleteBlog , updatePost} from '../controller/post-controller.js';

const router=express.Router();

router.post('/signup',signupUser);
router.post('/login',loginUser);

router.post('/file/upload',upload.single('file'),uploadImage);
router.get('/file/:filename',getImage);

router.post('/create',authenticateToken,createPost);
router.get('/posts',authenticateToken,getAllPosts);
router.get('/post/:id',authenticateToken,getPost);

router.post('/logina',loginAdmin);
router.get('/blogs',getBlogs);
router.get('/blog/:id',getBlog);

router.delete('/delete/:id',deletePost);

router.get('/blogpost',authenticateToken,show);
router.delete('/deletepost/:id',authenticateToken,deleteBlog);
router.put('/update/:id',authenticateToken,updatePost);

export default router;