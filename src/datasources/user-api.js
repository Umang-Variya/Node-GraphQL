const { RESTDataSource } = require('apollo-datasource-rest');
const db = require("../../db.json")
class ConversationAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:5000/';
  }

  getConversation() {
    return this.get(`conversation/`);
  }

  getConversationById(conversationId) {
    return this.get(`conversation/${conversationId}`);
  }

  createConversation(data) {
    return this.post(`conversation`, data);
  }

  updateConversationById(id, data) {
    return this.put(`conversation/${id}`,data);
  }

  deleteConversationById(id) {
    return this.delete(`conversation/${id}`);
  }
}

module.exports = ConversationAPI;
