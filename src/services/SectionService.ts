import { Section } from "../model/model";
import { get, post, patch, del } from "./ServiceUtils";

class SectionService {
  private url = "/section";

  async listSections(): Promise<Section[]> {
    const response = await get(this.url);
    return response.data;
  }

  async getSection(id: string): Promise<Section> {
    const response = await get(this.url + "/" + id);
    return response.data.doc;
  }

  async postSection(section: Section): Promise<Section> {
    const result = await post(this.url, section);
    return result.data.doc;
  }

  async updateSection(section: Section): Promise<Section> {
    const result = await patch(this.url + "/" + section._id, section);
    return result.data.doc;
  }

  async deleteSection(section: Section): Promise<Section> {
    return await del(this.url + "/" + section._id);
  }
}

export default SectionService;
