import { RESTDataSource } from "@apollo/datasource-rest";

import { User } from "../../typings/user";
import { Post } from "../../typings/post";
import { Comment } from "../../typings/comment";

export class PlaceholderService extends RESTDataSource {
  override baseURL = "https://jsonplaceholder.typicode.com";

  public listUsers(): Promise<User[]> {
    return this.get(`/users`);
  }

  public userInfos(id: number): Promise<User | Record<string, never>> {
    return this.get(`/users/${id}`);
  }

  public userPosts(userId: number): Promise<Post[]> {
    return this.get(`/users/${userId}/posts`);
  }

  public postInfos(id: number): Promise<Post> {
    return this.get(`/posts/${id}`);
  }

  public postComments(postId: number): Promise<Comment[]> {
    return this.get(`/posts/${postId}/comments`);
  }
}
