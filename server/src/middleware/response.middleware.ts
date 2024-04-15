export const handleResponse = (
  data = {},
  message = "Success",
  status = "OK",
  code = 200
) => {
  let responseSchema = {
    data,
    message,
    status,
    code,
  };

  return responseSchema;
};