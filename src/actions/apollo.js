import logError from 'logError';

/**
 * Promisifies the apollo query.
 */

export default function loadApolloQuery(type, query) {
  return (dispatch) => {
    return query.then((graphQLResult) => {
      const { errors, data } = graphQLResult;

      if (errors) {
        console.log('got some GraphQL execution errors', errors);
      }

      if (data) {
        if (Array.isArray(type)) {
          // Dispatches all actions in the response data.
          type.forEach(eachType => dispatch({ type: eachType, data }));
        } else {
          dispatch({ type, data });
        }
      }
    }).catch(logError);
  };
}
