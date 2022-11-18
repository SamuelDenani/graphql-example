import type { User } from "../../typings/user";
import type { Context } from "../../typings/global";

type Args = {
  id: number;
};

export async function user(
  _: never,
  { id }: Args,
  { services }: Context
): Promise<User | undefined> {
  const { placeholder: placeholderService } = services;

  try {
    const userInfos = await placeholderService.userInfos(id);
    const hasUserInfos = !!Object.keys(userInfos).length;

    if (!hasUserInfos) return;

    return userInfos as User;
  } catch (error) {
    return;
  }
}
