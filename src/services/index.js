const apiURL = "https://65977dd0668d248edf22e575.mockapi.io/users";

export const post = async (body) => {
  try {
    const response = await fetch(apiURL, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      alert("Hubo un error");
      return;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
