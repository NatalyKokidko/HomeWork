const form = document.getElementById("yourFormId");

form.onsubmit = function submit(event) {
  // Preventing page reload
  event.preventDefault();
  // Creating special object, so that we can get input values
  const formData = new FormData(form);
  // Getting input values by input names (NOT ids)
  const name = formData.get("name") || "";
  const debtor = formData.get("debtor") || "";
  const amount = formData.get("amount") || "";
  const dueDate = formData.get("dueDate") || "";

  postRefund(name, debtor, amount, dueDate);
};

async function postRefund(name, debtor, amount, dueDate) {
  const response = await fetch(
    "https://oijv97k0l6.execute-api.eu-central-1.amazonaws.com/test/refunds",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        name: name,
        debtor: debtor,
        amount: amount,
        dueDate: dueDate
      })
    }
  );

  console.log(response);

  const json = await response.json();
  if (response.status == 200) {
    return json;
  } else {
    return Promise.reject(response);
  }
}

const postButton = document.getElementById("getRefund");
