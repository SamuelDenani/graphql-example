import type { Post } from "../../typings/post";
import type { Context } from "../../typings/global";

type Args = {
  id: number;
};

export async function post(
  _: never,
  { id }: Args,
  { services }: Context
): Promise<Post | undefined> {
  const { placeholder: placeholderService } = services;

  try {
    const postInfos = await placeholderService.postInfos(id);

    return postInfos;
  } catch (error) {
    return;
  }
}
