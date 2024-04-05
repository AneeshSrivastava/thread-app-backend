const queries = {};

const mutations = {
  createUser: async (_: any, {}: {}) => {
    return "Random ID";
  },
};

export const resolvers = { queries, mutations };
