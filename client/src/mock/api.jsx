import loginData from './login.json'; 

const post = (url, params) => {
  console.log("URL: ", url);
  console.log("Params: ", params);  
  
  let user;

  switch (url) {
    case "/api/login":
      console.log("Login data:", loginData); 


      user = loginData.find(
        (user) => user.email === params.email && user.password === params.password
      );

      console.log("Found user:", user);  

      if (user) {
        return Promise.resolve({
          data: {
            id: user.id,
            username: user.username,  
            email: user.email,
            token: "mockToken",  
          },
        });
      } else {
        return Promise.reject(new Error("Invalid credentials"));
      }

    default:
      return Promise.reject(new Error("Invalid endpoint"));
  }
};

const axios = {
  post,
  get: () => {},
  put: () => {},
  delete: () => {},
};

export default axios;
