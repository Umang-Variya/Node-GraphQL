
const testResolver =
{
    Query: {
        getConversationData: (_, __, { dataSources }) => {
            return dataSources.conversationAPI.getConversation();
        },

        getConversationDataBy: (_, { id }, { dataSources }) => {
            return dataSources.conversationAPI.getConversationById(id);
        },
    },

    Mutation: {
        createConversation: (_, { data }, { dataSources }) => {
            return dataSources.conversationAPI.createConversation(data);
        },

        updateConversation: (_, { id, data }, { dataSources }) => {
            return dataSources.conversationAPI.updateConversationById(id, data);
        },

        deleteConversation: async (_, { id }, { dataSources }) => {
            try {
                const response = await dataSources.conversationAPI.deleteConversationById(id);
                return {
                    code: 200,
                    success: true,
                    message: `Successfully delete conversation id :${id}`
                };
            } catch (err) {
                console.log("err ==>", err);
                return {
                    code: err.extensions.response.status,
                    success: false,
                    message: err.extensions.response.body
                };
            }
        }
    },
}
module.exports = { testResolver };
