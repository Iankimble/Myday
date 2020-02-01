// get all notes

// M
// T
// W
// TH
// F
// SA
// SU
export const allSunday = (userId, token) => {
  return fetch(`${process.env.REACT_APP_API_URL}/sunday/all/${userId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

// create a new note

// M
// T
// W
// TH
// F
// SA
// SU
export const sundayNew = (userId, token, data) => {
  return fetch(`${process.env.REACT_APP_API_URL}/sunday/new/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    },
    body: data
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

// delete a single note

// M
// T
// W
// TH
// F
// SA
// SU
export const sundayDelete = (sunNoteId, token) => {
  return fetch(`${process.env.REACT_APP_API_URL}/sunday/delete/${sunNoteId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};
