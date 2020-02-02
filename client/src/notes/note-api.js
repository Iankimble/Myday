// GET ALL NOTES BY DAY OF WEEK
// SUN
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
// MON
export const allMonday = (userId, token) => {
  return fetch(`${process.env.REACT_APP_API_URL}/monday/all/${userId}`, {
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
// TUE
export const allTuesday = (userId, token) => {
  return fetch(`${process.env.REACT_APP_API_URL}/tuesday/all/${userId}`, {
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
// WED
export const allWednesday = (userId, token) => {
  return fetch(`${process.env.REACT_APP_API_URL}/wednesday/all/${userId}`, {
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
// THUR
export const allThursday = (userId, token) => {
  return fetch(`${process.env.REACT_APP_API_URL}/thursday/all/${userId}`, {
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
// FRI
export const allFriday = (userId, token) => {
  return fetch(`${process.env.REACT_APP_API_URL}/friday/all/${userId}`, {
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
// SAT
export const allSaturday = (userId, token) => {
  return fetch(`${process.env.REACT_APP_API_URL}/saturday/all/${userId}`, {
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

//______________________________________________________________//
// CREATE NEW NOTE BASED ON DAY OF WEEK

// SUN
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

// MON
export const mondayNew = (userId, token, data) => {
  return fetch(`${process.env.REACT_APP_API_URL}/monday/new/${userId}`, {
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

// T
export const tuesdayNew = (userId, token, data) => {
  return fetch(`${process.env.REACT_APP_API_URL}/tuesday/new/${userId}`, {
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

// W
export const wednesdayNew = (userId, token, data) => {
  return fetch(`${process.env.REACT_APP_API_URL}/wednesday/new/${userId}`, {
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

// TH
export const thursdayNew = (userId, token, data) => {
  return fetch(`${process.env.REACT_APP_API_URL}/thursday/new/${userId}`, {
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

// F
export const fridayNew = (userId, token, data) => {
  return fetch(`${process.env.REACT_APP_API_URL}/friday/new/${userId}`, {
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

// SA
export const saturdayNew = (userId, token, data) => {
  return fetch(`${process.env.REACT_APP_API_URL}/saturday/new/${userId}`, {
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

//____________________________________________________________//
// DELETE SINGLE NOTE
// SUN
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

// MON
// TUES
// WED
// THUR
// FRI
// SAT
