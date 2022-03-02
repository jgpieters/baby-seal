import { User } from "../model/model";
import { post } from "./ServiceUtils";

export default class AuthService {
  private url = "/auth";

  async login(body: User): Promise<User> {
    const response = await post(this.url, body);
    localStorage.setItem("token", response.token);
    return response;
  }

  async signup(body: User): Promise<any> {
    const response = await post(this.url + "/signup", body);
    return response;
  }
}
