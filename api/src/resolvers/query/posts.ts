import type { Post } from "../../typings/post";
import type { Context } from "../../typings/global";

type Args = {
  userId: number;
};

export async function posts(
  _: never,
  { userId }: Args,
  { services }: Context
): Promise<Post[] | undefined> {
  const { placeholder: placeholderService } = services;

  try {
    const userPosts = await placeholderService.userPosts(userId);

    return userPosts;
  } catch (error) {
    return;
  }
}
