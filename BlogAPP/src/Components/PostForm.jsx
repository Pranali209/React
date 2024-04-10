import React from 'react'
import RTE from '../Components/RTE'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { Service } from "../AppWrite/Upload&Post"
import { useCallback } from 'react';
import { useEffect } from 'react';
import Input from '../Components/Input'
import Button from '../Components/Button'
function PostForm({ post }) {
    const navigate = useNavigate()
    const userData = useSelector(state => state.auth.userData)
    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            title: post?.title || "",
            slug: post?.$id || "",
            content: post?.content || "",
            status: post?.status || "active",
        },
    });
    const submit = async (data) => {
        if (post) {
            const file = data.image[0] ? await Service.UploadFile(data.image[0]) : null;

            if (file) {
                await Service.DeleteFle(post.feauturedImage)
            }

            const dbpost = await Service.UpdatePost(post.$id, {
                ...data,
                feauturedImage: file ? file.$id : null
            })
            if (dbpost) {
                navigate(`/post/${dbpost.$id}`)
            }

        }
        else {
            const file = data.image[0] ? await Service.UploadFile(data.image[0]) : null
            if (file) {
                data.feauturedImage = file.$id;
                const dbpost = await Service.CreatePost({ ...data, userId: userData.$id })
                if (dbpost) {
                    navigate(`/post/${dbpost.$id}`);
                }
            }

        }
    }
    const slugTransform = useCallback((value) => {
        if (value && typeof (value === "string")) {
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, "-")
                .replace(/\s/g, "-");
        }
        return " "

    }, [])
    useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === "title") {
                setValue("slug", slugTransform(value.title), { shouldValidate: true })
            }
        });
        return (
            () => (subscription.unsubscribe())
        )
    }, [setValue, watch, slugTransform])
    return (
        <>
            <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
                <div className="w-2/3 px-2">
                    <Input
                        label="Title :"
                        placeholder="Title"
                        className="mb-4"
                        {...register("title", { required: true })} />
                    <Input
                        label="slug"
                        placeholder="Slug"
                        className="mb-4"
                        {...register("slug", { required: true })}
                        onInput={(e) => {
                            setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                        }}
                    />
                    <RTE
                        label="Content :"
                        name="content"
                        control={control}
                        defaultValue={getValues("content")} />
                </div>
                <div className="w-1/3 px-2">
                    <Input
                        label="Featured Image :"
                        type="file"
                        className="mb-4"
                        accept="image/png, image/jpg, image/jpeg, image/gif"
                        {...register("image", { required: !post })}
                    />
                    {post && (
                        <div className="w-full mb-4">
                            <img
                                src={Service.getFilePreview(post.feauturedImage)}
                                alt={post.title}
                                className="rounded-lg"
                            />
                            <Select
                                options={["active", "inactive"]}
                                label="Status"
                                className="mb-4"
                                {...register("status", { required: true })}
                            />
                            <Button
                                type="submit"
                                bgColor={post ? "bg-green-500" : undefined}
                                className="w-full">
                                {post ? "Update" : "Submit"}
                            </Button>

                        </div>
                    )}
                </div>
            </form>
        </>
    )
}

export default PostForm
