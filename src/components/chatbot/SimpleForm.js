import React from 'react';
import ChatBot from 'react-simple-chatbot';

const SimpleForm = () => {
  return ( 
      <ChatBot 
        steps={[
          {
            id: 'intro',
            message:'Hello! What is your name?',
            trigger: 'intro-user',
          },
          {
            id: 'intro-user',
            options:[
              {value:'y', label:'Yes', trigger:'yes-response'},
              {value:'n', label:'No', trigger:'no-response'},
            ]
          },
        ]}
      
      />
   );
}
 
export default SimpleForm;