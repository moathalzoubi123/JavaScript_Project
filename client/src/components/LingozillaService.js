const baseURL = "http://localhost:9000/api/feedback";

export const postFeedback = (feedback) => {
  return fetch(baseURL, {
    method: "POST",
    body: JSON.stringify(feedback),
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());
};
