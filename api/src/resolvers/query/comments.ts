import type { Comment } from "../../typings/comment";
import type { Context } from "../../typings/global";

type Args = {
  postId: number;
};

export async function comments(
  _: never,
  { postId }: Args,
  { services }: Context
): Promise<Comment[] | undefined> {
  const { placeholder: placeholderService } = services;

  try {
    const postComments = await placeholderService.postComments(postId);

    return postComments;
  } catch (error) {
    return;
  }
}
