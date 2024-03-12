const apiURL = "https://65977dd0668d248edf22e575.mockapi.io/users";

export const postF = async (body) => {
  const response = await fetch(apiURL, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    // alert("Algo salió mal");
    // return;
    //si hay SweetAltert
    return false;
  }

  const data = await response.json();
  return data;
};

export const getF = async () => {
  try {
    const response = await fetch(apiURL);
    if (!response) {
      return false;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
