// oldObj is inital state, updatedValues will be data that you want to update
export const updateObject = (oldObject, updatedValues) => {
    return {
      ...oldObject,
      ...updatedValues,
    };
  };