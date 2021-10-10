import axios from "axios";


export const API = {
    GetChatbotResponse: async message => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (message === "") resolve("Please type something to kick off the conversation!");
          else resolve("echo : " + message);
        }, 2000);
      });
    }
  };
  
  
export const API2 = {
  Dwight1: message => {
    return axios({
      method: 'post', //you can set what request you want to be
      url: 'http://localhost:5000/test3',
      data: {message: message},
      headers: {
          // 'Access-Control-Allow-Origin': '*'
       }
    })
    .then((response) => {
      console.log(response);
      return response.data;
     })
  }
};