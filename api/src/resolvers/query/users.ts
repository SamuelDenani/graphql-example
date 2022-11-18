import type { User } from "../../typings/user";
import type { Context } from "../../typings/global";

export async function users(
  _: never,
  __: never,
  { services }: Context
): Promise<User[] | undefined> {
  const { placeholder: placeholderService } = services;

  try {
    const userInfos = await placeholderService.listUsers();

    return userInfos;
  } catch (error) {
    return;
  }
}
