import * as apiUrls from "../api_url";

export default class LinkService {
  async getAll() {
    try {
      const response = await fetch(apiUrls.LINKS_GET_ALL, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.json();
    } catch (error) {
      throw error;
    }
  }
}