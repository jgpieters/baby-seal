import { Vlog } from "../model/model";
import { get, post, patch, del } from "./ServiceUtils";

class VlogService {
  private url = "/vlog";

  async listVlogs(): Promise<Vlog[]> {
    const response = await get(this.url);
    return response.data;
  }

  async getVlog(id: string): Promise<Vlog> {
    const response = await get(this.url + "/" + id);
    return response.data.doc;
  }

  async postVlog(vlog: Vlog): Promise<Vlog> {
    const result = await post(this.url, vlog);
    return result.data.doc;
  }

  async updateVlog(vlog: Vlog): Promise<Vlog> {
    const result = await patch(this.url + "/" + vlog._id, vlog);
    return result.data.doc;
  }

  async deleteVlog(vlog: Vlog): Promise<Vlog> {
    return await del(this.url + "/" + vlog._id);
  }
}

export default VlogService;
