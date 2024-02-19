
import Post from '../model/Post.js';

export const createPost=async(request,response)=>{
    try{
        const post=await new Post(request.body);
        post.save();
        return response.status(200).json({msg:"post saved successfully"});
    }catch(error){
        return response.status(500).json(error);
    }
}

export const getAllPosts=async(request,response)=>{
    let category=request.query.category;
    let posts;
    try{
        posts=await Post.find({});
        {/*
        if(!category){
            posts=await Post.find({});
        }
        else if(category)
        {
             posts=await Post.find({categories:category});
        }*/}

        return response.status(200).json(posts);
    }catch(error){
        return response.status(500).json({msg:error.message});
    }
}

export const getPost=async(request,response)=>{
    try{
       const post=await Post.findById(request.params.id);
       return response.status(200).json(post);
    }catch(error){
        return response.status(500).json({msg:error.message});
    }
}

export const getBlogs=async(request,respone)=>{
    try{
        const blogs=await Post.find({});
        return respone.status(200).json(blogs);
    }
    catch(error){
        return respone.status(500).json({msg:error.message});
    }
}

export const getBlog=async(request,response)=>{
    try{
        const post=await Post.findById(request.params.id);
        return response.status(200).json(post);
     }catch(error){
         return response.status(500).json({msg:error.message});
     }
}

export const deletePost=async(request,response)=>{
    try{
        const post=await Post.findById(request.params.id);
        if(!post)
        {
            return response.status(400).json({msg:"post not found"});
        }
        await post.delete();
        return response.status(200).json({msg:"post deleted successfully"});
    
    }catch(error){
        return response.status(500).json({msg:error.message});

    }

}

export const show=async(request,response)=>{
    try{
        const post=await Post.find({});
        return response.status(200).json(post);

    }
    catch(error){
        return response.status(500).json({msg:error.message}); 
    }
}

export const deleteBlog=async(request,response)=>{
    try{
        const post=await Post.findById(request.params.id);
        if(!post)
        {
            return response.status(400).json({msg:"post not found"});
        }
        await post.delete();
        return response.status(200).json({msg:"post deleted successfully"});
    
    }catch(error){
        return response.status(500).json({msg:error.message});

    }

}

export const updatePost=async(request,response)=>{
    try{
        const post=await Post.findById(request.params.id);
        if(!post){
            return response.status(400).json({msg:"post not found"});
        }
        await Post.findByIdAndUpdate(request.params.id,{ $set :request.body});
        return response.status(200).json({msg:"post updated successfully"});
    }
    catch(error){
        return response.status(500).json({msg:error.message});
    }
}